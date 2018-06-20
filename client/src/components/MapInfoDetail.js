import React from 'react';

const MapInfoDetail = (props) => {

  const infoList = props.mapObjects.map((object) => {
    return (

      <div className = "individualSiteInfo">
      <h3>{object.name}</h3>
        <p><u>Site description:</u> {object.description}<br/></p>
        <p><u>Geological features:</u> {object.features}</p>
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
