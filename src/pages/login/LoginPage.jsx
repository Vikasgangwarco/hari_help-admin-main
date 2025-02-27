// LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import { hitLogInApi } from '../../redux/features/onboarding/onboardingApiCalls'; // Import hitLogInApi
import { useSelector, useDispatch } from 'react-redux';
import { setLoading } from '../../redux/features/loading/loadingSlice'; // Import setLoading
import { selectOnboardingReducer } from '../../redux/selectors/selectors'; // Import selector for onboarding reducer
import AppUser from '../../utils/appUser';

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const loginValue = useSelector(selectOnboardingReducer); // Get login state from Redux
  const isLoading = useSelector((state) => state.loading.isLoading); // Get loading state
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      dispatch(setLoading(true)); // Show loading indicator
      const body = { email, password };
      const result = await hitLogInApi(body); // Call the API

      console.log("Login API result:", result); // Log API response

      if (result.token) {
        // If token is available, store it
        localStorage.setItem('token', result.token);
        localStorage.setItem('isLoggedIn', 'true');

        // Use the AppUser singleton to set the token
        const appUser = AppUser.getInstance(); // Get the singleton instance
        appUser.userAccessToken = result.token; // Set the token in AppUser instance

        onLogin(true); // Update login state
        dispatch(setLoading(false)); // Hide loading indicator
        navigate('/'); // Redirect to homepage
      } else {
        setError('Invalid email or password');
        dispatch(setLoading(false)); // Hide loading indicator
      }
    } catch (error) {
      console.log("Login error:", error);
      setError('An error occurred while logging in');
      dispatch(setLoading(false)); // Hide loading indicator
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="login-btn" disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
      {isLoading && <div className="loading-overlay">Loading...</div>}
    </div>
  );
};

export default LoginPage;
