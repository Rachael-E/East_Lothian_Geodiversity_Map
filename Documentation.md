## Connecting a React App with an Express backend server: an example using local API geographical data stored in MongoDB, and displayed visually using the ArcGIS JS API  

### Introduction 
If you're a newbie to coding as I am, you'll recognise that good note keeping and documenting your coding approach, workflows and outcomes are an essential part in your software developmenet journey. The process of documenting your code not only allows you to reinforce and consolidate your learning, but also provides you (and your colleagues, instructors, peers, maybe your cat) with a solid record and proof that you understand the concepts. Strong self documentation means that you can also refer back to your own notes at any point in the future, as well as refer other developers to your thoughts and workflow if you're brave enough to put it out there as part of your GitHub repo. 

It is even possible that you may have stumbled across an alternative workflow that others can relate to more than others: after all, every one of us learns differently and the more information out there, the more likely it is that a solution can be found.

In my case, as part of my 'learning to code' journey, I taught myself how to combine a React web application with a backend Express server, whilst building my [final project](https://github.com/Rachael-E/East_Lothian_Geodiversity_Map) when studying at [CodeClan](https://codeclan.com). I had a local API of geological sites with descriptions and lat longs stored in JSON format that I wanted to store in a Mongo database, access it via an Express Server, and render the sites as interactive markers. I had practised before implementing the ArcGIS JS API using only a [front-end web application](https://github.com/Rachael-E/Countries_of_the_World), but to consolidate my learning of the final module at CodeClan, wanted to incorporate back-end functionality. 

In this blog/documentation, I'll share the workflow that allowed me to implement the ArcGIS JS API into a React web application with an Express backend server, serving and storing data from a local API in JSON to the client via MongoDB. 

#### The ArcGIS JS API: a quick introduction 
The [ArcGIS JS API](https://developers.arcgis.com/javascript/latest/sample-code/index.html) by ESRI is a powerful mapping API capable of rendering and displaying 2D or 3D maps. It is easy to use, and comes complete with a whole range of GIS (Geographic Information System) toolkit, including a range of base-maps, data visualisation and data analysis tools. ESRI's excellent online tutorials and documentation are intuitive and easy to follow for junior developers such as myself to follow. My favourite feature is their sandbox, where you can play with preset code showing off different features of the API to give you a safe environment to view live changes (and to see what happens when you break it!). Here's a link to one of my favourites when I was learning, the simple yet effective [Basemap Toggle](https://developers.arcgis.com/javascript/latest/sample-code/sandbox/index.html?sample=intro-widgets). 
 
### Getting Started: setting up a React App from Terminal
This documentation does not go into the functionality of how React works, but rather assumes that the user has a working knowledge of JavaScript, has the create-react-app JavaScript Package installed globally on their machine [(see documentation here)](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md) and is comfortable with using Terminal on a MacOS environment. 

1. Set up a new React App from Terminal with a project name: `create-react-app your_project_name_here` 
2. The next step relies on importing two additional packages to help implment the ArcGIS JS API functionality in the React Application: `esri-loader`, and `esri-loader-react`. Esri-Loader is a library to help load modules from the ArcGIS JS Api in non-Dojo (a JavaScript Toolkit) applications [(see documentation here)](https://github.com/Esri/esri-loader#why-is-this-needed), by injecting it into a web page at runtime. Esri-Loader-React is a React component wrapper: [see here for its documentation](https://github.com/davetimmins/esri-loader-react). 
3. Install these two helper packages to your project directory: 
	`npm install esri-loader esri-loader react`  
4. `npm start` will then boot up the template React App on your machine on https://localhost:3000 (the default if available). Congratulations: you have set up a React App from the Terminal!  

### Getting the file structure set up and ensuring code is readable and maintainable 

1. In order to keep your code readable, it is best to separate the map logic (i.e. rendering a map in a container on a web page) and keep it in a separate file to the main App.js file created by React during our `create-react-app` step. This way, the functionality of the map logic can be required within App.js and keep that file nice and tidy. 
2. In your src folder, create a new folder called 'container', and within that a new JavaScript file called MapContainer.js: this container is where your map will render. 
3. In MapContainer.js, import React and PureComponent, and EsriLoaderReact: `import React, { PureComponent } from 'react';`
`import EsriLoaderReact from 'esri-loader-react';`
4. Set up a class called 'MapContainer' which extends PureComponent from React. This is a 'built in' class to React, from which we can use methods such as Render (to populate a view with whatever we want) and set the state to populate the view with whatever we set the state to be (an array of longitudes and latitudes for example). Don't forget to export at the end, so that the code can be visible to App.js. 
`class MapContainer extends PureComponent {}`
`export default MapContainer;`
5. Set up the constructor for the MapContainer class. This should make use of props from PureComponent, and set a state for the component. Because the state will be populated with data from a local API (stored within MongoDB), state can be set to contain an empty array (awaiting the arrival of an array of GIS objects from the database). The GIS Object Coordinates key can be null for now, we will set its state later to hold onto the co-ordinates in Lat Long from the Objects once we have them.
6. `constructor(props){super(props)this.state = {GISObjectCoords: null,GISObjectsFromDataBase: [],};this.onReadyCallback = this.onReadyCallback.bind(this);}`
  	
### Initialising an Express back end server to handle data from a database
1. Two servers are required: one, the React hosted server which serves the data of the front-end functionality to the browser, but also another one which will serve data from the back-end functionality to the database. 
2. To set this up, move all of the existing create-react folders and files to a new folder called client, and on the same level of client, `mkdir server`.
3. In this folder, a new server can be created which will handle data from a database to the client. To initiate and install a new server (we will use Express), in the server folder `npm init-y` (this will initiate node modules and a package.json), `npm install express` (this will install express).
4. We also need to set up some routers which will allow us to request via the client the data using RESTful routes. 
5. `mkdir routers` `cd routers` `touch index_router.js mapdata_router.js`
6. The index router file is responsible for connecting the Mongo Database with our RESTful routes from our mapdata_router.js, and our mapdata_router.js is responsible for setting up the RESTful routes for the data to be extracted from the database in a suitable JSON format via a GET route.
7. An additional file called server.js is also required in order to set the localhost address of where the server is to live: because we can't have two servers living on the default localhost channel (3000), this should be set to 3001.

### Setting up the database using MongoDB
1. Whilst still working in the server folder created above, set up a new database by: `npm install mongodb`
2. In a new terminal tab, `mongodb` and leave running. 
3. In another new terminal tab, seed the database with seeds file which contains project JSON. In the author's case: `// Initialize MongoDB database called mapdata
use mapdata;
db.dropDatabase();
// Initialize Mongo collection called mapDataInfo
// Add in objects for seeding the database by using .insertMany
db.mapDataInfo.insertMany([add objects here in JSON format])`
4. In terminal, `npm install nodemon` so that every time changes are made to the project files, the server automatically restarts and the page is refreshed to view changes.
5. `npm start`: once this is up and running successfully, the user should be able to access the data from their seeds file using something like localhost3000/api/mapDataInfo.

### Setting the state of the React App to that of the data in the database
1. This can be achieved by setting the state, and using React's `componentDidMount(){}` method.
2. This method requires a URL of where the data is sitting (in this case, our Express server is providing a direct URL to that via localhost3000/api/mapDataInfo). It will then fetch the data, turn the response of the data to JSON and then take that data for the user to do what they want. 
3. In this case, we will take all of the data and set it to the state of the GISObjectsFromDatabase. We can also map through this data to extract the lat long co-ordinates, and set these to the GISObjectsCoords state.
4. We have now achieved saving the state of the application with data accessed via the Express server to the MongoDB database, and are now ready to put that data in the ArcGIS JS API.


### Importing ArcGIS JS API Functionality into your React App
1. Now that the data has been safely set to the state of the app (having first requested it from the back-end express server to the React client), it is now possible to make use of this data in the ArcGIS JS API.
2. The first step is to set up the access to the features wanted for this project. In this documentation, the examples of features to load from the available ArcGIS modules are the Map, MapView, Graphic and BasemapToggle. 
`  onReadyCallback({loadedModules: [Map, MapView, Graphic, BasemapToggle], containerNode}){}`
3. Once these modules have been added to the method onReadyCallback, they need to be populated with the objects proved by the ArcGIS JS API.
4. The Map module allows the rendering of a map with a chosen basemap (e.g. satellite, oceanographic, hybrid, topo) `const theMap = new Map({basemap: 'hybrid'});`
5. The MapView module controls the position of the map when loaded (e.g. where the center of the map should be in long/lat, how zoomed in should it be and what should the map be: in this case, it points to the const variable 'theMap' in step 4)
	`    const mapView = new MapView({container: containerNode, center: [long, lat], zoom: 9.5, map: theMap});` 
6. The Graphic module allows insertion of map pins or markers for visually showing sites of interests on a map. However, be mindful that the ArcGIS JS API uses long/lat notation and not lat/long: using a.reverse() on individual latlong arrays may be required depending on data structure. 
 `const uniqueCountryMarkers = this.state.countries.map((country) => {}` [See documentation for graphic options here.](https://developers.arcgis.com/javascript/latest/api-reference/esri-Graphic.html)
7. Finally, BasemapToggle brings in functionality that allows the user to toggle between base maps.  

### Rendering the map into the web app using Render method
1. React's render method will return a div element with a classname, any HTML of the developers choice, and a method to run. 
2. But first, the `render()` method needs to know where to access the ArcGIS JS API from before it can render it on screen. It is accessed by storing the URL of the API in a variable, and then calling that in another method, this time one which contains pre-defined code structure from `esri-loader-react`.
3. To access the url for the ArcGIS JS API: `  const options = {url: 'https://js.arcgis.com/4.7/'};`
4. To load it via EsriLoaderReact: `var componentToRender = (<EsriLoaderReact options={options} modulesToLoad={['esri/Map', 'esri/views/MapView', 'esri/Graphic', 'esri/widgets/BasemapToggle', 'esri/Color']} onReady={this.onReadyCallback}/>)`  
5. Author's note: At this point in my project, running the above code alone did not render the map. After talking with my instructors at CodeClan, we wondered if the EsriLoaderREact does not remember setState change (which is activated during calling of the Render function), and so we had to force it to redo the render using an if statement: if the array of objects appears empty, then reload. A bit of a hack! 
6. Then, return the information in a div: `return (<div className ="App">{componentToRender}</div>);`
    
7. In the App.js file in the client folder, this is all that is needed to now populate the web app with a map, hosted by ArcGIS JS API, along with the data saved in the database and accessed via the back end Express server:
 `class App extends PureComponent {
render(){
    return (
      <MapContainer />
    );
  }
}
`  
