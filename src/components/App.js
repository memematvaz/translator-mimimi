import React from 'react';
import '../styles/main.scss';
import Response from './Response'
import Input from './Input';
import Aside from './Aside';


class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      text: '',
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const newText = event.currentTarget.value;
    this.setState({text: newText});
  }

  render() {
    return(
      <div className="App">

        <Input translateThis={this.handleInputChange}/>
        
        <Response textToTranslate={this.state.text}/>

<Aside/>
      </div>  
    );
  }
}

export default App;