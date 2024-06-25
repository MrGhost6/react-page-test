
import './App.css';
import kuwaitFlag from './assets/kuwait-flag.png';
import usaFlag from './assets/USA-Flag.png';

// 
function App() {
  return (
    <div className="App">
        {/* This is the header of the app*/}
      <header>
          <h1>Select Language</h1>
      </header>

        {/* This is the div that handeles the two radio buttons with the pictures */}
      <div className="box">
        <div className="Arabic">
          <img src={kuwaitFlag} alt=""/>
          <label for="html">Arabic</label>
          <input type="radio" id="html" name="fav_language" value="HTML"></input><br></br>
        </div>
        <div className="English">
          <img src={usaFlag} alt=''/>
          <label for="html">English</label>
          <input type="radio" id="html" name="fav_language" value="HTML"></input><br></br>
          
        </div>
        {/* This is the continue button */}
        <button>Continue</button>
      </div>

    </div>
  );
}

export default App;
