import './App.css';
import fontawesome from '@fortawesome/fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Component } from 'react';
import { firebaseApp } from './base'
import { storageRef } from './base'
import { ref, uploadBytes } from "firebase/storage";
import myData from './dataframe'
//C:\Users\joshu\job-basket\app
// fontawesome.library.add(faCoffee);

var distList = []
var dict = []
for (let i = 1; i < 14; i++) {
  distList.push(myData.distance[i])
  dict[myData.distance[i]] = myData.links[i]
}
distList.sort()
var jobList = []
for (let i = 0; i < 13; i++) {
  var val = dict[distList[i]]
  console.log(val)
  jobList.push(val)
}
// console.log(jobList)

class App extends Component {
  state = {
    selectedFile: null
  }

  fileSelectionHandler = event => {
    console.log(event.target.files[0])
    this.setState({
      selectedFile: event.target.files[0]
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
    uploadBytes(fileRef, file).then(() => {
      console.log("Uploaded a file successfully :D")
    })
    console.log(myData);
  }
  
  render() {
    return (
      <div className="App">
        <section>
          <div className="nav">
            <div className='nav-item'>
              <h1><FontAwesomeIcon icon={faShoppingBag} id="icon" />JOB BASKET</h1>
            </div>
            <div className='nav-item'>
              <div><h1>REGISTER</h1></div>
              <div><h1>LOG IN</h1></div>
            </div>
          </div>
        </section>
        <header className='App-header'>
          <div className='container'>
            <div className='inner'>
              <div id='image-box'>
                <FontAwesomeIcon icon={faCloudArrowUp} id='upload-icon' />
              </div>
              <h3 className="file-name">Upload your resume</h3>
              <div id='uploads'>
                <div className="fileUpload">
                  <input type="file" onChange={this.fileUploadHandler} className="upload" />
                </div>
              </div>
            </div>
          </div>
          <div className='box'>
            <div className='cell'>
              <FontAwesomeIcon icon={faLightbulb} id="box-icon" />
              <h2>Find your next opportunity.</h2>
              <p>Explore the best options you have.</p>
            </div>
            <div className='cell'>
              <FontAwesomeIcon icon={faThumbsUp} id="box-icon" />
              <h2>We care about your privacy.</h2>
              <p>All your files are kept safe and will be deleted within a week.</p>
            </div>
            <div className='cell'>
              <FontAwesomeIcon icon={faFileLines} id="box-icon" />
              <h2>Credible resources.</h2>
              <p>Job postings are 100% credible.</p>
            </div>
          </div>
        </header>
        <h2 id="result">Here are the links to your best matches.</h2>
        <ol id="result-link">
          {jobList.map(link => (<li key={link}><a href={link} target="_blank">{link}</a></li>))}
        </ol>
      </div>

    );
  }
}

export default App;
