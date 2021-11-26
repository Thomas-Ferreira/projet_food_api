import React from 'react'

const MapRecettes = props => {
  console.log(props)
  return (
    <div>
      {props.api.map(item => (
        <div>
          <h2>{item.title}</h2>
          <img src={item.image}></img>
          <button onClick={item.spoonacularSourceUrl}>Voir la recette</button>
        </div>
      ))}
    </div>
  )
}

export default MapRecettes
