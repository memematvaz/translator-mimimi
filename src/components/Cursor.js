import React from 'react';

class Cursor extends React.Component {

    window.onload = init;
    function init() {
        if (window.Event) {
        document.captureEvents(Event.MOUSEMOVE);
        }
        document.onmousemove = getCursorXY;
    }
    
    function getCursorXY(e) {
        document.getElementById('cursorX').value = (window.Event) ? e.pageX : event.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
        document.getElementById('cursorY').value = (window.Event) ? e.pageY : event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
    }

  render() {
    return(      
      <form>
        <textarea onChange={this.props.translateThis}/>
      </form>  
    );
  }
}

export default Cursor;



