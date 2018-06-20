import React, { PureComponent } from 'react';
import EsriLoaderReact from 'esri-loader-react';


class MapContainer extends PureComponent {

  constructor(props){
    super(props)
    this.state = {
      mapInfoCoords: null,
      mapInfoObjects: [],
      currentCountry: null
    };
    this.onReadyCallback = this.onReadyCallback.bind(this);
  }

  componentDidMount(){
    const url = 'http://localhost:3000/api/mapDataInfo';
    fetch(url)
    .then(res => res.json())
    .then( (mapInfoData) => {

      const allCountriesLatLng = mapInfoData.map((mapInfo, index) => {
        return mapInfo.latlng.reverse()
      });

      this.setState({
        mapInfoObjects: mapInfoData,
        mapInfoCoords: allCountriesLatLng
      })
    })
    .catch(error => console.log("Error:", error))
  }

  onReadyCallback({loadedModules: [Map, MapView, Graphic, BasemapToggle, Color, PictureMarkerSymbol], containerNode}){

      const theMap = new Map({
        basemap: 'satellite'
      });

      const mapView = new MapView({
        container: containerNode,
        center: [-3.2, 55.5],
        zoom: 7,
        map: theMap
      });

      const uniqueCountryMarkers = this.state.mapInfoObjects.map((mapInfo) => {

        return new Graphic({
          geometry: {
            type: 'point',
            longitude: mapInfo.latlng[0],
            latitude: mapInfo.latlng[1]
          },
          symbol: {
            type: "picture-marker",
            url: "http://static.arcgis.com/images/Symbols/Basic/LightBlueStickpin.png",
            width: 20,
            height: 20
            // color: new Color ("#2454a0"),
            // outline: {
            //   color: [255, 255, 255],
            //   width: 2
            // }
          },
          attributes: {
            Name: mapInfo.name,
            Description: mapInfo.description,
            Price: mapInfo.price
          },
          popupTemplate: {
            title: "{Name}",
            content: [
              {
                type: "fields",
                fieldInfos: [
                  {fieldName: "Name"}, {fieldName: "Description"}, {fieldName: "Price"}
                ]
              }
            ]
          }
        })
      })


      mapView.graphics.addMany(uniqueCountryMarkers);

      const toggle = new BasemapToggle({
        view: mapView,
        nextBasemap: "oceans"
      });
      mapView.ui.add(toggle, "top-right");

    }


  render() {

    const options = {
      url: 'https://js.arcgis.com/4.7/'
    };

    if ( !this.state.mapInfoCoords ) {
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
        <h3>Countries of the World</h3>
        <p> Click on a pin to find out more about a country </p>
        {componentToRender}
      </div>
    );
  }
}


export default MapContainer;
