import React from 'react';
class DrumD extends React.Component{
    state={
        soundDesc: 'Open HH',
        soundClip: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
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
            document.getElementById('D').play();
            if(this.props.currentBank==="heater"){
                this.props.changeDisplay("Open HH");
            }else{
                this.props.changeDisplay("Closed HH");
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
            if(key === 68 || key === 100){
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
                soundDesc: 'Open HH',
                soundClip: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
            })
        }else{
            this.setState({
                soundDesc: 'Closed HH',
                soundClip:'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
            })
        }
    }
     }
    render(){
        return(
            <div className="drums">
                <button className="drum-pad" style={{backgroundColor: this.state.clicked, marginTop: this.state.moveClicked, boxShadow: this.state.shadowClicked}} id={this.state.soundDesc} onClick={this.changeClick}>D
                <audio className="clip" id='D' src={this.state.soundClip}></audio>
                </button>
            </div>
        );
    }
}
export default DrumD;