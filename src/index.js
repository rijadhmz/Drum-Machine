import React from "react"; 
import ReactDOM from "react-dom"; 
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleClick(event) {
    const audioElement = event.target.querySelector('.clip');
    if (audioElement) {
      audioElement.currentTime = 0;
      audioElement.play();
      const displayElement = document.getElementById('display');
      if (displayElement) {
        displayElement.innerText = audioElement.parentElement.id;
      }
    }
  }

  handleKeyPress(event) {
    const key = event.key.toUpperCase();
    const audioElement = document.getElementById(key);
    if (audioElement) {
      audioElement.currentTime = 0;
      audioElement.play();
      const displayElement = document.getElementById('display');
      if (displayElement) {
        displayElement.innerText = audioElement.parentElement.id;
      }
    }
  }
  
  render() {
    
    return (
      
      <div id='drum-machine'>
        <div id='application'>
          <div className='row'>
            <div className='col-6'>
              <div id='display' className='col-6'></div>
              <div className='row'>
                <button id="Heater-1" className='drum-pad col-3 btn btn-lg btn-light' onClick={this.handleClick}><audio className='clip' id='Q' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'/>Q</button>
                <button id="Heater-2" className='drum-pad col-3 btn btn-lg btn-light' onClick={this.handleClick}><audio className='clip' id='W' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' />W</button>
                <button id="Heater-3" className='drum-pad col-3 btn btn-lg btn-light' onClick={this.handleClick}><audio className='clip' id='E' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' />E</button>
              </div>
              <div className='row'>
                <button id="Heater-4" className='drum-pad col-3 btn btn-lg btn-light' onClick={this.handleClick}><audio className='clip' id='A' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' />A</button>
                <button id="Clap" className='drum-pad col-3 btn btn-lg btn-light' onClick={this.handleClick}><audio className='clip' id='S' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' />S</button>
                <button id="Open-HH" className='drum-pad col-3 btn btn-lg btn-light' onClick={this.handleClick}><audio className='clip' id='D' src='https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' />D</button>
              </div>
              <div className='row'>
                <button id="Kick-n'-Hat" className='drum-pad col-3 btn btn-lg btn-light' onClick={this.handleClick}><audio className='clip' id='Z' src='https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' />Z</button>
                  <button id="Kick" className='drum-pad col-3 btn btn-lg btn-light' onClick={this.handleClick}><audio className='clip' id='X' src='https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' />X</button>
                  <button id="Closed-HH" className='drum-pad col-3 btn btn-lg btn-light' onClick={this.handleClick}><audio className='clip' id='C' src='https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' />C</button>
             </div>
            </div>
            <div className='col-6'>
                <div id='info' className='flex-column'>
                  <h1 className='text-primary'>Drum Machine</h1>
                  <p>Use your mouse or keyboard to play!</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))