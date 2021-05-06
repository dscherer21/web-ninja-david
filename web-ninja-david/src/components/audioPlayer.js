import React from 'react';

function AudioPlayer() {
  
  return (
    <div className='whiteBackground'>
        <div>Aqueous Transmission by Incubus</div>
        <audio controls loop='loop'>
            <source src="./../media/Aqueous_Transmission.mp3" type="audio/mpeg"/>
            Your browser does not support the audio element.
        </audio>
    </div>
  );
}

export default AudioPlayer;