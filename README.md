# Phase 3 Project Proposal
## Introduction

We are building an art auction website called Sketch 11. Users will be able to log in, view art, and bid on it. If they are artists, they will also be able to post, edit, and delete listings. 

For this project, we will be **building a Sinatra API backend** that uses
**Active Record** to access and persist data in a database. This databse will be used
by a separate **React frontend** that interacts with the database via the API.

## Requirements

The project will include:

- Active Record to interact with a database, which stores the art listenings, user profiles, and user bids.
- Three models with a one-to-many and many-to-many relationship (Arts and Bids, joined by Users).
- The following API routes in Sinatra:
  - create and read actions for at least two of the models (artists can create listings, users can create bids, and everyone can see the art.)
  - full CRUD capability for at least one of the models (the artists, who can also delete and edit listings).
- A separate React frontend application that interacts with the API to
  perform CRUD actions (through the use of forms).
- Proper front end state management by updating state using a
  setState function after receiving responses from a POST, PATCH, or DELETE 
  request. (We will NOT be relying on a GET request to update state). 
- OO design patterns, which will include separate classes for each
  model with instance and class methods, as necessary. 
- Routes (both client side and back end) that follow RESTful
  conventions.

  
- Our goal is to use our back end optimally. When passing JSON for related associations to the front 
  end from the back end, we will use active record methods in our controller to grab
  the needed data from the database and provide as JSON to the front end. We will
  NOT be relying on filtering front end state or a separate fetch request to
  retrieve related data.

