CongressSearch is an easy to use tool that implements the Geocodio API to help you identify your current representatives in the United States Congress. Simply search for your address and we will provide contact information, as well as social media links, to your Representative as well as both of your Senators. 

To get started, clone the repo and install any dependencies:

$ bundle install

--- BACKEND SETUP ---

Change your directory to congress_api:

$ cd congress_api

Run the necessary migrations:

$ rails db:migrate

...and spin up a server to get your backend running. 

$ rails s

--- FRONTEND SETUP ---

Start or split into a second terminal, while your rails server is running, and cd into congress_frontend:

$ cd congress_frontend

With Node Package Manager installed, run npm start to start a Node server. 

$ npm start

Within a few seconds, your browser should load the frontend. You're ready to start searching!

--- TIPS AND TRICKS --- 

1 - Make sure you are running both a Rails server and npm start so that the backend and frontend can communicate. 

2 - The only requirement for searching is a City/State or Zipcode. This data is mandatory to determine your representatives. 

3 - Participate! Don't forget to contact your reps about the issues you care about. Make your voice heard!
