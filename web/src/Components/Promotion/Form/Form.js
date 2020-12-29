import React, { useEffect, useState } from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import './Form.css'

const initialValue = {
  title: '',
  url: '',
  imageUrl: '',
  price: 0
}

const PromotionForm = ({id}) => {
  const [values, setValues] = useState(id ? null: initialValue)
  const history = useHistory()

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5000/promotions/${id}`)
        .then(response => {
          setValues(response.data)
        })
    }
  }, [])
  
  function onChange(event) {
    const {name, value} = event.target
    setValues({ ...values, [name]: value })
  }

  function onSubmit(event) {
    event.preventDefault()
    const method = id ? 'put' : 'post'
    const url = id
      ? `http://localhost:5000/promotions/${id}` 
      : 'http://localhost:5000/promotions'
    axios[method](url, values)
      .then(response => {
        history.push('/')      
      })
  }
  if(!values) {
    return (
      <div>Carregando...</div>
    )
  }
  return (
    <div>
      <h1>Promo Show</h1>
      <h2>Nova Promoção</h2>

      <form onSubmit={onSubmit}>
        <div className="promotion-form_group">
          <label htmlFor="title">Título</label>
          <input name="title" id="title" type="text" onChange={onChange}   defaultValue={values.title}/>
        </div>
        <div className="promotion-form_group" onChange={onChange} >
          <label htmlFor="url">Link</label>
          <input name="url" id="url" type="text" defaultValue={values.url}/>
        </div>
        <div className="promotion-form_group">
          <label htmlFor="imageUrl">Image (URL)</label>
          <input name="imageUrl" id="imageUrl" type="text" onChange={onChange}  defaultValue={values.imageUrl}/>
        </div>
        <div className="promotion-form_group">
          <label htmlFor="price">Preço</label>
          <input name="price" id="price" type="number" onChange={onChange}  defaultValue={values.price}/>
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
  )
}

export default PromotionForm