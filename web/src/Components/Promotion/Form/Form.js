import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import './Form.css'

const initialValue = {
  title: '',
  url: '',
  imageUrl: '',
  price: 0
}

const PromotionForm = () => {
  const [values, setValues] = useState(initialValue)
  const history = useHistory()

  function onChange(event) {
    const {name, value} = event.target
    setValues({ ...values, [name]: value })
  }

  function onSubmit(event) {
    event.preventDefault()
    axios.post('http://localhost:5000/promotions', values)
      .then(response => {
        history.push('/')      
      })
  }

  return (
    <div>
      <h1>Promo Show</h1>
      <h2>Nova Promoção</h2>

      <form onSubmit={onSubmit}>
        <div className="promotion-form_group">
          <label htmlFor="title">Título</label>
          <input name="title" id="title" type="text" onChange={onChange} />
        </div>
        <div className="promotion-form_group" onChange={onChange} >
          <label htmlFor="url">Link</label>
          <input name="url" id="url" type="text"/>
        </div>
        <div className="promotion-form_group">
          <label htmlFor="imageUrl">Image (URL)</label>
          <input name="imageUrl" id="imageUrl" type="text" onChange={onChange} />
        </div>
        <div className="promotion-form_group">
          <label htmlFor="price">Preço</label>
          <input name="price" id="price" type="number" onChange={onChange} />
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
  )
}

export default PromotionForm