const main = document.querySelector("#main");

// Add form
const formHTML = () => {
  let formHtml = `
    <section class="jumbotron text-center">
    <div class="container">
      <h1>ReadIt</h1>
      <p class="lead text-muted">Curated top stories from around the web</p>
      <form class="form-content">
        <img class="mb-4" src="/docs/4.4/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">
        <h2 class="h3 mb-3 font-weight-normal">Add a story</h2>

        <div class="form-group">
            <label for="inputEmail" class="sr-only">Title</label>
        <input type="text" id="inputTitle" class="form-control" placeholder="Title" required autofocus>
        </div>
        
        <div class="form-group">
            <label for="inputURL" class="sr-only">Story URL</label>
            <input type="url" id="inputURL" class="form-control" placeholder="URL" required>
        </div>

        <div class="form-group">
            <label for="inputImage" class="sr-only">Image URL</label>
            <input type="url" id="inputImage" class="form-control" placeholder="Image URL" required>
        </div>

        <div class="form-group">
            <label for="description" class="sr-only">Description</label>
            <textarea class="form-control" id="description" rows="3" placeholder="Description"></textarea>
          </div>
       
        <button class="btn btn-lg btn-primary btn-block" type="submit">Submit</button>
      </form>
    </div>
  </section>
  <section class="contents">
  <div class="album py-5 bg-light">
      <div class="container">
           <div class="row">
               
           </div>
      </div>

  </div>
</section>
    `;

  main.innerHTML += formHtml;
};

const contentCard = content => {
  return `
    <div class="col-md-4">
    <div class="card mb-4 shadow-sm">
      <img  class="bd-placeholder-img card-img-top" src="${content.image}"/>
      <div class="card-body">
        <h3>${content.title}</h3>
        <p class="card-text">${content.description}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <a class="btn btn-sm btn-outline-secondary" href="${content.url}" target="_blank">View Story from Source</a>
          </div>
          <small class="text-muted">By: ${content.user.first_name}</small>
        </div>
      </div>
    </div>
  </div>
  `;
};

// append card to HTML
const displayCard = content => {
  const contentRow = document.querySelector(".row");
  contentRow.innerHTML += contentCard(content);
};

// Get contents
const getContents = () => {
  fetch("http://localhost:3000/contents")
    .then(resp => resp.json())
    .then(contents => {
      contents.forEach(content => displayCard(content));
    });
};

// Add content

const addContent = () => {
  const addContentForm = document.querySelector(".form-content");
  addContentForm.addEventListener("submit", e => {
    e.preventDefault();
    let title = document.querySelector("#inputTitle").value;
    let url = document.querySelector("#inputURL").value;
    let image = document.querySelector("#inputImage").value;
    let description = document.querySelector("#description").value;
    fetch("http://localhost:3000/contents", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: title,
        url: url,
        image: image,
        description: description
      })
    })
      .then(resp => resp.json())
      .then(content => contentCard(content));
    addContentForm.reset();
  });
};

// delete content
// Like Images
const deleteContent = contentId => {
  data = {
    content_id: contentId
  };
  return fetch("http://localhost:3000/contents", {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(console.log);
};

formHTML();
getContents();
addContent();
