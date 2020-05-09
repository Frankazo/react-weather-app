import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
const Form = styled.form`
  margin-bottom: 5px;
  display: flex;
  flex-direction: row;
`
const FormContainer = styled.div`
  width: 50%;
  height: 80%;
  justify-content: top;
  font-family: 'Roboto Slab', serif;
  margin: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`
const P = styled.p`
  color: white;
  display: flex;
  flex-wrap: wrap;
  width: 60%;
  margin-bottom: 5px;
  padding: 10px;
  border-bottom-style: solid;
  border-width: 2px;
  border-color:  #8C868330;
`
const Input = styled.input`
  color: #ffffff;
  background-color: transparent;
  border-bottom-style: solid;
  border-size: 0.5px;
  border-color:  #D46E3B40;
  border-top: transparent;
  border-right: transparent;
  border-left: transparent;
  margin-right: 5px;
  &:hover {
    box-shadow: 0 0 8px #D46E3B90;
  }
`
const SolidButton = styled.button`
  color: #ffffff;
  margin-left: 20px;
  background: #D46E3B;
  border-color: transparent;
  &:hover {
    box-shadow: 0 0 8px #D46E3B90;
  }
`
const Span = styled.span`
  color: #ff000080;
  margin-right: 6px;
`




const WeatherForm = () => {
  const [units, setUnits] = useState('m')
  const [query, setQuery] = useState({query: ''})
  const [weather, setWeather] = useState({
    feelslike: '',
    temperature: '',
    humidity: '',
    weather_descriptions: ''
  })

  const handleChange = event => {
    setQuery({ ...query, [event.target.name]: event.target.value })
  }

  const handleChangeSystem = event => {
    setUnits(event.target.value)
  }

  const params = {
  access_key: '87a756caa948910577886bea45f7f778',
  query: query,
  units: units
}

  const handleSubmit = event => {
    event.preventDefault()

    axios.get('http://api.weatherstack.com/current', {params})
      .then(res => {
        setWeather(res.data.current)
      }).catch(error => {
        console.log(error)
      })
  }

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
          <Input onChange={handleChange} placeholder="City" name="query" value={query.query}/>
          <div style={{ color: "White" }} onChange={handleChangeSystem}>
            <input style={{ marginLeft: "5px" }} type="radio" value="m" name="system"/> Cº
            <input style={{ marginLeft: "5px" }} type="radio" value="f" name="system"/> Fº
          </div>

          <SolidButton type="submit">Get Weather</SolidButton>
      </Form>
      <div style={{ marginTop: "20px" }}>
        <P><Span> Temperature:</Span> { weather.temperature !== '' ? (weather.temperature + 'º') : '' } </P>
        <P><Span> Feels like:</Span> { weather.feelslike !== '' ? (weather.feelslike + 'º') : '' } </P>
        <P><Span> Humidity:</Span> { weather.humidity } </P>
        <P><Span> Descriptions:</Span> { weather.weather_descriptions } </P>
      </div>
    </FormContainer>
  )
}

export default WeatherForm
