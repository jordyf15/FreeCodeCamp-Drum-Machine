import React from 'react';
import './App.css';
import DrumQ from './DrumQ';
import DrumW from './DrumW';
import DrumE from './DrumE';
import DrumA from './DrumA';
import DrumS from './DrumS';
import DrumD from './DrumD';
import DrumZ from './DrumZ';
import DrumX from './DrumX';
import DrumC from './DrumC';
class App extends React.Component{
  state={
    power: "on",
    bank: "heater",
    display: "",
    volume: 0.3
  }
  powerChange=()=>{
    if(this.state.power==="on"){
      this.setState({
        power: "off",
        display: ""
      })
      document.getElementById('volume').disabled = true;
      document.getElementById("bank-button").disabled=true;
    }else{
      this.setState({
        power: "on"
      })
      document.getElementById('volume').disabled = false;
      document.getElementById("bank-button").disabled=false;
    }
  }
  changeDisplay=(newDisplay)=>{
    this.setState({
      display: newDisplay
    })
  }
  changeBank=()=>{
    if(this.state.bank==="heater"){
      this.setState({
        bank: "piano"
      })
      this.changeDisplay('Smooth Piano Kit')
    }else{
      this.setState({
        bank: "heater"
      })
      this.changeDisplay('Heater Kit')
    }
  }
  offDisp=()=>{
    this.setState({
      display: ''
    })
  }
  changeVolume=()=>{
    if(this.state.power==='on'){
      let newVolume = document.getElementById('volume').value;
      var dispVolume = Math.floor(document.getElementById('volume').value * 100);
      document.getElementById('Q').volume=newVolume;
      document.getElementById('W').volume=newVolume;
      document.getElementById('E').volume=newVolume;
      document.getElementById('A').volume=newVolume;
      document.getElementById('S').volume=newVolume;
      document.getElementById('D').volume=newVolume;
      document.getElementById('Z').volume=newVolume;
      document.getElementById('X').volume=newVolume;
      document.getElementById('C').volume=newVolume;
      this.changeDisplay("Volume: "+dispVolume);
      setTimeout(this.offDisp,1000);
    }
  }
  render(){
    return(
    
      <div id="drum-machine">

        <div id="logo-container">
          <div>FCC</div>
          <i className="fa fa-free-code-camp"></i> 
        </div>
      <div id="drum-control-container">
        <div id="drums-container">
        <DrumQ currentPower={this.state.power} currentBank={this.state.bank} changeDisplay={this.changeDisplay}/>
        <DrumW currentPower ={this.state.power} currentBank={this.state.bank} changeDisplay={this.changeDisplay}/>
        <DrumE currentPower={this.state.power} currentBank={this.state.bank} changeDisplay={this.changeDisplay}/>
        <DrumA currentPower={this.state.power} currentBank={this.state.bank} changeDisplay={this.changeDisplay}/>
        <DrumS currentPower={this.state.power} currentBank={this.state.bank} changeDisplay={this.changeDisplay}/>
        <DrumD currentPower={this.state.power} currentBank={this.state.bank} changeDisplay={this.changeDisplay}/>
        <DrumZ currentPower={this.state.power} currentBank={this.state.bank} changeDisplay={this.changeDisplay}/>
        <DrumX currentPower={this.state.power} currentBank={this.state.bank} changeDisplay={this.changeDisplay}/>
        <DrumC currentPower={this.state.power} currentBank={this.state.bank} changeDisplay={this.changeDisplay}/>
        </div>

        <div id="controls-container">
          <div className="power-bank-container">
            <p>Power</p>
            <button className="control-buttons"onClick={this.powerChange}>
            <div id={this.state.power} className="inner-button"></div>
            </button>
          </div>
          <div id="display">
           <p id="display-text">{this.state.display}</p>
          </div>
          <input id="volume" type="range" min="0" max="1" step="0.01" onChange={this.changeVolume}></input>
          <div className="power-bank-container">
            <p>Bank</p>
            <button id="bank-button"  className="control-buttons" onClick={this.changeBank}>
            <div className="inner-button" id={this.state.bank}></div>
            </button> 
          </div>
        </div> 
        </div> 


      </div>
      
    );
  }
}



export default App;
