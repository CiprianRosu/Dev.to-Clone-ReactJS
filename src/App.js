import './App.scss';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import Content from './components/Content';
import Navigation from './components/Navigation';

function App() {
  return <>
  <Navigation/>
  <main className='main-container'>
    < LeftSidebar/>
    <Content/>
    < RightSidebar/>

  </main>
  </>
}

export default App;
