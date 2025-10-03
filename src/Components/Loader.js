import React, { useContext } from 'react'
import { NewsContext } from '../Context/NewsContext'

function Loader() {
    const{loader}=useContext(NewsContext)
  return (
    <>
    {!loader ?

    <div className='loader'>
      
    </div>:<></>
}
    </>
  )
}

export default Loader
