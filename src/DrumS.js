import React from 'react';
class DrumS extends React.Component{
    state={
        soundDesc: 'Clap',
        soundClip: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
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
            document.getElementById('S').play();
            if(this.props.currentBank==="heater"){
                this.props.changeDisplay('Clap');
            }else{
                this.props.changeDisplay('Open HH');
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
            if(key === 83 || key === 115){
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
                soundDesc: 'Clap',
                soundClip: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
            })
        }else{
            this.setState({
                soundDesc: 'Open HH',
                soundClip: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
            })
        }
    }
     }
    render(){
        return(
            <div className="drums"> 
                <button className="drum-pad" style={{backgroundColor: this.state.clicked, marginTop: this.state.moveClicked, boxShadow: this.state.shadowClicked}} id={this.state.soundDesc} onClick={this.changeClick}>S
                <audio className="clip" id="S" src={this.state.soundClip}></audio>
                </button>
            </div>
        );
    }
}
export default DrumS;