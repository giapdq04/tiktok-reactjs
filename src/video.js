import video from './video/Download.mp4'
import { forwardRef, useImperativeHandle, useRef } from 'react';
const Video = (props, ref) => {
    const videoRef = useRef()
    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play()
        },

        pause() {
            videoRef.current.pause()
        }
    }))
    return (
        <video
            ref={videoRef}
            src={video}
            width={350}
        />
    )
}

export default forwardRef(Video);