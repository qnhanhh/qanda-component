import {Banner} from './Banner/Banner'
import {Ads} from './Ads'
import {Carousel} from './Carousel/Carousel'
import {LiquidSwipe} from './LiquidSwipe'
import { Footer } from './Footer'

function App() {
  const componentsToRender=[<Banner/>,<Ads/>,<Carousel props='teachers'/>,<Carousel props='subjects'/>,<Carousel props='books'/>,<Footer/>]
  const backgroundColors=['red','red','red','red','red','red']

  return (
    <LiquidSwipe
    components={componentsToRender}
    colors={backgroundColors}
    />
  );
}

export default App;
