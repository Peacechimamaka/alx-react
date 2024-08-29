import './Login.css'

const Login = () => {
  return (
    <div className='App-body'>
          <p>Login to access the full dashboard</p>
          <label htmlFor='email'>E-mail:</label>
          <input type='text' id='email' name='email'></input>
          <label htmlFor='password'>Password:</label>
          <input type='password' id='password' name='password'></input>
          <button type='button'>OK</button>
    </div>
  )
}

export default Login