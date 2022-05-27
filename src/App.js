// import logo from './logo.svg';
// import './App.css';
import Clothing from "./Components/Clothing"
import OutfitOutput from "./Components/OutfitOutput"
import GenerateButton from "./Components/GenerateButton"
import "../src/Components/styles.css"
import ItemList from "./Components/ItemList"
import { CounterProvider } from "./store/counter"
import "../src/Components/styles.css"

export function App() {
  return (
    // <div>
    //   <CounterProvider>
    //      <Clothing />
    //      <OutfitOutput />
    //      <GenerateButton />
    //      <ItemList />
    //   </CounterProvider>
    // </div>

    <div className='some-page-wrapper'>
      <div className="headr"><h1>HARTMAN OUTFIT PICKER</h1></div>
      <div className='row'>
        <CounterProvider>
          <div className='column'>
            <div className='blue-column'>
              <Clothing />
              <GenerateButton />
            </div>
          </div>
          <div className='column'>
            <div className='green-column'>
              <OutfitOutput />
            </div>
          </div>
          <div className='column'>
            <div className='red-column'>
              <ItemList/>
            </div>
          </div>
        </CounterProvider>
      </div>

    </div >
  )
}

export default App;
