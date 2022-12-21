import './App.css';
import data from "./data.json";
import Jobs from "./components/Jobs"
import './scss/app.scss'

function App() {
  return (
    <div>
    <div className="header"></div>
    <Jobs data= {data} />
    </div>
    
  );
}

export default App;
