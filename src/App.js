import { Ads } from './Ads';
import { Banner } from './Banner/Banner';
import { Carousel } from './Carousel';
import { Navigation } from './Navigation/Navigation'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Banner />
      <Ads />
      <Carousel data='teachers'/>
      {/* <Carousel data='subjects'/> */}
    </div>
  );
}

export default App;
