# Lighthouse Labs | CRUD with Express

* [ ] Express
* [ ] Middleware
* [ ] Routes
* [ ] EJS Templates
* [ ] CRUD

## What is Express?

Framework for node.js apps to more easily accept HTTP Requests, and return HTTP responses.

## CRUD?

* Create (New Resource Form / Save)
* Read (Individual / Index)
* Update (Edit Form / Update)
* Delete

## GET vs. POST

### GET

myblog.com?id=3

* Is able to send a request with query parameters (right in the URL / address bar.)
* Easy to share / reproduce

### POST

* Not easily bookmarkable / reproducable
* Does not show submission values in address bar / URL.

## EJS

Used for making modularized HTML within a node.js back-end.

* Separation of Concerns
* Write HTML without formatting as a string
* Sprinkle in some JS logic / expressions if/where you need to

`/views`

## Our Project Notes!

```JavaScript
// &
// q = Node.js Documentation

/** https://www.google.com/search?q=Node.js+Documentation
 * Consider the resources / paths / methods...
 * 
 * CREATE:  GET     /new        Form for new pet.
 * SAVE:    POST    /new        Create the new pet.
 * READ:    GET     /           Index of Pets (Displays All)
 * EDIT:    GET     /edit/:id   Render populated form.
 * UPDATE:  POST    /edit/:id   Update pet resource.
 * DELETE:  POST    /delete/:id Remove pet resource.
 */
 ```
