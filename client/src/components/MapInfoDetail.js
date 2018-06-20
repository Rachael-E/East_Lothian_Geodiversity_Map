import React from 'react';

const scrollWin = () => {
  window.scrollTo(0,0)
};

const MapInfoDetail = (props) => {

  const infoList = props.mapObjects.map((object, index) => {
    return (
      <div className = "individualSiteInfo">
      <h3 key={index}>{object.name}</h3>
        <p><u>Site description:</u> {object.description}<br/></p>
        <p><u>Geological features:</u> {object.features}</p>
        <button id="backToTop" onClick={scrollWin}> Return to Map </button>
        <hr/>
      </div>
    )
  })

  if (props.mapObjects.length === 0) return null // this is required otherwise the next return doesn't work.

  return (
    <div className = "siteInformation">
      <h2> Site Information List </h2>
      {infoList}
      </div>
  )
}

export default MapInfoDetail;
