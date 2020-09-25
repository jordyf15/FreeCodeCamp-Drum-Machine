import React from 'react';
class Drum extends React.Component{
    state={
        soundDesc: this.props.soundDescHeater,
        soundClip: this.props.soundClipHeater,
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
            document.getElementById(this.props.drumId).play();
            if(this.props.currentBank==="heater"){
                this.props.changeDisplay(this.props.soundDescHeater);
            }else{
                this.props.changeDisplay(this.props.soundDescPiano);
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
        console.log(this.state.soundClip)
        console.log(this.props.drumId)
        let key = e.keyCode;
            if(key === this.props.keyLowerCase || key === this.props.keyUpperCase){
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
                    soundDesc: this.props.soundDescHeater,
                    soundClip: this.props.soundClipHeater
                })
            }else{
                this.setState({
                    soundDesc: this.props.soundDescPiano,
                    soundClip: this.props.soundClipPiano
                })
            }
        }
    }
    render(){
        return(
            <div className="drums">
                <button className="drum-pad" style={{backgroundColor: this.state.colorClicked, marginTop: this.state.moveClicked, boxShadow: this.state.shadowClicked}} id={this.state.soundDesc}onClick={this.changeClick}>
                    {this.props.drumId}
                <audio className="clip" id={this.props.drumId} src={this.state.soundClip}></audio>
                </button>
            </div>
        );
    }
}
export default Drum;