# js-rails-readit
Curated top Stories from the web

## Backend

The Backend is build with Ruby on Rails and using the SQLite Database. There are three models in the App the 
- USER
- Content
- COMMENT

### User
The User model as the following attributes
- First Name
- Last Name
- Email
A User has many contents and a User has many Comments through Content

### Content
The Content model as the folloing attributes
- Title
- Url
- Image
- Description
- User ID
A Content belongs to a User

### Comment
The Comment as the following attributes 
- Comment Text
- User ID
- Content ID
A Comment belongs to a Content and a User

## Front End
The Frontend is Built with JavaScript and all API calls to the backend using the Browser Fetch API
