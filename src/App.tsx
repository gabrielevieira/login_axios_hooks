import React from 'react';
import './App.css';
import { AuthProvider } from './context/AuthProvider';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ProtectedLayout } from './components/ProtectedLayout';
import { Login } from './components/Login';
import { Profile } from './components/Profile';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route path='/profile'>
            <ProtectedLayout>
              <Profile/>
            </ProtectedLayout>
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
        </Switch>
      </BrowserRouter>

    </AuthProvider>

  );
}

export default App;
