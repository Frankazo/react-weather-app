import React from 'react'
import styled from 'styled-components'

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
  return (
    <FormContainer>
      <Form>
          <Input placeholder="Manchester" name="City"/>
          <Input placeholder="UK" name="country"/>
          <SolidButton type="submit">Get Weather</SolidButton>
      </Form>
      <div style={{ marginTop: "20px" }}>
        <P><Span> Location: </Span> Manchester, GB </P>
        <P><Span> Temperature:</Span> 0.27 </P>
        <P><Span> Humidity:</Span> 93% </P>
        <P><Span> Conditions:</Span> mist </P>
      </div>
    </FormContainer>
  )
}

export default WeatherForm
