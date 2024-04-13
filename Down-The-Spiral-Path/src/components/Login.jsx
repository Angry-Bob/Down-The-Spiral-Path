import React from 'react'

export default function Login() {
  return (
    <div className='form'>
      <h3 className='promo'>Sign in for updates on your astrology reading!</h3>
    <form>
      <label>Username<br/>
        <input type="text" /><br/>
      </label>
      <label>Password<br/>
        <input type="text" /><br/>
      </label>
      <br/>
      <input type='submit'></input>
    </form>
    
    </div>
  )
}

