import { ThemeProvider, DefaultTheme } from "styled-components";
import light from "./global/styles/themes/light";
import dark from "./global/styles/themes/dark";
import usePersistedState from "./global/utils/usePersistedState";

import NavBar from "./components/Nav";
import GlobalStyle from "./global/styles/Global.style";


const App = () => {

  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return(

    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <NavBar toggleTheme={toggleTheme}/>
    </ThemeProvider>

  )
}

export default App;
