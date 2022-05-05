import React from 'react'
import GlobalStyled from './styles/global'
import usePersistedState from './utils/usePersistedState';
import Dashboard from './pages/dashboard'
import { ThemeProvider, DefaultTheme } from 'styled-components';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

const App = ()=> {
  
  const [thema, setThema] = usePersistedState<DefaultTheme>('thema',light);

  const passThema = () =>{ 
    setThema(thema.title === 'light' ? dark : light);
  };

  return (
    <div>
      <ThemeProvider theme={thema}>
        <GlobalStyled />
        <Dashboard passThema = {passThema} />
      </ThemeProvider>  
    </div>
  )
}

export default App;