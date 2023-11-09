import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import Login from './components/login /Login';

function App() {
  return (
    <ChakraProvider>
      <Login />
    </ChakraProvider>
  );
}

export default App;
