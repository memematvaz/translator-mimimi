import React from 'react';

class Response extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            speechSynthesis: 'speechSynthesis' in window ? new SpeechSynthesisUtterance() : undefined
        }

    }

    translateText(text) {
        const translatedText = text.replace(/[aeou]/g, 'i').replace(/[áéóú]/g, 'í').replace(/[àèòù]/g, 'ì').replace(/[AEOU]/g, 'I').replace(/qii/g, 'qui').replace(/QII/g, 'QUI').replace(/qií/g, 'quí').replace(/QIÍ/g, 'QUÍ');

        return translatedText;
    }
    playTextToSpeech (text) {
        this.state.speechSynthesis.text = this.translateText(text);
        this.state.speechSynthesis.lang = 'es';
        window.speechSynthesis.speak(this.state.speechSynthesis);
    }

    render() {
        const text = this.props.textToTranslate;
        let button;
        if (this.state.speechSynthesis && text) {
            button = <button className="button" title="Texto a voz" onClick={this.playTextToSpeech.bind(this, text)}> 
                <i className='far fa-play-circle'></i> 
            </button>
        }
        return ( 
        <div className="response">
            <p> { this.translateText(text) }</p>
            {button}
            </div >
        );
    }
}

export default Response;