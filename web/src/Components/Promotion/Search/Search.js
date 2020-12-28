import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import PromotionList from 'Components/Promotion/List/List'
import './Search.css'


const PromotionSearch = () => {
  const [promotions, setPromotions] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    const params = {}
    if (search) {
      params.title_like = search
    }
    axios.get('http://localhost:5000/promotions?_embed=comments', { params } )
      .then(response => {
        setPromotions(response.data)
      })
  }, [search])

  return (
    <div className="promotion-search">
      <header className="promotion-search_header">
        <h1>Pormo Show</h1>
        <Link to="/create">Nova Promoção</Link>
      </header>
      <input
        className="promotion-search_input"
        type="search"
        placeholder="Buscar"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <PromotionList promotions={promotions} loading={!promotions.length}/>
    </div>
  )
}

export default PromotionSearch