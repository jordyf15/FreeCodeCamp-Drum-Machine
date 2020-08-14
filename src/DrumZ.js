import React from 'react';
class DrumZ extends React.Component{
    state={
        soundDesc: 'Kick\'n Hat',
        soundClip: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
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
            document.getElementById('Z').play();
            if(this.props.currentBank==="heater"){
                this.props.changeDisplay('Kick\'n Hat');
            }else{
                this.props.changeDisplay("Punchy Kick");
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
            if(key === 90 || key === 122){
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
                soundDesc: 'Kick\'n Hat',
                soundClip: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
            })
        }else{
            this.setState({
                soundDesc: 'Punchy Kick',
                soundClip: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
            })
        }
    }
     }
    render(){
        return(
            <div className="drums">
                <button className="drum-pad" style={{backgroundColor: this.state.clicked, marginTop: this.state.moveClicked, boxShadow: this.state.shadowClicked}} id={this.state.soundDesc} onClick={this.changeClick}>Z
                <audio className="clip" id='Z' src={this.state.soundClip}></audio>
                </button>
            </div>
        );
    }
}
export default DrumZ;