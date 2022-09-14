import {Navigation} from './Navigation/Navigation'
import {Banner} from './Banner/Banner'
import {Ads} from './Ads'
import {Carousel} from './Carousel/Carousel'

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Banner/>
      <Ads/>
      <Carousel props='teachers'/>
      <Carousel props='subjects'/>
      <Carousel props='books'/>
    </div>
  );
}

export default App;
