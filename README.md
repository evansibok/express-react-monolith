# STEPS FOLLOWED TO BUILD THIS PROJECT

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
15. 
