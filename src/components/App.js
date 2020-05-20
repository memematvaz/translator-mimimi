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
            
        }

        this.handleInputChange = this.handleInputChange.bind(this);
       // this.pausePlay = this.pausePlay.bind(this);
    }

    handleInputChange(event) {
        const newText = event.currentTarget.value;
        this.setState({ text: newText });
    }



    //pausePlay(event) {
    //    const myAudio = new Audio(music);
    //    event.myAudio.play()
    //}   

    render() {
        return (

            <div className = "App" >
                <Header/>
                <div className = "container-main-aside" >
                    <div className = "main" >
                        <Input translateThis = {this.handleInputChange}/>
                        <Response textToTranslate = { this.state.text }/> 
                    </div > 
                    <Aside translateThis = {this.pausePlay}/>
                </div>  
            </div>
        );
    }
}

export default App;