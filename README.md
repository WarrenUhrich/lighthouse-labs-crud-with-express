# Lighthouse Labs | CRUD with Express

* [X] Express
* [X] Routes
* [X] CRUD
* [X] EJS Templates

## Running this Experiment

```shell
npm install express ejs morgan
node express-server.js
```

Navigate to [http://localhost:8080/pets](http://localhost:8080/pets) to begin exploring the CRUD application!

## Express! What is it good for!?

It is a node.js framework for building HTTP web servers, easily accepting requests and sending responses.

## Resource / Data

Pets!

```js

const pets = {
    Kane:   { name: 'Kane',   type: 'Dog' },
    Quorra: { name: 'Quorra', type: 'Dog',    age: 2 },
    Shadow: { name: 'Shadow', type: 'Rabbit', age: 5 }
    Booboo: { name: 'Booboo', type: 'Cat' },
    Ryder:  { name: 'Ryder',  type: 'Dog' },
    Mia:    { name: 'Mia',    type: 'Cat' },
    Keke:   { name: 'Keke',   type: 'Dog',    age: 10 }
};
```

```
I  GET   /pets              # Show all pets
C  GET   /pets/new          # Show new pet form
R  GET   /pets/:name        # Show info about this pet
U  POST  /pets/:name        # Submission of edit form
D  POST  /pets/:name/delete # Submission of delete form
E  GET   /pets/:name/edit   # Show edit pet form
S  POST  /pets              # Submission of create/new form
```

## CRUD

What is CRUD? Any time we're dealing with a resource (blog post, video, user profile) we should consider which of CRUD are appropriate.

```
CRUD      | Method     | Path              | Purpose
=========================================================================

CREATE    | GET        | /pets/new         | Display the "new pet" form
SAVE      | POST       | /pets             | Submit the "new pet" form
      
INDEX     | GET        | /pets             | Display all pets
READ      | GET        | /pets/:key        | Show a single pet

UPDATE    | POST       | /pets/:key        | Submit the "edit pet" form
EDIT      | GET        | /pets/:key/edit   | Display the "edit pet" form

DELETE    | POST       | /pets/:key/delete | Submit the "delete pet" form
```

## EJS (Embedded JavaScript)

* Helps us format HTML strings
* You can sprinkle bits of JS logic in EJS files
* EJS is back-end, and helps us format a string BEFORE it is sent to the browser
* EJS does NOT run in a browser, and must be run in a back-end only
* Separation of concerns

## GET vs. POST Forms

### GET

* Is able to send a request with query parameters (right in the URL / address bar)
* Easy to share / reproduce
* Great for searches and reaching resources consistently

`myblog.com?id=3`

OR

```HTML
<form method="GET" action="https://google.com/search">
    <input name="q">
```

`https://google.com/search?q=query+parameter+strings`

### POST

* Not easily bookmarkable / reproducable
* Does not show submission values in address bar / URL
* Great for sign-ins, edits, etc. -> actions you don't want as easily repeated or visible

```HTML
<form method="POST" action="https://site.com/sign-in">
    <input name="user">
    <input name="pass">
```

## Resources

* [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete)
* [Express](https://expressjs.com/)
* [EJS](https://ejs.co/#install)
* [`body-parser`](https://www.npmjs.com/package/body-parser)
* [Morgan](https://expressjs.com/en/resources/middleware/morgan.html)
* [Nodemon](https://github.com/remy/nodemon#nodemon)
