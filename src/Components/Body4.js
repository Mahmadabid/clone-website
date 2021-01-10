import React from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";
import ScrollAnimation from "react-animate-on-scroll";

export const Body4 = () => {

    const move = [
        { transform: "translateY(200px)" },
        { transform: "translateY(0px)" }
];
    const moveTiming = {
        duration: 1000,
        easing: "ease-in-out",
    };

    const moveTiming2 = {
        duration: 1200,
        easing: "ease-in-out",
    };

    const movecard = [
        { transform: "translate(-100px, 200px)" },
        { transform: "translate(0px, 0px)" }
];
    const cardTiming = {
        duration: 1000,
        easing: "ease-in-out",

    };

    const airpods1 = useWebAnimations({
        keyframes: move,
        timing: moveTiming,
    });
    const airpods2 = useWebAnimations({
        keyframes: move,
        timing: moveTiming2,
    });

    const card = useWebAnimations({
        keyframes: movecard,
        timing: cardTiming,
    })

    return (
        <div className="switch-device">
        <div className="switch-device__inner container">
          <div className="switch-device__content">
            <h2 className="title title_medium switch-device__title">
              Stay muted even on a newly connected device
            </h2>
            <p>
              If you mute your mic on a call and switch to a new device, such
              as your AirPods, the app will detect the&nbsp;change and mute
              the new device as well
            </p>
            <span
              className="button switch-device__button download-button"
            >
              Download
            </span>
          </div>
          <div className="switch-device__images-wrapper">
            <img
              className="switch-device__macbook-image"
              src="https://mutify.app/images/Mockup_010-d63c73e7e3.png"
              srcSet="images/Mockup_010@2x-ae14ac1830.png 2x"
              alt="MacBook"
              title=""
            />
<ScrollAnimation animateIn>
                <img
                  className="switch-device__mutify-window-image animated fadeInAngle"
                  src="https://mutify.app/images/muted-screen-04789f86b7.png"
                  srcSet="images/muted-screen@2x-8fb72fee3e.png 2x"
                  alt="Mutify window"
                  ref={card.ref}
                  title=""
                />
                <div className="switch-device__airpods-wrapper" >
                  <img
                    src="https://mutify.app/images/airpods-left-7c7413e6a7.png"
                    srcSet="images/airpods-left@2x-5904767628.png 2x"
                    alt="Left airpod"
                    ref={airpods1.ref}
                    className="animated fadeInUp"
                  />
                  <img
                    src="https://mutify.app/images/airpods-right-1edfc7c6a2.png"
                    srcSet="images/airpods-right@2x-32b66e95b0.png 2x"
                    alt="Right airpod"
                    ref={airpods2.ref}
                    className="animated fadeInUp"
                  />
                </div>
                </ScrollAnimation>
            <div className="switch-device__wave-wrapper">
              <img
                src="https://mutify.app/images/wave-3-e6584704b7.svg"
                alt=""
              />
            </div>
          </div>
          <img
            className="switch-device__full-image"
            src="images/switch-device-image-395c6d0238.png"
            srcSet="images/switch-device-image@2x-4d3bcd1e26.png"
            alt=""
            role="presentation"
          />
        </div>
      </div>
  
    )
}
