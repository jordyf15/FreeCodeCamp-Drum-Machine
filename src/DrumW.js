import React from 'react';
class DrumW extends React.Component{
    state={
        soundDesc: 'Heater 2',
        soundClip: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
        colorClicked: "gray",
        moveClicked: "0px",
        shadowClicked: "black 3px 3px 5px"
    }
    componentDidMount(){
        window.addEventListener('keydown',this.keyDownFunc);
    }
    changeClick=()=>{
        if(this.props.currentPower==="on"){
            document.getElementById("W").play();
            if(this.props.currentBank==="heater"){
                this.props.changeDisplay('Heater 2');
            }else{
                this.props.changeDisplay('Chord 2');
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
            if(key === 87 || key === 119){
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
                soundDesc: 'Heater 2',
                soundClip: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
            })
        }else{
            this.setState({
                soundDesc: 'Chord 2',
                soundClip: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
            })
        }
    }
     }
    render(){
        return(
            <div className="drums">
                <button className="drum-pad" id={this.state.soundDesc} style={{backgroundColor: this.state.colorClicked, marginTop: this.state.moveClicked, boxShadow: this.state.shadowClicked}} onClick={this.changeClick}>W
                <audio className="clip" id="W" src={this.state.soundClip}></audio>
                </button>
            </div>
        );
    }
}
export default DrumW;