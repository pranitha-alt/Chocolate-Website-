import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
const Register = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    mobile: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const response = await fetch('http://localhost:4000/api/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert('User registered successfully!');
        navigate('/login')
      } else {
        alert(data.message || 'Registration failed.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error connecting to the server.');
    }
      
  };
  return (
    <div>
      <div className='text-[40px] tracking-widest pl-[600px]'>REGISTER</div>
      <form onSubmit={handleSubmit}>
        <div>
          <div className='pl-[450px] translate-y-[40px] font-thin'>Name *</div>
          <input
            type='text'
            name='name'
            placeholder='Name'
            value={formData.name}
            onChange={handleChange}
            className='border-0 h-[40px] w-[400px] translate-y-[50px] translate-x-[450px] outline-dotted'
            required
          />
          <div className='pl-[450px] translate-y-[70px] font-thin'>Email *</div>
          <input
            type='email'
            name='email'
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
            className='border-0 h-[40px] w-[400px] translate-y-[80px] translate-x-[450px] outline-dotted'
            required
          />
          <div className='pl-[450px] translate-y-[90px] font-thin'>Password *</div>
          <input
            type='password'
            name='password'
            placeholder='Password'
            value={formData.password}
            onChange={handleChange}
            className='border-0 h-[40px] w-[400px] translate-y-[100px] translate-x-[450px] outline-dotted'
            required
          />
          <div className='pl-[450px] translate-y-[110px] font-thin'>Mobile *</div>
          <input
            type='text'
            name='mobile'
            placeholder='Mobile'
            value={formData.mobile}
            onChange={handleChange}
            className='border-0 h-[40px] w-[400px] translate-y-[120px] translate-x-[450px] outline-dotted'
            required
          />
        </div>
        <Link
          to='/login'
          className='pl-[445px] relative top-[135px] font-thin hover:text-pink-400'
        >
          Already have an account with us? Log in
        </Link>
        <div>
          <button
            type='submit'
            className='border-0 h-10 w-[100px] translate-y-[150px] translate-x-[440px] bg-white shadow-xl hover:bg-pink-400 rounded-sm transition-colors duration-500'
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
