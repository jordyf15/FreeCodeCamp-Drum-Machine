import React from 'react';
class DrumX extends React.Component{
    state={
        soundDesc: 'Kick',
        soundClip: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
        colorClicked: "gray",
        moveClicked: "0px",
        shadowClicked: "black 3px 3px 5px"
    }
    componentDidMount(){
        window.addEventListener('keydown',this.keyDownFunc);
    }
    componentWillUnmount(){
        window.removeEventListener('keydown',this.keyDownFunc);
    }
    changeClick=()=>{
        if(this.props.currentPower==="on"){
            document.getElementById('X').play();
            if(this.props.currentBank==="heater"){
                this.props.changeDisplay("Kick");
            }else{
                this.props.changeDisplay('Side Stick');
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
            if(key === 88 || key === 120){
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
    componentWillReceiveProps(nextProps){
        if(this.props.currentBank!==nextProps.currentBank){
        if(nextProps.currentBank==='heater'){
            this.setState({
                soundDesc: 'Kick',
                soundClip: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
            })
        }else{
            this.setState({
                soundDesc: 'Side Stick',
                soundClip: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
            })
        }
    }
    }
    render(){
        return(
            <div className="drums">
                <button className="drum-pad" style={{backgroundColor: this.state.colorClicked, marginTop: this.state.moveClicked, boxShadow: this.state.shadowClicked}} id={this.state.soundDesc} onClick={this.changeClick}>X
                <audio className="clip" id="X" src={this.state.soundClip}></audio>
                </button>
            </div>
        );
    }
}
export default DrumX;