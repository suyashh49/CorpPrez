// Update your AuthCallback.tsx to prevent the infinite loop:
import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function AuthCallback() {
  const [searchParams] = useSearchParams();
  const { login } = useAuth();
  const navigate = useNavigate();
  const token = searchParams.get('token');
  const [loginAttempted, setLoginAttempted] = useState(false);

  useEffect(() => {
    // Only try to login if we haven't attempted it yet
    if (token && !loginAttempted) {
      console.log('AuthCallback: Attempting login with token');
      setLoginAttempted(true); // Mark that we've attempted login
      
      // Wrap in setTimeout to break the React rendering cycle
      setTimeout(() => {
        try {
          login(token);
          // Explicitly navigate if login doesn't do it
          navigate('/complete-registration', { replace: true });
        } catch (error) {
          console.error('AuthCallback: Error during login:', error);
          navigate('/', { replace: true });
        }
      }, 0);
    } else if (!token && !loginAttempted) {
      setLoginAttempted(true);
      navigate('/', { replace: true });
    }
    
    // Safety timeout to ensure we don't get stuck
    const timeoutId = setTimeout(() => {
      if (window.location.pathname === '/auth/success') {
        console.log('AuthCallback: Timeout reached, forcing navigation');
        navigate('/', { replace: true });
      }
    }, 3000);
    
    return () => clearTimeout(timeoutId);
  }, [token, loginAttempted]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-indigo-50">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Completing Authentication...</h2>
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-700 mx-auto"></div>
        {/* Add a manual escape button */}
        <button 
          onClick={() => navigate('/', { replace: true })}
          className="mt-6 px-4 py-2 bg-sky-700 text-white rounded hover:bg-sky-800"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
}