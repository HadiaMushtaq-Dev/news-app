import React, { useContext, useEffect, useState } from 'react'
import "./Comps.css"
import {Link, useLocation} from 'react-router-dom'
import { NewsContext } from '../Context/NewsContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  const location=useLocation()
  const[tab,settab]=useState(location.path)
  const{setcategory}=useContext(NewsContext)
  useEffect(()=>{
    settab("/")
  },[])
   
  return (
    <div className='nav'>
      <div className='nav1'>
        <div className='logo'>
            <p>⭕ Globe <span>News</span></p>
        </div>
          <FontAwesomeIcon icon={faBars} className='icon' onClick={()=>document.querySelector(".menu").style.display="flex"}/>
          <div className='menu'>
            <p onClick={()=>document.querySelector(".menu").style.display="none"}>X</p>
              <Link to="/"  onClick={()=>{settab('/')
            setcategory("general")
          }} className={tab==="/"?'link':'link1'}>Home</Link>
          <Link to="/"  onClick={()=>{settab('/Entertainment')
            setcategory("entertainment")
          }} className={tab==="/Entertainment"?'link':'link1'}>Entertainment</Link>
          <Link to="/"  onClick={()=>{settab('/Health')
            setcategory('health')
          }} className={tab==="/Health"?'link':'link1'}>Health</Link>
          <Link to="/"  onClick={()=>{settab('/Sci & Tech')
            setcategory("science")
          }} className={tab==="/Sci & Tech"?'link':'link1'}>Sci & Tech</Link>
          <Link to="/"  onClick={()=>{settab('/Sports')
            setcategory("sports")
          }} className={tab==="/Sports"?'link':'link1'}>Sports</Link>
          <Link to="/" onClick={()=>{settab('/Business')
            setcategory("business")
          }}  className={tab==="/Business"?'link':'link1'}>Business</Link>
          </div>
        <nav>


          <Link to="/"  onClick={()=>{settab('/')
            setcategory("general")
          }} className={tab==="/"?'link':'link1'}>Home</Link>
          <Link to="/"  onClick={()=>{settab('/Entertainment')
            setcategory("entertainment")
          }} className={tab==="/Entertainment"?'link':'link1'}>Entertainment</Link>
          <Link to="/"  onClick={()=>{settab('/Health')
            setcategory('health')
          }} className={tab==="/Health"?'link':'link1'}>Health</Link>
          <Link to="/"  onClick={()=>{settab('/Sci & Tech')
            setcategory("science")
          }} className={tab==="/Sci & Tech"?'link':'link1'}>Sci & Tech</Link>
          <Link to="/"  onClick={()=>{settab('/Sports')
            setcategory("sports")
          }} className={tab==="/Sports"?'link':'link1'}>Sports</Link>
          <Link to="/" onClick={()=>{settab('/Business')
            setcategory("business")
          }}  className={tab==="/Business"?'link':'link1'}>Business</Link>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
