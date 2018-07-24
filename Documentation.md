## Using the ArcGIS JS API with React, Express, and MongoDB: how to create a full stack web app to display your own geographical data on a smooth mapping API. 

### Introduction 
If you're a newbie to coding as I am, you'll recognise that good note keeping and documenting your coding approach, workflows and outcomes are an essential part in your software development journey. The process of documenting code not only allows you to reinforce and consolidate your learning, but also provides you (and your colleagues, instructors, peers, and maybe even your cat) with a solid record and proof that you understand the concepts. Strong self documentation means that you can also refer back to your own notes at any point in the future, as well as refer other developers to your thoughts and workflow if you're brave enough to put it out there as part of your GitHub repo. It is even possible that you may have stumbled across an alternative workflow that others can relate to more than existing documentation out there, or that you may have written in a way that a reader can just click with: after all, every one of us learns differently and the more information out there, the more likely it is that a solution can be found.

In the case of this part blog/part documentation, as part of my 'learning to code' journey, I taught myself how to combine a React web application with a backend Express server, whilst building my [final project](https://github.com/Rachael-E/East_Lothian_Geodiversity_Map) when studying at [CodeClan](https://codeclan.com). I had a local API of geological sites with descriptions and lat longs stored in JSON format that I wanted to save in a Mongo database, access it via an Express Server, and render the sites as interactive markers through the front-end React application. Before creating a full-stack app incorporating this functionality, I had practised implementing the ArcGIS JS API into a web application using only a [front-end web application](https://github.com/Rachael-E/Countries_of_the_World) approach [(pulling data from the RESTful countries API)](https://restcountries.eu/rest/v2/all), but to consolidate my learning of the final module at CodeClan, I wanted to incorporate back-end functionality. 

Below, I will describe briefly what the ArcGIS JS API is, and share the workflow that allowed me to implement the ArcGIS JS API into a React web application with an Express backend server, serving and storing data from a local API in JSON to the client via MongoDB. To get a visual idea of what can be built at the end of the process, check out my [final project ReadMe.](https://github.com/Rachael-E/East_Lothian_Geodiversity_Map/blob/master/README.md)

#### The ArcGIS JS API: a quick introduction 
The [ArcGIS JS API](https://developers.arcgis.com/javascript/latest/sample-code/index.html) by ESRI is a powerful mapping API capable of rendering and displaying 2D or 3D maps. It is easy to use, and comes complete with a whole range of GIS (Geographic Information System) toolkits, including a range of base-maps, data visualisation and data analysis tools. ESRI's excellent online tutorials and documentation are intuitive and easy to follow for junior developers such as myself to follow. My favourite feature is their sandbox, where you can play with preset code showing off different features of the API to give you a safe environment to view live changes (and to see what happens when you break it!). Here's a link to one of my favourites when I was learning, the simple yet effective [Basemap Toggle](https://developers.arcgis.com/javascript/latest/sample-code/sandbox/index.html?sample=intro-widgets). 
 
### Getting Started: setting up a React App from Terminal
Before getting started, a quick note to advise that this documentation does not go into the functionality of how React/Express/MongoDB works, but rather assumes that the user has a working knowledge of JavaScript, has the create-react-app JavaScript Package installed globally on their machine [(see documentation here)](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md). This documentation is for users on a MacOSX system using the Terminal. 

1. Set up a new React App from the command line with a project name: `create-react-app your_project_name_here` 
2. Import two additional packages to help implement the ArcGIS JS API functionality in the React Application: `esri-loader`, and `esri-loader-react`. Esri-Loader is a library to help load modules from the ArcGIS JS Api in non-Dojo (a JavaScript Toolkit) applications [(see documentation here)](https://github.com/Esri/esri-loader#why-is-this-needed), by injecting it into a web page at runtime. Esri-Loader-React is a React component wrapper: [see here for its documentation](https://github.com/davetimmins/esri-loader-react). 
3. Install these two helper packages to your project directory: 
	`npm install esri-loader esri-loader react`  
4. `npm start` will then boot up the template React App on your machine on https://localhost:3000 (the default if available). Congratulations: you have set up a React App from the Terminal, and should now see the default React template looking happily at you from your browser with a blue spinning icon. 
5. In the App.js file (this is the file that tells React what to render on your webpage), delete everything contained within the render() method as we will populate that later.

### Getting the file structure set up and ensuring code is readable and maintainable 
As this web application documentation is to ultimately render a Map, we will need a file to store the code and logic required to set this up.

1. In order to keep your code readable, it is best to separate the logic that will be used to render the map in a container on a web page from the App.js file: in other words, it is best to store that in a separate file. This way, the functionality of the map logic can be required, rather than stored within App.js. 
2. In your src folder, create a new folder called 'container', and within that, create a new JavaScript file called MapContainer.js. 
3. In MapContainer.js, import React and PureComponent, and EsriLoaderReact: `import React, { PureComponent } from 'react';`
`import EsriLoaderReact from 'esri-loader-react';`
4. Set up a class called 'MapContainer' which extends PureComponent from React. This is a 'built in' class to React, from which we can use methods such as Render (to populate a view with whatever we want) and set the state to populate the view with whatever we set the state to be (an array of longitudes and latitudes for example). Don't forget to export at the end, so that the code can be visible to App.js. 
`class MapContainer extends PureComponent {}`
`export default MapContainer;`
5. Set up the constructor for the MapContainer class. This should make use of props from PureComponent, and set a state for the component. Because the state will be populated with data from a local API (stored within MongoDB), state can be set to contain an empty array (awaiting the arrival of an array of GIS objects from the database). The GIS Object Coordinates key can be null for now, we will set its state later to hold onto the co-ordinates (in LatLong) from the Objects once we have them.
6. `constructor(props){super(props)this.state = {GISObjectCoords: null,GISObjectsFromDataBase: [],};`

### Preparing the folder structure for a full stack application: setting up client and server folders
Until now, we have been working from the files and folder that our create-react-app command set up for us in a project directory. React itself uses a server to serve data from the client to the browser, and this is how we were able to view a web page with the React template message. However, because in this project two servers will be required (the React one, AND an Express backend server to communicate with the database using a GET route), it is sensible to set up two clearly defined project workspaces.

1. To set this up, move all of the existing create-react folders and files to a new folder called client, and on the same level of client, `mkdir server`.
2. The new server folder will contain the files responsible for Express server and MongoDB.

### Setting up the database using MongoDB
Our MapContainer class is set up and ready to go, and the project file set up is looking good. However, before accessing the ArcGIS JS API to display data on a map, and before setting up the Express server, we need to have some data to access and serve in the first place. This is where MongoDB comes in handy: it is a non-relational database which stores data in a flexible JSON format. 

1. Whilst still working in the server folder created above, set up a new database by: `npm install mongodb`
2. In a new terminal tab within the server folder, `mongodb` and leave running. 
3. Within the server folder, `mkdir db` and create a new file in there called seeds.db. This file should start with code that will initialize a MongoDB database called mapdata, and create a collection within that called mapDataInfo, and then insert objects into the database: `// Initialize MongoDB database called mapdata
`use mapdata;
db.dropDatabase();
// Initialize Mongo collection called mapDataInfo
// Add in objects for seeding the database by using .insertMany
db.mapDataInfo.insertMany([add objects here in JSON format])`
4. Below this, seeds.db should contain in JSON format details of your geographical objects, most importantly lat/long (so that the ArcGIS JS API knows where to create map markers for each site) and text to display in a pop up when a user clicks on each site. N.B. ArcGIS JS API works in long/lat rather than lat/long, it might be worth setting up your objects to accommodate this, otherwise, a .reverse() method can be called later. 
5. In another new terminal tab, still within the server folder, seed the database. 

### Initialising an Express back end server to handle data from a database
Now that our database is seeded, we want to be able to access it via an Express backend server using GET requests. We will set this up in the server folder.

1. In the server directory, `npm init-y` (this will initiate node modules and a package.json), and `npm install express` (this will install express).
2. We also need to set up some routers which will allow us to request the data, and for it to respond using RESTful routes (we will just use GET in this documentation). 
3. `mkdir routers` `cd routers` `touch index_router.js mapdata_router.js`
4. The index router file is responsible for connecting the Mongo Database with our RESTful routes from our mapdata_router.js:

`MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  const db = client.db('mapdata');
  const mapDataInfo = db.collection('mapDataInfo');
  router.use('/api/mapDataInfo', mapDataRouter(mapDataInfo));
});`

and our mapdata_router.js is responsible for setting up the RESTful routes for the data to be extracted from the database in a suitable JSON format via a GET route:

`const mapDataRouter = function (mapDataInfo){
  router.get('/', (req,res) => {
    mapDataInfo
    .find()
    .toArray()
    .then((docs) => res.json(docs))
  });
  return router;
};`

5. An additional file called server.js is also required in order to set the localhost address of where the Express server is to talk to the React server: because we can't have two servers running on the default localhost channel (3000), and because we know we will be connecting the Express server to the React client server at some point, we need to let it know to connect via channel 3001. See [here](https://github.com/Rachael-E/East_Lothian_Geodiversity_Map/blob/master/server/server.js) for example code.
6. In terminal, `npm install nodemon` so that every time changes are made to the project files, the server automatically restarts and the page is refreshed to view changes.
7. `npm start`: once this is up and running successfully, the user should be able to access the data from a locally hosted API with data stored in MongoDB, using something like localhost3000/api/mapDataInfo.

### Setting the state of the React App to that of the data in the database
Now that we have our front-end React client server set up, and our back-end Express server ready and waiting to serve data to the front end, we can begin to set up the state of our front-end to render on an ArcGIS JS API map. From now on we are working back in the client folder.

1. In MapContainer.js, we will set up a new method (inherited from PureComponent) which will allow us to access our local API and set the state of our component to that stored within the MongoDB.
2. Set up the `componentDidMount(){}` method.
3. This method requires a URL of where the data is sitting (in this case, our Express server is providing a direct URL to that via localhost3000/api/mapDataInfo). It will then fetch the data, turn the response of the data to JSON and then take that data for the user to do what they want. In this case we will take all of the data, and set it to the state of the GISObjectsFromDatabase. We can also map through this data to extract the lat long co-ordinates, and set these to the GISObjectsCoords state:
`componentDidMount(){
    const url = 'http://localhost:3000/api/mapDataInfo';
    fetch(url)
    .then(res => res.json())
    .then( (AllData) => {
      const allDataCoords = AllData.map((mapInfo, index) => {
        return mapInfo.latlng
      });`
`this.setState({
        GISObjectsFromDatabase: AllData,
        GISObjectsCoords: allDataCoords
      })`
4. We have now achieved saving the state of the application with data accessed via the Express server to the MongoDB database, and are now ready to put that data in the ArcGIS JS API.

### Importing ArcGIS JS API Functionality into your React App
Now that the data has been safely set to the state of the app (having first requested it from the back-end express server to the React client), it is now possible to make use of this data in the ArcGIS JS API.

1. The first step is to set up the access to the features wanted for this project and store them in a method called 'onReadyCallback'. The examples of features in this documentation to load from the available ArcGIS JS API modules are the Map, MapView, Graphic and BasemapToggle: but there are many many more!: 
`  onReadyCallback({loadedModules: [Map, MapView, Graphic, BasemapToggle], containerNode}){}`
2. Once these modules have been added to the method onReadyCallback, they need to be populated with the objects proved by the ArcGIS JS API.
3. The Map module allows the rendering of a map with a chosen basemap (e.g. satellite, oceanographic, hybrid, topo) `const theMap = new Map({basemap: 'hybrid'});`
4. The MapView module controls the position of the map when loaded (e.g. where the center of the map should be in long/lat, how zoomed in should it be and what should the map be: in this case, it points to the const variable 'theMap' in step 4)
	`    const mapView = new MapView({container: containerNode, center: [long, lat], zoom: 9.5, map: theMap});` 
5. The Graphic module allows insertion of map pins or markers for visually showing sites of interests on a map. However, be mindful that the ArcGIS JS API uses long/lat notation and not lat/long: using a.reverse() on individual latlong arrays may be required depending on data structure. `const uniqueCountryMarkers = this.state.countries.map((country) => {}` [See documentation for graphic options here.](https://developers.arcgis.com/javascript/latest/api-reference/esri-Graphic.html)
6. Finally, BasemapToggle brings in functionality that allows the user to toggle between base maps.  
7. Remember to bind the method onReadyCallback to the constructor. `this.onReadyCallback = this.onReadyCallback.bind(this);}`

### Rendering the map into the web app using Render method
Nearly there! Everything is set up, and nearly ready to be rendered to our browser. We will set up a render() method to allow this.

1. React's render method will return a div element with a classname, HTML for headers or paragraphs, and a method to run. 
2. But first, the `render()` method needs to know where to access the ArcGIS JS API from before it can render it on screen. It is accessed by storing the URL of the API in a variable, and then calling that in another method, this time one which contains pre-defined code structure from `esri-loader-react`.
3. To access the url for the ArcGIS JS API: `  const options = {url: 'https://js.arcgis.com/4.7/'};`
4. To load it via EsriLoaderReact: `var componentToRender = (<EsriLoaderReact options={options} modulesToLoad={['esri/Map', 'esri/views/MapView', 'esri/Graphic', 'esri/widgets/BasemapToggle', 'esri/Color']} onReady={this.onReadyCallback}/>)`  
5. Author's note: At this point in my project, running the above code alone did not render the map. After talking with my instructors at CodeClan, we wondered if the EsriLoaderReact does not remember setState change (which is activated during calling of the Render function), and so we had to force it to redo the rendering using an if else statement: if the state is empty, show page reloading, otherwise, load modules through EsriLoaderReact, this seemed to do the trick. If the same thing happens, [check out our work-round solution here, from line 110.](https://github.com/Rachael-E/East_Lothian_Geodiversity_Map/blob/master/client/src/container/MapContainer.js)
6. Then, return the information in a div: `return (<div className ="App">{componentToRender}</div>);`
7. In the App.js file in the client folder, we just need to require MapContainer within the file, and call it within the render block. This is all that is needed to now populate the web app with a map, hosted by ArcGIS JS API, along with the data saved in the database and accessed via the back end Express server:
 `class App extends PureComponent {
render(){
    return (
      <MapContainer />
    );
  }
}
` 

Hopefully you should now have a fully functioning full stack web app displaying data of your choice on to a map provided by the ArcGIS JS API! 
