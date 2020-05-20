import React from 'react';

class Aside extends React.Component {
  render() {

    console.log(this.props)
    return(
    
            <button className="button" onClick={this.props.pausePlay}> soy un botón
                
            </button> 
    );
  }
}


export default Aside;