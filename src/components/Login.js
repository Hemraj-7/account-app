import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [input, setInput] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setInput({ ...input, [e.target.name]: e.target.value });

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.email === input.email && storedUser.password === input.password) {
      localStorage.setItem('loggedIn', true);
      navigate('/profile');
    } else {
      alert('Invalid email or password!');
    }
  };

  const handleClick = (e) =>{
    e.preventDefault();
    navigate('/register')
  }

  return (
    <div className="container mt-5 col-md-4">
      <h3>Login</h3>
      <form onSubmit={handleLogin}>
        <input className="form-control mb-2" name="email" placeholder="Email" onChange={handleChange} required />
        <input className="form-control mb-2" type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button className="btn btn-success w-100">Login</button>
      </form>
      <button onClick={handleClick} className='btn btn-secondary mt-2 w-100'>Register As New User</button>
    </div>
  );
}

export default Login;
