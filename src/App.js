import React, { PureComponent } from 'react';
import EsriLoaderReact from 'esri-loader-react';
import './App.css'
import MapContainer from './container/MapContainer'

class App extends PureComponent {

  render(){
    return (
      <MapContainer />
    );
  }
}

export default App;
