# STEPS FOLLOWED TO SETUP THIS PROJECT

### CONFIGURATION

1. Run npm init --y to initialise a node app
2. Create .gitignore file and add node_modules/, .env & .vscode/ to it
3. Run npm i express cors helmet to install required dependencies for your express app
4. Run npx eslint --init to install eslint for this project. More information on eslint installation and configuration here:
5. Inside your package.json file, create start script with the bash code - node index.js
6. Now you'll need to create your index.js file in the project root location.
7. Run git init to initialise git in your project
8. Now will be a good time to git add and git commit your progress.

### BUILD EXPRESS SERVER
1. Import expressJS like this const express = require('express')
2. Import cors - const cors = require('cors')
3. Import helmet - const helmet = require('helmet')
4. Instantiate the express server app - const app = express();
5. Use the dependencies we imported earlier in the exact manner below:
  - app.use(helmet())
  - app.use(cors())
  - app.use(express.json())
6. Create a demo route - app.get('/api/say-hi', (req, res) => {
  res.json(`Hello ${req.query.name}, how are you?`);
});
7. Go to the line before the express server app is instantiated and write this - const port = process.env.PORT || 8000;
8. Instantiate the server to listen for changes - app.listen(port, () => {
  console.log(`* Server listening on ${port} *`);
});
9. Create a demo catchall middleware to test the server - app.use((req, res) => {
  res.json("My server is live!");
}); - Make sure to place at the bottom of all routes since it is a catchall route.
10. Now we will test our server.
  - In the project root location in your terminal, run npm start
  - In your browser enter this URL localhost:8000/ - you should see a message `My server is live!` display. Congratulations! Your express server is up and running.
  - To test if your demo route /api/say-hi works enter this code /api/say-hi?name=yourname in front of the URL in your browser. Your URL should look something like this localhost:8000/api/say-hi/?name=Evans. You should receive a message that reads "Hello Evans, how are you?". - Congratulations! Your demo endpoint works.
11. We are not quite done yet! In order to successfully deploy our app in the cloud we need to install and import a dependency to handle the code we wrote in line 7 above. Stop your server and run npm i dotenv
12. Create a .env file in the same location as the package.json file. Open up your .env file and type this in PORT=8000. Be mindful of whitespaces.
13. Go to line 1 in your index.js file and import your dotenv dependency like this - require('dotenv').config();
14. Remember to restart your server whenever you make changes to any file. For automatic server restart, there is a nifty npm package called nodemon.
15. Congratulations! We have successfully built a server that is ready to be deployed to the cloud.

### Deploying our Server to Heroku
1. We will be deploying our server using Github & Heroku
2. First create a new repository on your Github.com account
3. Follow the instruction on the github page to push your existing local repository to the repository you just created on github.
4. Head over to Heroku.com and create an account if you don't have one.
5. In your dashboard theres a button to the top right with label `New`. Click on it and select `Create New App`.
6. Put in your App Name, choose a region and click Create App.
7. Next we will be using the deployment method of Github. Click on Connect your Github account to connect your github to heroku.
8. Next you'll search for a repository to connect to heroku using the search box available below the deployment methods. Pick the repository for the node app you just created and click on the connect button next to it.
9. Finally, pick the git branch where your project is and deploy it manually. For now you'll want to ignore automatic deployment unless you know what you're doing.
10. Voila! Your server is live on heroku cloud.

### Adding our React App using Create-React-App
1. In the project root folder, run npx create-react-app client. If you want create-react-app to strictly use npm for installation you can add this flad --use-npm to the end of your npx command.
2. In order for heroku to recognize our app we need to teach it how to run our app. To do that, open your package.json and add this to scripts - `"heroku-postbuild": "cd client && npm i && npm run build"`.
3. Next, we want the app's main url to serve our react app and not our server. In the server's index.js file, just before the line where we start to use the dependencies, add this line app.use(express.static('client/build')). Note, however that this `'client/build'` represents the relative path to where your build static assets are in your react app and may have to vary with the location on your project.
3. Make sure your changes are committed and pushed to your github repository.
4. Go back to your heroku dashboard deploy section and manually deploy using the branch where updated project is.
5. Click on view site on heroku, you should be seeing your default react app on the home URL. You can go ahead and add `/api/say-hi/?name=Evans` to your URL to test that your server still works.
6. Congratulations! Your express-react-monolithic app is live on heroku and lives on `your-heroku-app-name.herokuapp.com`.