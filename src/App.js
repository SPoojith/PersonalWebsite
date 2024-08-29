import './App.css';
import Home from './components/Home/Home';
import Journey from './components/Journey/Journey';
import MiniDrawer from './components/sidebar/SideBar';
import ParentScroll from './components/Scroll/ParentSroll';
function App() {
  return (
    <div className="App">
      <div className="body">
        <>
        <MiniDrawer/>
        <Home/>
        <Journey/>
        <ParentScroll/>
        </>
      </div>
    </div>
  );
}

export default App;
