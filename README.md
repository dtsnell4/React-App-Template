This document is to get you started creating a new AppCentral React application

# Table of Contents
- Documentation
- Setting up the Application
- Components
- Actions
- Reducers
- Building the app locally
- Other useful scripts


# Documentation
This document does not teach ReactJS.  Refer to these sites for information about ReactJS and the 3rd party components AppCentral uses.  See the Design Documentation to determine what the appropriate components are to use in your features.
- [https://reactjs.org/docs/getting-started.html]
- [https://redux.js.org/]
- [https://css-tricks.com/learning-react-redux/]
- [https://redux-form.com/7.4.2/]
- [https://reactstrap.github.io/components/]
- [https://ej2.syncfusion.com/home/react.html]


# Setting up the Application
1. 	Create the app and instance on the server and in AppCentral
	TODO: Document the procedure to create apps and instances

2.	Clone the repo
	- Clone this repo locally if you have not done so already (SD_AppCentral_ReactTemplate)
		* $ git clone --recurse-submodules https://vsts-nova-edu.visualstudio.com/NSU/_git/SD_AppCentral_ReactTemplate
		* The `--recurse-submodules` should clone the AppCentral Submodule and add it to the project automatically
		* If it does not clone the submodule, run the following commands from /web/react/:
			- `git submodule init`
			- `git submodule update`
		* All development is done in the "Devlop" branch of AppCentralCore.
		* For more information on how to work with submodules in Git, visit [https://git-scm.com/book/en/v2/Git-Tools-Submodules] See the "Cloning a Project with Submodules" section
	- Check out the Getting_Started branch in SD_AppCentral_ReactTemplate
	- Copy the files from this repo to your project's repo 
		* A repo should have been created for your project in VSTS
		* All React front end code resides in the repo's `/web/react/` folder
		* Do not commit directly to this repo unless you are updating the Getting Started project

2. 	Update the config.json file
	- appname
	- apptitle
	- version
	- clientName (this is the name of the application in AppCentral created in step 1. Used in the url and must match the folder the dist code is in on the server.)

3. 	Update package.json
	- name
	- version
	- description

4. 	Update index.html `<title>` tag

5. 	Update styles/main.css
	- Uncomment any optional Bootstrap files that may be required for styling components as they are added to the app.
	- Add any custom styles unique to this app to the Custom Styles section of main.css


#Components
1. 	Create Components for the main feature pages
	- Each page is made up of two types of components 
		* Container (Class) components hold the "state" for the page
		* Presentational components (in the components folder) create the markup for the page and use "props" for showing variable data 
	- Define the main presentational components (e.g. PageOne in components/pageOne.js. Rename this file appropriately)
	- Define the main container components
		* e.g. PageOneComponent in /containers/pageOne.js.
		* import the presentational component at the top, e.g. PageOnePresentational
		* return the presentational component in the `render()` function towards the bottom of the code

2. 	Creating additional 'sub-pages' not listed in the Sidenav (e.g. create, edit, list pages)
	- Create the page components (e.g. components/PageOneA.js, containers/PageOneA.js)
	- Add the route in components/main.js (see next section for details)

3. 	Update /components/main.js 
	- Handles the markup, Sidenav menu and routing for the menu items and urls
		* Import the main features pages components (e.g. PageOneComponent)
		* Update the sideNavOptions constant to the desired routes, icons, and menu item names
		* Update the default Route redirect pathname (e.g. `${match.url}/pageone`)
		* Keys must be unique
	- Creating Submenus in the Sidenav
		* To the sidenavOptions constant, add a "subOptions" property to the object
		* The menu item needs to have a main route (e.g. `/${appName}/pagetwo`)
		* subOptions items need their own sub-routes (e.g. pagetwoa, pagetwob)
		* Submenus can have section headers.  Headers must have a route: null

4. 	/containers/main.js
	- The main container handles most of the interaction with AppCentral and generally will not need to be updated:
		* Getting permissions
		* Getting available apps to build the app switcher dropdown
		* Handle the appswitcher menu functionality
		* Logout
		* Validate instance of application


# Actions
1.	Actions are payloads of information that send data from your application to your store
	- They are the only source of information for the store
	- You send them to the store using `store.dispatch()`
	- Visit [https://redux.js.org/basics/actions] for an explanation of Redux actions

2.	actions/actionTypes.js
	- This file lists all of the actions used in the application.  While each action js file could keep its own action types inside, it is easier to maintain as the app gets larger with this actionTypes.js file
	- Any actions being used in any other components should be listed here

3.  Add action js files
	- Each page/feature should have its own action file if it interacts with the store
	- Actions generally involve getting or sending data via an API 


# Reducers
1.	Add your reducers to the rootReducer.js file as you need/create them.  Core reducers needed for basic functionality are already there

2.  Add a reducers js page for each feature page component of the app
	- Import the actionTypes.js file at the top
	- Add reducer functions based on the action types that have been created

3.  Add whatever data variables you need for your feature page components to the defaultState constant in the store.js file


# Building the App locally
1.	Set up the Application as outlined above
2.	Open a command prompt in the root react application folder (`/web/react/`)
3.	Run: `npm install`  (make sure you have Node.js installed)
4.	Run: `npm start` to build the application locally
5.  Clone the SD_AppCentral_AppCentral repo
	- Repeat steps 2,3 & 4 for SD_AppCentral_AppCentral if this if your first time running AppCentral locally.  Otherwise just steps 2 & 4 
	- The AppCentral admin application must be run simultaneously with any AppCentral app
	- When finished building, the AppCentral app should open a browser and go directly to the AppCentral login page
	- If it does not, just go to `localhost:8000/`


# Other Useful Scripts (found in package.json)
1.	`build:dev`: Builds the development server distribution files locally
2.	`build:test`: Builds the test server distribution files locally
3.	`build:stage`: Builds the stage server distribution files locally
4.	`build:prod`: Builds the production server distribution files locally
5.	`lint`: Runs the ESLint script to check for errors
6.	`lint:fix`: Attempts to fix any reported error when possible
7.	`clean_namespaces`: You got me, give it a try
