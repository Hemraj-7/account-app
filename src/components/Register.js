import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [user, setUser] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Password validation pattern
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (user.name.length < 3) {
      alert('Name must be at least 3 Characters');
      return;
    }

    if (!emailPattern.test(user.email)) {
      alert('Please enter a valid email address (e.g., name@example.com).');
      return;
    }

    if (!passwordPattern.test(user.password)) {
      alert(
        'Password must be at least 6 characters long and include at least one letter, one number, and one special character.'
      );
      return;
    }

    localStorage.setItem('user', JSON.stringify(user));
    alert('Registration Successful!');
    navigate('/');
  };

  return (
    <div className="container mt-5 col-md-4">
      <h3>Register</h3>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          minLength={3}
          required
        />
        <input
          className="form-control mb-2"
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          className="form-control mb-2"
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          minLength={6}
          required
        />
        <button className="btn btn-primary w-100">Register</button>
      </form>
    </div>
  );
}

export default Register;
