import React, { createContext, useEffect, useState } from 'react'
export const NewsContext=createContext()
function NewsProvider({children}) {
    const[news,setnews]=useState([])
    const[category,setcategory]=useState('general')
    const[loader,setloader]=useState(true)
    useEffect(()=>{
        const fetchnews=async()=>{
            try{
                setloader(false)
                const response=await fetch(`https://saurav.tech/NewsAPI/top-headlines/category/${category}/in.json`)
                const data=await response.json()
                console.log(data.articles)
                setnews(data.articles)
              
            }
            catch(e){
                console.log(e)
            }finally{
                setloader(true)
            }
        }
        
        fetchnews()
    },[category])
  return (
    <NewsContext.Provider value={{news,setnews,category,setcategory,loader,setloader}}>
        {children}
    </NewsContext.Provider>
  )
}

export default NewsProvider
