import './App.css';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Second from './components/Second';
import Third from './components/Third';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Second />
      <Third />
    </div>
  );
}

export default App;
