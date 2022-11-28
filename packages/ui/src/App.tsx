import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Button } from 'components';
import { StyledLayout, StyledButton, lightTheme, darkTheme } from 'styled';

function App() {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme.value === 'light' ? darkTheme : lightTheme);
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <StyledLayout>
          <StyledButton variant={'primary'} onClick={toggleTheme}>Toggle Theme</StyledButton>
          <Button />
        </StyledLayout>
      </ThemeProvider>
    </div>
  );
}

export default App;
