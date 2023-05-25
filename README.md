# Lighthouse Labs | CRUD with Express

* [X] Express
* [X] Routes
* [X] CRUD
* [ ] EJS Templates

## Express! What is it good for!?

It is a node.js framework for building HTTP web servers, easily accepting requests and sending responses.

## CRUD

What is CRUD? Any time we're dealing with a resource (blog post, video, user profile) we should consider which of CRUD are appropriate.

* INDEX
* CREATE
* READ
* UPDATE
* DELETE
* EDIT
* SAVE

* Browse
* Read
* Edit
* Add
* Delete

## Resource / Data

Pets!

```js
{
    Quorra: {name: 'Quorra', age: 1.5, type: 'dog'},
    Donut:  {name: 'Donut',  age: 5,   type: 'dog'},
    Kitten: {name: 'Kitten', age: 13,  type: 'cat'},
    Whisky: {name: 'Whisky', age: 10,  type: 'cat'},
    Shaggy: {name: 'Shaggy', age: 5,   type: 'dog'},
    Zuko:   {name: 'Zuko',   age: 3,   type: 'cat'},
    Woody:  {name: 'Woody',  age: 2,   type: 'dog'},
    B:      {name: 'B',      age: 6.5, type: 'dog'},
    Stashe: {name: 'Stashe', age: 3,   type: 'cat'}
}
```

## Routes

GET - implied we want to receive data
    * Appears in address as key-value pairs
    * Can be easily shared, bookmarked
    * Can be easily repeated

POST - convention, might be updating/creating something
    * Submits data in the body of your request
    * Not easily repeatable

https://google.com/search?q=JavaScript+MDN
<form method="GET" action="/search">
    <input name="q">


<form method="POST" action="/sign-in">
    <input name="username">
    <input name="password">

iCRUDES

```
CRUD      | Method     | Path              | Purpose

=================================================================

CREATE    | GET        | /pets/new         | Display the "new pet" form
SAVE      | POST       | /pets             | Submit the "new pet" form
      
INDEX     | GET        | /pets             | Display all pets
READ      | GET        | /pets/:key        | Show a single pet

UPDATE    | POST       | /pets/:key        | Submit the "edit pet" form
EDIT      | GET        | /pets/:key/edit   | Display the "edit pet" form

DELETE    | POST       | /pets/:key/delete | Submit the "delete pet" form
```
