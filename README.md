# Would you rather

## Description
This app allows logged in users to
* create new polls
* view polls asked by the users that are not answered
* view polls asked by the users that were answered and the number of votes within the polls
* leaderboard ranking users by the number polls created and answered

A poll created by a user will be visible to other users once they login

###Login
Currently, the app allows a user to impersonate 3 different users (provided in _DATA.js) by simply selecting the user from the dropdown and clicking on Login.

###Home
Once the user impersonates a give user and clicks on login, they will be able to see a list of Unanswered and Answered poll summary on their home page with a default view of Unanswered polls
To view Answered polls, simply click on the Answered tab

###Navigation and Menu
Navigation is available using a menu bar that displays navigation items and the current logged in user information

###Poll summary
Clicking on any of the poll summaries would display the full view of the poll. If the poll is unanswered, the user will be able to view the choices within the poll and submit it. Once submitted, the view switches to show the user selected answer and the number of votes of each choice based on how the other users have voted

###Create poll
Users are able to create new poll by navigating to New Question and enter the options within the poll

###Leaderboard
The leaderboard view shows a ranked list fo users based on number of questions asked and answered. The score of a user is updated in realtime to reflect latest activity

##Libraries
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
The UI is built using React
Styling is done using semantic-react components
State management is done using Redux

###Dev Notes
* App doesn't use password based authentication, user can impersonate by simply selecting the username from the dropdown
* A feature to create new users in the app is toggled off as of now as the backend supporting this feature is required

##Install Instructions
Clone the repository, build the app using npm by running the following command
```
npm install
```
Start the app using npm or yarn
```yarn start``` or ```npm start

cheers!