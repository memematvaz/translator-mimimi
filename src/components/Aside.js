import React from 'react';
import music from '../music/OpinionMierda.mp3';

const Aside = () => {

    return (
        <aside className="aside">
            <div key="1" className="song">
                <audio controls autoPlay>
                    <source src={music} type="audio/mp3" />
                </audio>
                <button onClick={this.fakeClickPlay}>Play</button> 
                <button onClick={this.fakeClickPause}>Pause</button> 
            </div>
        </aside>
    );
};

export default Aside;



