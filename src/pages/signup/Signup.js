import { useState } from 'react'

import styles from './Signup.module.css'


export default function Signup() {

  const [email, setEmail] = useState('')
  const [password, setPassword] =  useState('')
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

  }

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles['signup-form']}>
        <h2>Signup</h2>

        <label>
          <span>Name:</span>
          <input 
            type="text" 
            onClick={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          <span>email:</span>
          <input 
            type="email" 
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>password:</span>
          <input 
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <button className='btn'>Signup</button>
      </form>
    </div>
  )
}
