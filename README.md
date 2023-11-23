# Lighthouse Labs | CRUD with Express

* [X] Express
* [X] Routes
* [X] CRUD
* [X] EJS Templates

## What is Express?

* Web app / web server framework
* Can be set up with middleware

## CRUD

Create
Read
Update
Delete

Index (show all)
Create (show the "new" form)
Read (show a single one of this resource)
Update (submit the edit form) POST
Delete (delete this resource) POST
Edit (show the edit form)
Save (submit the new form) POST

## Routes

resource

INDEX / SHOW ALL
GET   /resource

CREATE
GET   /resource/new # SHOW the user the "new resource form"
POST  /resource

READ  
GET   /resource/3

UPDATE
GET   /resource/3/edit # SHOW the user the "edit resource form"
POST  /resource/3

DELETE
POST  /resource/3/delete

## Difference Between Methods GET and POST?

* GET is a standard request - often retrieval
    * Can send query parameters in our address in a GET (if needed)
    * Repeatable action!
    * Easily shareable / bookmarkable!
* POST is used to send information to a server via the body of the request
    * Not easily repeatable..
    * Does NOT show in the address bar

Both GET and POST can be used as the method for an HTML web form!

<form method="GET" action="/search">
    <input type="text" name="q">
    https://www.google.com/search?q=Express+NodeJS

<form method="POST" action="/sign-in">
    <input type="text" name="username">


## Data for Today

```js

const pets = {
    Kane: { name: 'Kane', type: 'Dog' },
    Quorra: { name: 'Quorra', type: 'Dog', age: 2 },
    Shadow: { name: 'Shadow', type: 'Rabbit', age: 5 }
    Booboo: { name: 'Booboo', type: 'Cat' },
    Ryder: { name: 'Ryder', type: 'Dog' },
    Mia: { name: 'Mia', type: 'Cat' },
    Keke: { name: 'Keke', type: 'Dog', age: 10 }
};

I  GET   /pets              # Show all pets
C  GET   /pets/new          # Show new pet form
R  GET   /pets/:name        # Show info about this pet
U  POST  /pets/:name        # Submission of edit form
D  POST  /pets/:name/delete # Submission of delete form
E  GET   /pets/:name/edit   # Show edit pet form
S  POST  /pets              # Submission of create/new form

```













GET /home

`app.get('/home', (req, res) => {});`
