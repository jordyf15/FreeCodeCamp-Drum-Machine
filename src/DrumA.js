import React from 'react';
class DrumA extends React.Component{
    state={
        soundDesc: 'Heater 4',
        soundClip: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
        clicked: "gray",
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
            document.getElementById('A').play();
            if(this.props.currentBank==="heater"){
                this.props.changeDisplay('Heater 4');
            }else{
                this.props.changeDisplay('Shaker');
            }
            this.setState({
                clicked: "orange",
                moveClicked: "5px",
                shadowClicked: "none"
            })
            setTimeout(this.returnClick,100);
        }
    }
    returnClick=()=>{
        this.setState({
            clicked: "gray",
            moveClicked: "0px",
            shadowClicked: "black 3px 3px 5px"
        })
    }
    keyDownFunc=(e)=>{
        let key = e.keyCode;
            if(key === 65 || key === 97){
                this.changeClick();
                if(this.props.currentPower==="on"){
                    this.setState({
                        clicked: "orange",
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
                soundDesc: 'Heater 4',
                soundClip: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
            })
        }else{
            this.setState({
                soundDesc: 'Shaker',
                soundClip: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
            })
        }
    }
     }
    render(){
        return(
            <div className="drums">
                <button className="drum-pad" style={{backgroundColor: this.state.clicked, marginTop: this.state.moveClicked, boxShadow: this.state.shadowClicked}} id={this.state.soundDesc} onClick={this.changeClick}>A
                <audio className="clip" id="A" src={this.state.soundClip}></audio>
                </button>
            </div>
        );
    }
}
export default DrumA;