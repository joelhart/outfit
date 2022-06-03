import Clothing from "./Components/Clothing"
import OutfitOutput from "./Components/OutfitOutput"
import GenerateButton from "./Components/GenerateButton"
import "../src/Components/styles.css"
import ItemList from "./Components/ItemList"
import { CounterProvider } from "./store/counter"
import "../src/Components/styles.css"

//Top level app hierarchy rendering done here
export function App() {
  return (
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
