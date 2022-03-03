import logo from './logo.svg';
import './App.css';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {} from ;
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";

function App() {
  function  fileSelectionHandler(event) {
    console.log(event.target.files[0])
  }
  return (
    <div className="App">
      <section>
        <div className="nav">
          <div className='nav-item'>
            <h1><FontAwesomeIcon icon={faShoppingBag} id="icon"/>JOB BASKET</h1>
          </div>
          <div className='nav-item'>
            <div><h1>REGISTER</h1></div>
            <div><h1>LOG IN</h1></div>
          </div>
        </div>
      </section>
      <header className='App-header'>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div className='container'>
          <div className='inner'>
            <div id='image-box'>
              <FontAwesomeIcon icon={faCloudArrowUp} id='upload-icon'/>
            </div>
            <div id='text-box'>
              <label className="custom-file-upload">
                <input type="file" onChange={fileSelectionHandler}/>
                UPLOAD RESUME
            </label>
            </div>
          </div>
        </div>
        <div className='box'>
          <div className='cell'>
            <FontAwesomeIcon icon={faLightbulb} id="box-icon"/>
            <h2>Easily find your next opportunity.</h2>
          </div>
          <div className='cell'>
            <FontAwesomeIcon icon={faThumbsUp} id="box-icon"/>
            <h2>We care about your privacy!</h2>
          </div>
          <div className='cell'>
            <FontAwesomeIcon icon={faFileLines} id="box-icon"/>
            <h2>Millions of resources.</h2>
          </div>
        </div>
      </header>
      
    </div>
  );
}

export default App;
