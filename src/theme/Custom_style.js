import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
        main: '#FF9900',
        light :'#7956cb',
        dark : '#303f9f',
        contrastText : '#fff'
      },
      secondary: {
        main: '#131A22',
        light :'#146EB4',
        dark : '#c51162',
        contrastText : '#fff'
      },
      info : {
        light: '#232F3E',
        main: '#2196f3',
        dark: '#1976d2',
        contrastText: '#fff'
      },
 
  },
});

export default theme;