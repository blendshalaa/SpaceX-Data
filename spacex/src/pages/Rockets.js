import React from 'react'
import { NavLink } from 'react-router-dom';

function Rockets() {
  return (
    <div>Rockets
     



<NavLink to="/missions" className='btn' activeClassName='active-link'>Go to Missions</NavLink>
<NavLink to="/profiles" className='btn' activeClassName='active-link'>Go to Profiles</NavLink>
<NavLink to="/dragons" className='btn' activeClassName='active-link'>Go to Dragons</NavLink>

    </div>
  )
}

export default Rockets