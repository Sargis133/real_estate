import {useRef, useState} from "react";
import Icons from "../Icons/Icons";
import "./videoPlayer.css"

function VideoPlayer({src}) {
    const [isPlaying, setIsPlaying] = useState(false)

    const videoItem = useRef(null)

    function onPlayVideo() {
        setIsPlaying(true)
        videoItem.current.play()
    }

    function onPauseVideo() {
        setIsPlaying(false)
    }

    return(
        <div className="video-player">
            <video onPause={onPauseVideo} controls={isPlaying} ref={videoItem} className="video-player__video">
                <source src={src}/>
            </video>
            <div className={`video-player__text-content ${isPlaying ? 'hide' : ''}`}>
                <p className="video-player__video-title">
                    Modern House Video
                </p>
                <p className="video-player__video-description">
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                    live the blind texts.
                </p>
                <button className="video-player__play-btn" onClick={onPlayVideo}>
                    <Icons name="play" fill="#fff" width="30px" height="30px"/>
                </button>
            </div>
        </div>
    )
}

export default VideoPlayer