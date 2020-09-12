import React  from 'react';
import ReactDOM from 'react-dom';
import 'css/index.css';
import App from 'App';
import * as serviceWorker from 'serviceWorker';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "theme/Custom_style"
import {StateProvider} from 'Redux/StateProvider'
import reducer , {initialState} from 'Redux/reducer'


ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer} >
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

 
serviceWorker.unregister();

