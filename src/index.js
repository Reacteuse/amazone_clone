import React , {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import 'css/index.css';
import App from 'App';
import * as serviceWorker from 'serviceWorker';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "theme/Custom_style"

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
);

 
serviceWorker.unregister();

