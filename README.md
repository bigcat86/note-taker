# note-taker
Note Taker - Challenge #11

## Task
- AS A small business owner, I WANT to be able to write and save notes, SO THAT I can organize my thoughts and keep track of tasks I need to complete.
- GIVEN a note-taking application, WHEN I open the Note Taker, THEN I am presented with a landing page with a link to a notes page
- WHEN I click on the link to the notes page, THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
- WHEN I enter a new note title and the note’s text, THEN a Save icon appears in the navigation at the top of the page
- WHEN I click on the Save icon, THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
- WHEN I click on an existing note in the list in the left-hand column, THEN that note appears in the right-hand column
- WHEN I click on the Write icon in the navigation at the top of the page, THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column

## Process
- Create routes for 'GET /notes', 'GET *', 'GET /api/notes', 'POST /api/notes', 'DELETE /api/notes' (bonus) using express.js, that will read/add/delete to the db.json file.
- Start by importing all required packages including express and fs.
- Initialize the middleware.
- Create the GET routes by sending the required html files, or in the case of API, the db.json file.
- Create the POST route by taking the request, making it an object, then writing it to the db.json file.
- Create the DELETE route by taking the request ID, matching it to one of the existing ID's, then removing it from the array and re-writing the db.json file.

## What I Learned
- How to comprehensively use and deploy express.js to create a server
- To create different types of routes using JS logic and syntax
- Solidified knowledge of node.js and its packages/dependencies
- How to deploy an app using Heroku

## Check out the Heroku deployed site at: https://note-taker-bigcat86.herokuapp.com/

## Check out the video demo: https://drive.google.com/file/d/19jVlhs_rAbR-Q5I-fyxhdv7Z2LryrTAR/view

## Screenshots:
### Homepage:
![Screenshot 2023-05-09 at 2 36 38 PM](https://github.com/bigcat86/note-taker/assets/122062578/ba6f1b5c-8b9e-431c-8d79-db72874a88c1)
### Notes Page:
![Screenshot 2023-05-09 at 2 38 14 PM](https://github.com/bigcat86/note-taker/assets/122062578/1ffb2a91-ad63-4a2a-a93d-88c6921c9706)
### API:
![Screenshot 2023-05-09 at 2 38 35 PM](https://github.com/bigcat86/note-taker/assets/122062578/fd8d3eac-712d-4a35-a275-6614750ea2b2)
