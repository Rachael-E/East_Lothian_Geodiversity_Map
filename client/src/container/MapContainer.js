import React, { PureComponent } from 'react';
import EsriLoaderReact from 'esri-loader-react';
import MapList from '../components/MapInfoDetail';


class MapContainer extends PureComponent {

  constructor(props){
    super(props)
    this.state = {
      geoDivCoords: null,
      geoDivInfoObjects: [],
    };
    this.onReadyCallback = this.onReadyCallback.bind(this);
  }

  componentDidMount(){
    const url = 'http://localhost:3000/api/mapDataInfo';
    fetch(url)
    .then(res => res.json())
    .then( (geoDivInfo) => {

      const allGeoDivData = geoDivInfo.map((mapInfo, index) => {
        return mapInfo.latlng.reverse()
      });

      geoDivInfo.sort(function(first, second) {
        var localityNameFirst = first.name;
        var localityNameSecond = second.name;
        return (localityNameFirst < localityNameSecond) ? -1 : (localityNameFirst > localityNameSecond) ? 1 : 0;
      });

      this.setState({
        geoDivInfoObjects: geoDivInfo,
        geoDivCoords: allGeoDivData
      })
    })
    .catch(error => console.log("Error:", error))
  }

  onReadyCallback({loadedModules: [Map, MapView, Graphic, BasemapToggle, Color, PictureMarkerSymbol], containerNode}){

      const theMap = new Map({
        basemap: 'hybrid'
      });

      const mapView = new MapView({
        container: containerNode,
        center: [-2.7585052, 55.970854],
        zoom: 9.5,
        map: theMap
      });

      const uniqueCountryMarkers = this.state.geoDivInfoObjects.map((mapInfo) => {

        return new Graphic({
          geometry: {
            type: 'point',
            longitude: mapInfo.latlng[0],
            latitude: mapInfo.latlng[1]
          },
          symbol: {
            type: "picture-marker",
            url: "http://static.arcgis.com/images/Symbols/Basic/OrangeSphere.png",
            width: 30,
            height: 30
            // color: new Color ("#2454a0"),
            // outline: {
            //   color: [255, 255, 255],
            //   width: 2
            // }
          },
          attributes: {
            Name: mapInfo.name.toUpperCase(),
            Description: mapInfo.description,
            "Geological Features": mapInfo.features
          },
          popupTemplate: {
            title: "{Name}",
            content: [
              {
                type: "fields",
                fieldInfos: [
                   {fieldName: "Description"}, {fieldName: "Geological Features"}
                ]
              }
            ]
          }
        })
      })


      mapView.graphics.addMany(uniqueCountryMarkers);

      const toggle = new BasemapToggle({
        view: mapView,
        nextBasemap: "topo"
      });
      mapView.ui.add(toggle, "bottom-right");

    }


  render() {

    const options = {
      url: 'https://js.arcgis.com/4.7/'
    };

    if ( !this.state.geoDivCoords ) {
      var componentToRender = (
        <p>Loading data ....</p>
      )
    } else {
      var componentToRender = (
        <EsriLoaderReact
          options={options}
          modulesToLoad={['esri/Map', 'esri/views/MapView', 'esri/Graphic', 'esri/widgets/BasemapToggle', 'esri/Color']}
          onReady={this.onReadyCallback}
        />
      )
    }

    return (
      <div className ="App">
        <h2>East Lothian Geodiversity Sites</h2>
        <p> Click on an icon to find out more about a site </p>
        {componentToRender}
        <MapList
          mapObjects={this.state.geoDivInfoObjects} />
      </div>

    );

  }
}


export default MapContainer;
