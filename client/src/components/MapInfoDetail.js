import React from 'react';

const scrollWin = () => {
  window.scrollTo(0,0)
};

const MapInfoDetail = (props) => {

  const infoList = props.mapObjects.map((object, index) => {
    return (
      <div key={index} className = "individualSiteInfo">
      <h3 >{object.name}</h3>
        <p><u>Site Description</u><br/> {object.description}<br/></p>
        <p><u>Geological Features:</u> {object.features}</p>
        <button id="backToTop" onClick={scrollWin}> Return to Map </button>
        <hr/>
      </div>
    )
  })

  if (props.mapObjects.length === 0) return null // this is required otherwise the next return doesn't work.

  return (
    <div className = "siteInformation">
      <h2> SITE INFORMATION LIST </h2>
      {infoList}
      </div>
  )
}

export default MapInfoDetail;
