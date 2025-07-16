import { useEffect } from 'react';
import { useClerk, useAuth } from '@clerk/clerk-react';

const useAuth = () => {
  const { signIn, signOut, user } = useClerk();

  const login = async (email, password) => {
    try {
      await signIn.create({ identifier: email, password });
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const logout = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const isAuthenticated = () => {
    return !!user;
  };

  useEffect(() => {
    // Any side effects related to authentication can be handled here
  }, [user]);

  return { login, logout, isAuthenticated, user };
};

export default useAuth;