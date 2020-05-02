import React from 'react';
import music from '../music/OpinionMierda.mp3';

const Aside = () => {

    return (
        <aside>
            <div key="1" className="song">
                <audio controls autoPlay>
                    <source src={music} type="audio/mp3" />
                </audio>
            </div>
        </aside>
    );
};

export default Aside;