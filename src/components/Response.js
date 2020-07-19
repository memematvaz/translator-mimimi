import React from 'react';

class Response extends React.Component {

    translateText(text) {
        const translatedText = text.replace(/[aeou]/g, 'i').replace(/[áéóú]/g, 'í').replace(/[àèòù]/g, 'ì').replace(/[AEOU]/g, 'I').replace(/qii/g, 'qui').replace(/QII/g, 'QUI').replace(/qií/g, 'quí').replace(/QIÍ/g, 'QUÍ');

        return translatedText;
    }

    render() {
        const text = this.props.textToTranslate;
        return ( 
        <div className="response">
            <p > { this.translateText(text) } </p> 
            </div >
        );
    }
}

export default Response;