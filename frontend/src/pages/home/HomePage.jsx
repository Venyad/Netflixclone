import React from 'react';
import { useAuthStore } from '../../store/authUser.js';
import HomeScreen from './HomeScreen';
import AuthScreen from './AuthScreen'


const HomePage = () => {
  const {user} = useAuthStore();
  return (
    < >
     {user ? <HomeScreen/> : <AuthScreen/>}
    </>
  )
}

export default HomePage
