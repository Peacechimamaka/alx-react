import { useState } from 'react'
import './Login.css'

const Login = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(() => false)
  const [email, setEmail] = useState(() => '')
  const [password, setPassword] = useState(() => '')
  const [enableSubmit, setEnableSubmit] = useState(() => false)

  const handleIsLoggedIn = (event) =>{
    event.preventDefault()
    setIsLoggedIn(true)
  }

  const handleChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const handleChangePassword = (event) => {
    setPassword(event.target.value)
  }

  return (
    <div className='App-body'>
          <p>Login to access the full dashboard</p>
          <form onSubmit={handleIsLoggedIn}>
          <label htmlFor='email'>E-mail:</label>
          <input type='email' 
          id='email' 
          name='email' value={email} onChange={handleChangeEmail} />
          <label htmlFor='password'>Password:</label>
          <input type='password' id='password' name='password' value={password} onChange={handleChangePassword} />
          <input type='submit' value='OK'/>
          </form>
    </div>
  )
}

export default Login