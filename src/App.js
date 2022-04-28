// import logo from './logo.svg';
// import './App.css';
import Clothing from "./Components/Clothing"
import OutfitOutput from "./Components/OutfitOutput"
import GenerateButton from "./Components/GenerateButton"
// import GenerateButton,{OutfitOutput} from './Modules/OutfitOutput';
import ItemList from "./Components/ItemList"
import { CounterProvider } from "./store/counter"

export function App() {
  return (
    <div>
      <CounterProvider>
        <Clothing />
        <OutfitOutput />
        <GenerateButton />
        <ItemList />
      </CounterProvider>
    </div>
  )
}

export default App;
