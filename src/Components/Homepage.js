import React, {useEffect, useState} from "react";
import "../CSS/Homepage.css"
import Card from "./Card";
import "../.env.local"

function Homepage() {
  const [articles, setArticles] = useState([])
  useEffect(() => {
    
    fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=LBazL3jj290PUXHjIAGZYeNb9gyQg2ZX`)
    .then(res => res.json())
    .then(data => {
      console.log('DATA:', data.results)
      setArticles(data.results)
    })

  }, [])
  
  
  const cards = articles.map((article) => {
    return (
      <Card  
      key={article.uri}
      img={article.multimedia[0].url}
      alt={article.multimedia[0].caption}
      title={article.title}
      />
    )
  })
  return (
    <div className="homepage-container">
      {cards}
    </div>
  )

}

export default Homepage