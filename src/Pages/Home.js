import React, { useContext } from 'react'
import { NewsContext } from '../Context/NewsContext'
import "./Pages.css"
import Loader from '../Components/Loader'
function Home() {
    const{news}=useContext(NewsContext)
  return (
    <div className='main'>
        <div className='main1'>
      <Loader/>
      <h1 className='main-heading'>Top HeadLines </h1>
     <div className='grid'>
       {news.length>0?
       news.map((n,idx)=>(
        <div key={idx} className='item'>
              <h1 className='title'>{n.title}</h1>
              <div className='cont'>
                <img src={n.urlToImage} alt='captured results' />
                <p className='content'>{n.content}</p>
              </div>
                <div className='cont'>
                    {n.author?
                    <p className='author'>{n.author}</p>:<p  className='author'>UnKnown</p>
                    }
                    <p>{n.publishedAt.split('T')[0]}</p>
                </div>
        </div>
       )):<p>Something went wrong</p>}
     </div>
        </div>
    </div>
  )
}

export default Home
