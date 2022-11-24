# Lighthouse Labs | CRUD with Express

* [ ] Express
* [ ] Routes
* [ ] CRUD
* [ ] EJS Templates

## Express! What is it good for!?

Simplifying the process of creating an HTTP server.

## CRUD

Any time we are working with resources on a web server...

* CREATE
* READ
* UPDATE
* DELETE

## Data

Resource: PET(S)

{name: 'Quorra', age: 1, type: 'dog'},
{name: 'Marie', age: 3, type: 'cat'},
{name: 'Stanley', age: 4, 'cat'}
{name: 'Milly', age: 4, 'dog'}
{name: 'Tobi', age: 2, 'dog'}

## Routes!

Routes are essentially different paths, with specific intended methods (verbs GET / POST) that the client can interact with.

```
CRUD      METHOD      PATH

CREATE    GET         /pets/new        # Display NEW PET form
CREATE    POST        /pets            # NEW PET form submission
READ      GET         /pets            # Display all pets (index)
READ      GET         /pets/:id        # Display specific pet (show)
UPDATE    GET         /pets/:id/edit   # Display EDIT PET form
UPDATE    POST        /pets/:id        # EDIT PET form submission
DELETE    POST        /pets/:id/delete # DELETE specific pet
```

## EJS (Embedded JavaScript)

* Helps us format HTML strings
* You can sprinkle bits of JS logic in EJS files
* EJS is back-end, and helps us format a string BEFORE it is sent to the browser
* EJS does NOT run in a browser, and must be run in a back-end only
* Separation of concerns
