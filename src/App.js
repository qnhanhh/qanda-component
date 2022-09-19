import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Banner } from './Banner/Banner'
import { Ads } from './Ads'
import { Carousel } from './Carousel/Carousel'
import { Footer } from './Footer'
import LiquidSwipe from 'react-liquidswipe'
import { Teachers } from './Teachers/Teachers'
import { Navigation } from './Navigation/Navigation'

function App() {
  const componentsToRender = [<Banner />, <Ads />, <Carousel props='teachers' />, <Carousel props='subjects' />, <Carousel props='books' />, <Footer />]

  return (

    <BrowserRouter>
      <Routes>
        <Route path='teachers' element={<Teachers />} />
        <Route path='' element={<LiquidSwipe
        components={componentsToRender}
        style={{
          height: '100vh',
          width: '100vw',
        }}
      />} />
      </Routes>
      {/* <LiquidSwipe
        components={componentsToRender}
        style={{
          height: '100vh',
          width: '100vw',
        }}
      /> */}
      {/* <Navigation /> */}
    </BrowserRouter>
  );
}

export default App;
