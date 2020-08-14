import React from 'react';
class DrumC extends React.Component{
    state={
        soundDesc:'Closed HH',
        soundClip: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
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
            document.getElementById('C').play();
            if(this.props.currentBank==="heater"){
                this.props.changeDisplay("Closed HH");
            }else{
                this.props.changeDisplay("Snare");
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
            if(key === 67 || key === 99){
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
                soundDesc: 'Closed HH',
                soundClip: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
            })
        }else{
            this.setState({
                soundDesc: 'Snare',
                soundClip: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
            })
        }
    }
     }
    render(){
        return(
            <div className="drums">
                <button className="drum-pad" style={{backgroundColor: this.state.colorClicked, marginTop: this.state.moveClicked, boxShadow: this.state.shadowClicked}} id={this.state.soundDesc}onClick={this.changeClick}>C
                <audio className="clip" id="C" src={this.state.soundClip}></audio>
                </button>
            </div>
        );
    }
}
export default DrumC;