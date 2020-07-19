import React from 'react';

class Aside extends React.Component {
  render() {

 
    return(
    
    <button className="button" onClick={this.props.pausePlay}> 
        <i className={ this.props.icon }></i> 
                
            </button> 
    );
  }
}


export default Aside;