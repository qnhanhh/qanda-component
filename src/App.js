import {Banner} from './Banner/Banner'
import {Ads} from './Ads'
import {Carousel} from './Carousel/Carousel'
import { Footer } from './Footer'
import LiquidSwipe from 'react-liquidswipe'
import { Teachers } from './Teachers/Teachers'

function App() {
  const componentsToRender=[<Banner/>,<Ads/>,<Carousel props='teachers'/>,<Carousel props='subjects'/>,<Carousel props='books'/>,<Footer/>]

  return (
    // <LiquidSwipe
    // components={componentsToRender}
    // style={{
    //   height: '100vh',
    //   width: '100vw',
    // }}
    // />
    <Teachers/>
  );
}

export default App;
