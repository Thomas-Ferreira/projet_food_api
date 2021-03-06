import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const LoginForm = props => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()
  useEffect(() => {}, [username])

  const onSubmit = e => {
    e.preventDefault()
    if (username.length < 3) {
      alert('Please enter big username')
      return
    }
    axios({
      method: 'POST',
      url: 'https://easy-login-api.herokuapp.com/users/login',
      data: {
        username: username,
        password: password
      }
    }).then(response => {
      localStorage.setItem('token', response.headers['x-access-token'])
      history.push('/recette')
    })
  }

  return (
    <FormContainer>
      <StyledForm onSubmit={onSubmit}>
        <StyledInput
          value={username}
          onChange={e => setUsername(e.target.value)}
          name='username'
          type='text'
        ></StyledInput>
        <StyledInput
          value={password}
          name='password'
          type='password'
          onChange={e => setPassword(e.target.value)}
        ></StyledInput>
        <StyledInput type='submit'></StyledInput>
      </StyledForm>
    </FormContainer>
  )
}

const FormContainer = styled.div`
  margin-top: 15vh;
  padding: 12px;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`

const StyledInput = styled.input`
  height: 30px;
  margin-bottom: 12px;
  border-radius: 4px;
  outline: none;
`

LoginForm.propTypes = {}

export default LoginForm
