import React from 'react';

class Input extends React.Component {
  render() {
    return(
      <form>
        <textarea onChange={this.props.translateThis}/>
      </form>  
    );
  }
}

export default Input;



