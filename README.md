# Lighthouse Labs | CRUD with Express

[GitHub Repository and Branch](https://github.com/WarrenUhrich/lighthouse-labs-crud-with-express/tree/2022.05.17-web-ft-02may2022) | [Vimeo Video](https://vimeo.com/710984808/1defa41932)

* [X] Express
* [X] Middleware
* [X] Routes
* [X] EJS Templates
* [X] CRUD

## What is Express?

Framework for node.js apps to more easily accept HTTP Requests, and return HTTP responses.

## CRUD?

* Create (New Resource Form / Save)
* Read (Individual / Index)
* Update (Edit Form / Update)
* Delete

## GET vs. POST

### GET

`myblog.com?id=3`

* Is able to send a request with query parameters (right in the URL / address bar)
* Easy to share / reproduce
* Great for searches and reaching resources consistently

### POST

* Not easily bookmarkable / reproducable
* Does not show submission values in address bar / URL
* Great for sign-ins, edits, etc. -> actions you don't want as easily repeated or visible

## EJS

Used for making modularized HTML within a node.js back-end.

* Separation of Concerns
* Write HTML without formatting as a giant string
* Sprinkle in some JS logic / expressions if/where you need to

In express, it will assume template files will be present in your project's `/views` directory.

## Our Project Plan Notes!

It is good to have a plan of action. Consider what method and path suits your goals best.

Different resources may require different routes. Does the resource you're working on *need* to be deleted? To be edited? Tweets are not editable, as an example.

```JavaScript
/** https://www.google.com/search?q=Node.js+Documentation
 * Consider the resources / paths / methods...
 * 
 * CREATE:  GET     /new        Form for new pet.
 * SAVE:    POST    /new        Create the new pet (handle submission.)
 * READ:    GET     /           Index of Pets (Displays All)
 * EDIT:    GET     /edit/:id   Render populated form.
 * UPDATE:  POST    /edit/:id   Update pet resource (handle submission.)
 * DELETE:  POST    /delete/:id Remove pet resource.
 */
 ```

## Resources

* [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete)
* [Express](https://expressjs.com/)
* [EJS](https://ejs.co/#install)
* [`body-parser`](https://www.npmjs.com/package/body-parser)
* [Morgan](https://expressjs.com/en/resources/middleware/morgan.html)
* [Nodemon](https://github.com/remy/nodemon#nodemon)
