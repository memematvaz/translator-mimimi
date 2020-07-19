import React from 'react';

class Aside extends React.Component {
  render() {

 
    return(
    <aside className="aside">
      <button className="button" onClick={this.props.pausePlay}> 
        <i className={ this.props.icon }></i> 
                
            </button> 
    </aside>
    );
  }
}


export default Aside;