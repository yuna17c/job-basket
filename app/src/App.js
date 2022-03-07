import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Component } from 'react';
import {firebaseApp} from './base'
import {storageRef} from './base'
import { ref, uploadBytes } from "firebase/storage";

class App extends Component {
  state = {
    selectedFile: null
  }

  fileSelectionHandler = event => {
    console.log(event.target.files[0])
    this.setState ({
      selectedFile:event.target.files[0]
    })
    const [file] = event.target.files;
    const { name: name } = file;
    const fileName = `${name}`;
    document.querySelector('.file-name').textContent = fileName;
    console.log(fileName)
  }
  fileUploadHandler = (e) => {
        const file = e.target.files[0];
        const fileRef = ref(storageRef, file.name);
        uploadBytes(fileRef, file).then(() =>{
            console.log("Uploaded a file successfully")
        })
    }
  
  render() {
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
            <h3 className="file-name">Upload your resume</h3>
            <div id='uploads'>
              <div id='text-box'>
                <input type="file" onChange={this.fileUploadHandler}/>
              </div>
            </div>
          </div>
        </div>
        <div className='box'>
          <div className='cell'>
            <FontAwesomeIcon icon={faLightbulb} id="box-icon"/>
            <h2>Find your next opportunity.</h2>
            <p>Explore the best options you have.</p>
          </div>
          <div className='cell'>
            <FontAwesomeIcon icon={faThumbsUp} id="box-icon"/>
            <h2>We care about your privacy.</h2>
            <p>All your files are kept safe and will be deleted.</p>
          </div>
          <div className='cell'>
            <FontAwesomeIcon icon={faFileLines} id="box-icon"/>
            <h2>Credible resources.</h2>
            <p>Job postings are 100% credible.</p>
          </div>
        </div>
      </header>
      
    </div>
  );
  }
}

export default App;
