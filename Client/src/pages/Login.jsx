import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [isLoading, setIsLoading] = useState(false);

const handleLogin = async (e) => {
  e.preventDefault();
  setErrorMessage('');
  setIsLoading(true); 
  try {
    const response = await axios.post('http://localhost:4000/api/user/login', formData, {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    if (response.status === 200) {
      alert('Login Successful!');
      navigate('/christmas');
    }
  } catch (error) {
    const message = error.response?.data?.message || 'An error occurred during login.';
    setErrorMessage(message);
  } finally {
    setIsLoading(false); 
  }
};


  return (
    <div>
      <div className='border-0 rounded-lg h-[400px] w-[600px] translate-x-[450px] translate-y-[40px] shadow-2xl bg-white'>
        <form onSubmit={handleLogin}>
          <div>
            <div className='text-[30px] translate-x-[100px] translate-y-5 font-thin'>Login</div>
            <div className='translate-x-[100px] translate-y-10 font-serif'>Email *</div>
            <div>
              <input
                type='email'
                name='email'
                placeholder='email'
                value={formData.email}
                onChange={handleChange}
                className='border-0 h-10 w-[350px] translate-y-[55px] translate-x-[100px] focus:outline-none'
                required
              />
            </div>
            <div className='translate-x-[100px] translate-y-[65px] font-serif'>Password *</div>
            <div>
              <input
                type='password'
                name='password'
                placeholder='password'
                value={formData.password}
                onChange={handleChange}
                className='border-0 h-10 w-[350px] translate-y-[75px] translate-x-[100px] focus:outline-none'
                required
              />
            </div>
            {errorMessage && (
              <div className='text-red-500 translate-x-[100px] translate-y-[85px]'>
                {errorMessage}
              </div>
            )}
            <button
                type='submit'
                className={`border-0 w-[400px] h-10 translate-y-[90px] translate-x-[100px] shadow-lg transition-colors duration-700 rounded-lg ${
                isLoading ? 'bg-gray-300 cursor-not-allowed' : 'bg-white hover:bg-pink-400'
            }`}
                disabled={isLoading}
                >
                {isLoading ? 'Logging in...' : 'Login'}
            </button>
            <button
              type='button'
              className='border-0 w-[400px] h-10 translate-y-[110px] translate-x-[100px] bg-white shadow-lg hover:bg-pink-400 transition-colors duration-700 rounded-lg'
              onClick={() => navigate('/register')}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
