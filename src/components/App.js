import React from 'react';
import '../styles/main.scss';
import Response from './Response'
import Input from './Input';
import Aside from './Aside';
import Header from './Header';
import music from '../music/OpinionMierda.mp3';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            myAudio: new Audio(music),
            isPlaying: false,
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.pausePlay = this.pausePlay.bind(this);
    }

    handleInputChange(event) {
        const newText = event.currentTarget.value;
        this.setState({ text: newText });
    }

    pausePlay(event) {

        //this.state.myAudio = ;

        if(this.state.isPlaying){
            this.state.myAudio.pause();
            this.state.isPlaying = false;
            console.log('pause', this.state.myAudio)
        } else {
            this.state.myAudio.play();
            this.state.isPlaying = true;
            console.log('play', this.state.myAudio)
        }

    }   

  


    
    render() {
        return (

            <div className = "App" >
                <Header/>
                <div className = "container-main-aside" >
                    <div className = "main" >
                        <Input translateThis = {this.handleInputChange}/>
                        <Response textToTranslate = { this.state.text }/> 
                    </div > 
                    <Aside pausePlay = {this.pausePlay}/>
                </div>  
            </div>
        );
    }
}

export default App;