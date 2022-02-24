// import logo from './logo.svg';
// import './App.css';
import Clothing from "./Components/Clothing"
import OutfitOutput from "./Components/OutfitOutput"
import GenerateButton from "./Components/GenerateButton"
// import GenerateButton,{OutfitOutput} from './Modules/OutfitOutput';

export function App() {
  return (
    <div>
      <Clothing />
      <OutfitOutput />
      <GenerateButton />
    </div>
  )
}

export default App;
