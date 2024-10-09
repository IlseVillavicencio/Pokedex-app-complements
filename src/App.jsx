import './styles.css';
import Header from './components/header';
import Image from './components/image';
import Info from './components/info';
import Description from './components/description';
import Stats from './components/Stats';



function App() {
  return (
    <div className='card'>
      <>
      <Header />
      <Image />
      </>
      <div className='poke-info'>
        <Info />
        <Description />
        <Stats />
      </div> 
    </div>
  );
}

export default App;

