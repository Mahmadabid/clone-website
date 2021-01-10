import React from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";

export const Body1 = () => {

  const mute = [{ transform: "translateX(20px)" }];
  const mutedTiming = {
    duration: 3000,
    iterations: Infinity,
    direction: "alternate",
    easing: "ease-in-out",
  };
  const muted__png = useWebAnimations({
    keyframes: mute,
    timing: mutedTiming,
  });

  return (
    <div className="section intro">
      <div className="intro__inner container">
        <h1 className="title intro__title">Mutify for Mac</h1>
        <p>
          Use a shortcut or the touch bar on any&nbsp;Mac device
          to&nbsp;quickly mute your&nbsp;microphone
          </p>
        <div className="intro__buttons-wrapper">
          <span className="button intro__button download-button down-btn" >
            Download
            </span>
          <span
            className="button button_white button_bold intro__button buy-button"
          >
            Buy: $4.99
            </span>
        </div>
        <div ref={muted__png.ref} className="intro__video-wrapper">
          <video
            src="https://mutify.app/videos/main-screen@1x.mp4"
            poster="https://mutify.app/images/mutify-video@2x-5f70260dcb.jpg"
            data-2x-src="https://mutify.app/videos/main-screen@2x.mp4"
            data-2x-poster="https://mutify.app/images/mutify-video@2x-5f70260dcb.jpg"
            muted
            autoPlay
            loop="Infinite"
          ></video>
          <img
            src="https://mutify.app/images/mutify-video-7a62103fb9.jpg"
            srcSet="https://mutify.app/images/mutify-video@2x-5f70260dcb.jpg 2x"
            alt=""
          />
          <div className="intro__wave-wrapper">
            <img
              src="https://mutify.app/images/wave-1-ddc3a23018.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>

  )
}
