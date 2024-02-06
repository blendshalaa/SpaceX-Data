import { useEffect, useState } from 'react'
import dragonsServices from '../services/dragonsServices';


import '../styles/Rockets.css'

import{useDispatch,useSelector} from 'react-redux'
import { fetchDragons } from '../redux/actions/dragonsActions'

function Dragons() {
 const dispatch=useDispatch();
 const dragonsData=useSelector((state)=>state.dragons)

 useEffect(() => {
  dispatch(fetchDragons());
}, [dispatch]);

  return (
    <div>
    <h1>Dragons</h1>
    {dragonsData.loading && <p>Loading dragons...</p>}
    {dragonsData.error && <p>Error: {dragonsData.error}</p>}
    {dragonsData.dragons.map((item) => (
      <div key={item.id}>
        <p>ID: {item.id}</p>
        <h2>Drragon name: {item.name}</h2>
        <p>Type: {item.type}</p>
        <img src={item.flickr_images[0]} alt={item.name} className='rocket-image' />
      </div>
    ))}
  </div>
  )
}

export default Dragons
