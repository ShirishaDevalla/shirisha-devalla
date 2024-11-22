import Header from './Components/Header';
import Skills from './Components/Skills';
import Meet from './Components/Meet';
import './App.css';

function App() {
  return (
    <div>
      <div>
        {Header}
        {Skills}
        {Meet}
      </div>
      <div>
        <Header/>
        <Skills/>
        <Meet/>
      </div>
      
    </div>
  );
}

export default App;
