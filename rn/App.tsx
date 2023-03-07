import { GlobalProvider } from './context/Global';
import Routes from './routes/Routes';
import "./components/ActionSheets/index";

const App = () => {
  return (
    <GlobalProvider>
      <Routes />
    </GlobalProvider>
  )
}

export default App;