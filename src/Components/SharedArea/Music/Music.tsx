import "./Music.css";
import audioSource from "../../../assets/audio/Mazzy Star - Fade Into You (Official Music Video).mp3"

import {useRef} from "react";

export function Music() {

    const myAudio = useRef<HTMLAudioElement>(null);

    function playMusic() {
        myAudio.current?.play()
    }

    function pauseMusic() {
        myAudio.current?.pause()
    }

    function stopMusic() {
        myAudio.current?.load()
    }


    return (
        <div className="Music">
            <audio src={audioSource} ref={myAudio}></audio>
            <button onClick={playMusic}>▶️</button>
            <button onClick={pauseMusic}>⏸️️</button>
            <button onClick={stopMusic}>⏹️️</button>
        </div>
    );
}
