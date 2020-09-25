import React from 'react';
import './App.css';
import Drum from './Drum';
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
       {/* DrumQ */}
        <Drum currentPower={this.state.power} currentBank={this.state.bank} changeDisplay={this.changeDisplay} 
        soundDescHeater="Heater 1" soundDescPiano="Chord 1" soundClipHeater="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" 
        soundClipPiano="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3" drumId="Q" keyLowerCase={113} keyUpperCase={81}/>

        {/*Drum W*/ }
        <Drum currentPower ={this.state.power} currentBank={this.state.bank} changeDisplay={this.changeDisplay} soundDescHeater="Heater 2" 
        soundDescPiano="Chord 2" soundClipHeater="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
        soundClipPiano="https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3" drumId="W" keyLowerCase={119} keyUpperCase={87}/>

       {/* Drum E*/}
        <Drum currentPower={this.state.power} currentBank={this.state.bank} changeDisplay={this.changeDisplay} soundDescHeater="Heater 3" soundDescPiano="Chord 3"
        soundClipHeater="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" soundClipPiano="https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
        drumId="E" keyLowerCase={101} keyUpperCase={69}/>

        {/*DrumA*/}
        <Drum currentPower={this.state.power} currentBank={this.state.bank} changeDisplay={this.changeDisplay} soundDescHeater="Heater 4" soundDescPiano="Shaker"
        soundClipHeater="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" soundClipPiano="https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
        drumId="A" keyLowerCase={97} keyUpperCase={65}/>

       {/*DrumS*/}
        <Drum currentPower={this.state.power} currentBank={this.state.bank} changeDisplay={this.changeDisplay} soundDescHeater="Clap" soundDescPiano="Open HH"
        soundClipHeater="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" soundClipPiano="https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
        drumId="S" keyLowerCase={115} keyUpperCase={83}/>
        {/*DrumD*/}
        <Drum currentPower={this.state.power} currentBank={this.state.bank} changeDisplay={this.changeDisplay} soundDescHeater="Open HH" soundDescPiano="Closed HH"
        soundClipHeater="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" soundClipPiano="https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
        drumId="D" keyLowerCase={100} keyUpperCase={68}/>
        {/*DrumZ*/}
        <Drum currentPower={this.state.power} currentBank={this.state.bank} changeDisplay={this.changeDisplay} soundDescHeater="Kick\'n Hat" soundDescPiano="Punchy Kick"
        soundClipHeater="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" soundClipPiano="https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
        drumId="Z" keyLowerCase={122} keyUpperCase={90}/>

        {/*DrumX*/}
        <Drum currentPower={this.state.power} currentBank={this.state.bank} changeDisplay={this.changeDisplay} soundDescHeater="Kick" soundDescPiano="Side Stick"
        soundClipHeater="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" soundClipPiano="https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
        drumId='X' keyLowerCase={120} keyUpperCase={88}/>

       {/*DrumC*/}
        <Drum currentPower={this.state.power} currentBank={this.state.bank} changeDisplay={this.changeDisplay} soundDescHeater="Closed HH" soundDescPiano="Snare"
        soundClipHeater="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" soundClipPiano="https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
        drumId="C" keyLowerCase={99} keyUpperCase={67}/>

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
