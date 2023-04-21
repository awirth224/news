import React, {useEffect, useState} from "react";
import "../CSS/Homepage.css"
import Card from "./Card";
import "../.env.local"

function Homepage() {
  const [articles, setArticles] = useState([])
  const [categories, setCategories] = useState([])
  const [filtered, setFiltered] = useState([])

  useEffect(() => {
    fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=LBazL3jj290PUXHjIAGZYeNb9gyQg2ZX`)
    .then(res => res.json())
    .then(data => {
      setArticles(data.results)
      setCategories(() => data.results.reduce((acc, article) => {
        if(!acc.includes(article.section)) {
          acc.push(article.section)
        }
        return acc
      }, []))
    })

  }, [])

  const allArticles = articles.map((article) => {
    return (
      <Card  
      key={article.uri}
      id={article.url}
      img={article.multimedia[0].url}
      alt={article.multimedia[0].caption}
      title={article.title}
      />
    )
  })

  const filteredArticles = filtered.map((article) => {
    return (
      <Card  
      key={article.uri}
      id={article.url}
      img={article.multimedia[0].url}
      alt={article.multimedia[0].caption}
      title={article.title}
      />
    )
  })

  const options = categories.map((category, index) => {
    return (
      <option value={category} key={index}>{category}</option>
    )
  })

  const handleChange = (e) => {
    e.preventDefault()
    const something = articles.filter(article => article.section === e.target.value)
    setFiltered(something)
  }
  
  

  return (
    <div className="homepage-container">
      <div className="options-container">
        <label>Filter by Category</label>
        <select id="filter" className="dropdown" onChange={handleChange}>
          <option value="nothing">all</option>
          {options}
        </select>
      </div>
      {filtered.length ? filteredArticles : allArticles }
    </div>
  )

}

export default Homepage