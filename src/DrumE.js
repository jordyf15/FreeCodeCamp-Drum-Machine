import React from 'react';
class DrumE extends React.Component{
    state={
        soundDesc: 'Heater 3',
        soundClip: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
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
    returnClick=()=>{
        this.setState({
            colorClicked: "gray",
            moveClicked: "0px",
            shadowClicked: "black 3px 3px 5px"
        })
    }
    changeClick=()=>{
        if(this.props.currentPower==="on"){
            document.getElementById('E').play();
            if(this.props.currentBank==="heater"){
                this.props.changeDisplay('Heater 3');
            }else{
                this.props.changeDisplay('Chord 3');
            }
            this.setState({
                colorClicked: "orange",
                moveClicked: "5px",
                shadowClicked: "none"
            })
            setTimeout(this.returnClick,100);
        }
    }
    keyDownFunc=(e)=>{
        let key = e.keyCode;
            if(key === 69 || key === 101){
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
                soundDesc: 'Heater 3',
                soundClip: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
            })
        }else{
            this.setState({
                soundDesc: 'Chord 3',
                soundClip: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
            })
        }
    }
     }
    render(){
        return(
            <div className="drums">
                <button className="drum-pad" style={{backgroundColor: this.state.colorClicked, marginTop: this.state.moveClicked, boxShadow: this.state.shadowClicked}} id={this.state.soundDesc} onClick={this.changeClick}>E
                <audio className="clip" id="E" src={this.state.soundClip}></audio>
                </button>
            </div>
        );
    }
}
export default DrumE;