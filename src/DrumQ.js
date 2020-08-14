import React from 'react';
class DrumQ extends React.Component{
    state={
        soundDesc:'Heater 1',
        soundClip:'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
        colorClicked: "gray",
        moveClicked: "0px",
        shadowClicked: "black 3px 3px 5px"
    }
    componentDidMount(){
        window.addEventListener('keydown',this.keyDownFunc);
    }
    changeClick=()=>{
        if(this.props.currentPower==="on"){
            document.getElementById('Q').play();
            if(this.props.currentBank==="heater"){
                this.props.changeDisplay('Heater 1');
               
            }else{
                this.props.changeDisplay('Chord 1');
               
            }
            this.setState({
                colorClicked: "orange",
                moveClicked: "5px",
                shadowClicked: "none"
            })
            setTimeout(this.returnClick,100);
        }
    }
    returnClick=()=>{
        this.setState({
            colorClicked: "gray",
            moveClicked: "0px",
            shadowClicked: "black 3px 3px 5px"
        })
    }
    keyDownFunc=(e)=>{
    let key = e.keyCode;
        if(key === 81 || key === 113){
            this.changeClick();
            if(this.props.currentPower==="on"){
                this.setState({
                    colorClicked: "orange",
                    moveClicked: "5px",
                    shadowClicked: "none"
                })
                setTimeout(this.returnClick,100);
            }
        }
    }
    componentWillUnmount(){
        window.removeEventListener('keydown',this.keyDownFunc);
    }
    componentWillReceiveProps(nextProps){
        if(this.props.currentBank!==nextProps.currentBank){
        if(nextProps.currentBank==='heater'){
           this.setState({
               soundDesc: 'Heater 1',
               soundClip:'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
           })
        }else{
           this.setState({
               soundDesc: 'Chord 1',
               soundClip: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
           })
        }
        }
    }
    render(){
        return(
            <div className="drums">
                <button onKeyDown={this.keyDownFunc} style={{backgroundColor: this.state.colorClicked, marginTop: this.state.moveClicked, boxShadow: this.state.shadowClicked}} className="drum-pad" id={this.state.soundDesc} onClick={this.changeClick}>Q
                <audio className="clip" id="Q" src={this.state.soundClip}></audio>
                </button>
            </div>
        );
    }
}
export default DrumQ;