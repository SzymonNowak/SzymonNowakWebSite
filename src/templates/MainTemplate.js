import React, {Component} from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../theme/GlobalStyle';
import { theme } from '../theme/mainTheme';

class MainTemplate extends Component {
    render() {
        const { children } = this.props;
        return(
          <>
            <GlobalStyle />
            <ThemeProvider theme={theme}> 
              {children} 
            </ThemeProvider>
          </>
        )
    }
}

export default MainTemplate;