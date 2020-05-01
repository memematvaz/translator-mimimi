import React from 'react';

class Response extends React.Component {

  translateText(text) {
    const translatedText = text.replace(/[aeiouáéíóúàèìòù]/ig,'i');

    return translatedText;

  }

  render() {
    const text = this.props.textToTranslate;
    return(
      <div>
      <p>{this.translateText(text)}</p>
      </div>  
    );
  }
}

export default Response;