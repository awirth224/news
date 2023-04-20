import React, {useEffect, useState} from "react";
import "../CSS/Homepage.css"
import "../.env.local"

function Homepage() {
  const [articles, setArticles] = useState([])
  useEffect(() => {
    
    fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=LBazL3jj290PUXHjIAGZYeNb9gyQg2ZX`)
    .then(res => res.json())
    .then(data => {
      console.log('DATA:', data.results)
      setArticles()
    })

  }, [])
  

  return (
    
    <div>

    </div>
  )

}

export default Homepage