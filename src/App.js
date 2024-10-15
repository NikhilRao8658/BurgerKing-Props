// app


import './index.css';
import MainNavbar from './Component/MainNavbar';
import OrderBox from './Component/OrderBox';
import Cards from './Component/Cards';
import Bottom from './Component/Bottom';
import Foot from './Component/Foot'
import Itemdata from './Component/Data'

function App() {
  return (
    <div className="App">
      <MainNavbar />
      <OrderBox />
      <div style={{ display: 'flex', flexWrap: 'wrap', marginLeft: "140px", gap: '30px' }}>
        {Itemdata.map((x) => {
          return (
            <>
              <Cards imgSrc={x.imgSrc} heading={x.heading} bpara={x.bpara} term={x.term} btn={x.btn} key={x.id} />
           
            </>

          )
        })}

      </div>

      <Bottom />
      <Foot />
    </div>
  );
}

export default App;