import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Profile() {
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (!localStorage.getItem('loggedIn')) navigate('/');
        else setUser(storedUser);
    }, [navigate]);

    const handleChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

    const handleSave = () => {

        const namePattern = /^[A-Za-z\s]{2,}$/;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

        if (user.name.length < 3 || !namePattern.test(user.name)) {
            alert(`Name must contain only letters and be at least 3 characters long.`);
            return;
        }

        if (!emailPattern.test(user.email)) {
            alert('Please enter a valid email address (e.g., name@example.com).');
            return;
        }

        if (user.password.length < 6 || !passwordPattern.test(user.password)) {
            alert('Password must be at least 6 characters long and include at least one letter, one number, and one special character.');
            return; // Stop saving if validation fails
        }

        localStorage.setItem('user', JSON.stringify(user));
        alert('Profile Updated!');
    };

    const handleLogout = () => {
        localStorage.removeItem('loggedIn');
        navigate('/');
    };

    return (
        <div className="container mt-5 col-md-4">
            <h3>My Profile</h3>
            <input className="form-control mb-2" name="name" value={user.name || ''} onChange={handleChange} />
            <input className="form-control mb-2" name="email" value={user.email || ''} onChange={handleChange} />
            <input className="form-control mb-2" name="password" value={user.password || ''} onChange={handleChange} />
            <button className="btn btn-primary w-100 mb-2" onClick={handleSave}>Save</button>
            <button className="btn btn-danger w-100" onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Profile;
