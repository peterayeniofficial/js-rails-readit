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
  // return `
  //   <div class="col-md-4">
  //   <div class="card mb-4 shadow-sm">
  //     <img  class="bd-placeholder-img card-img-top" src="${content.image}"/>
  //     <div class="card-body">
  //       <h3>${content.title}</h3>
  //       <p class="card-text">${content.description}</p>
  //       <div class="d-flex justify-content-between align-items-center">
  //         <div class="btn-group">
  //           <a class="btn btn-sm btn-outline-secondary" href="${content.url}" target="_blank">View Story from Source</a>
  //         </div>
  //         <div class="btn-group">
  //           <button class="btn btn-sm btn-outline-secondary">Delete</button>
  //         </div>
  //         <small class="text-muted">By: ${content.user.first_name}</small>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  // `;

  let outerDiv = document.createElement("div");
  let cardDiv = document.createElement("div");
  let cardImage = document.createElement("img");
  let cardBodyDiv = document.createElement("div");
  let cardTitle = document.createElement("h1");
  let cardDescription = document.createElement("p");
  let buttonOuterDiv = document.createElement("div");
  let buttonViewDiv = document.createElement("div");
  let buttonDeleteDiv = document.createElement("div");
  let viewLink = document.createElement("a");
  let deleteButton = document.createElement("button");
  let authorName = document.createElement("small");

  outerDiv.classList.add("col-md-4");
  cardDiv.classList.add("card", "mb-4", "shadow-sm");
  cardImage.classList.add("bd-placeholder-img", "card-img-top");
  cardBodyDiv.classList.add("card-body");
  cardDescription.classList.add("card-text");
  buttonOuterDiv.classList.add(
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );
  buttonViewDiv.classList.add("btn-group");
  buttonDeleteDiv.classList.add("btn-group");
  viewLink.classList.add("btn", "btn-sm", "btn-outline-secondary");
  authorName.classList.add("text-muted");

  // card image
  cardImage.src = content.image;
  // card title
  cardTitle.innerText = content.title;
  // card description
  cardDescription.innerText = content.description;

  // view link button
  viewLink.href = content.url;
  viewLink.innerText = "View Story from Source";
  viewLink.target = "_blank";
  buttonViewDiv.append(viewLink);

  // delete button
  deleteButton.innerText = "Delete";
  deleteButton.classList.add("btn", "btn-sm", "btn-danger");
  buttonDeleteDiv.append(deleteButton);

  // author Name
  authorName.innerText = "By: " + content.user.first_name;

  buttonOuterDiv.append(buttonViewDiv, buttonDeleteDiv, authorName);
  cardBodyDiv.append(cardTitle, cardDescription, buttonOuterDiv);
  cardDiv.append(cardImage, cardBodyDiv);
  outerDiv.append(cardDiv);

  // add event listener
  deleteButton.addEventListener("click", () =>
    deleteContent(outerDiv, content.id)
  );

  return outerDiv;
};

// append card to HTML
const displayCard = contents => {
  const contentRow = document.querySelector(".row");
  contents.forEach(content => {
    contentRow.append(contentCard(content));
  });
};

// Get contents
const getContents = () => {
  fetch("http://localhost:3000/contents")
    .then(resp => resp.json())
    .then(contents => displayCard(contents));
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
const deleteContent = (outerDiv, contentId) => {
  data = {
    content_id: contentId.id
  };
  return fetch(`http://localhost:3000/contents/${contentId.id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(outerDiv.remove());
};

formHTML();
getContents();
addContent();
