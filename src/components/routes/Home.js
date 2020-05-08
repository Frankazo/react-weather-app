import React from 'react'
import Background from '../Background'
import Container from '../Container'
import Image from '../Image'
import WeatherForm from '../WeatherForm'

const Home = () => {
  return (
    <Background>
      <Container>
        <Image>
          <h1 style={{ fontSize: '3rem' }}>Weather Finder</h1>
          <p style={{ fontSize: '1.2rem', fontStyle: 'italic' }}>Find out the temperature,</p>
          <p style={{ fontSize: '1.2rem', fontStyle: 'italic' }}> weather conditions and more...</p>
        </Image>
        <WeatherForm></WeatherForm>
      </Container>
    </Background>
  )
}

export default Home
