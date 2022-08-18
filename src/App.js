import React from 'react'
import './App.css'
import {action,originals,comedy,Documentaries } from './urls'
import NavBar from './Components/NavBar/NavBar'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'



function App() {
  return (
    <div>
        <NavBar/>
        <Banner/>
        <RowPost urls={originals} title='Netflix Orginals'/>
        <RowPost urls={action} title='Action' isSmall/>
        <RowPost urls={comedy} title='Comedy' isSmall/>
        <RowPost urls={Documentaries} title='Documentaries' isSmall/>

    </div>
  )
}

export default App