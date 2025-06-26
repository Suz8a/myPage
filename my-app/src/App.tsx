import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { Router } from './router';
import { theme } from './theme';
import { NotificationProvider } from './providers/notification-provider';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NotificationProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </NotificationProvider>
    </ThemeProvider>
  );
}

export default App;
