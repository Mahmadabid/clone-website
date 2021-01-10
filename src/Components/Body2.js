import React from 'react';
import { motion } from "framer-motion";
import ScrollAnimation from "react-animate-on-scroll";
import useWebAnimations from "@wellyshen/use-web-animations";

export const Body2 = () => {
    const appeartwo = [{ transform: "translateY(-15px)" }];

    const appeartwoTiming = {
      delay: 500,
      duration: 5000,
      iterations: Infinity,
      direction: "alternate",
      easing: "ease-in-out",
    };
  
    const appear = [{ transform: "translateY(15px)" }];
  
    const appearTiming = {
      delay: 500,
      duration: 5000,
      iterations: Infinity,
      direction: "alternate",
      easing: "ease-in-out",
    };
  
      const appear__png = useWebAnimations({
        keyframes: appeartwo,
        timing: appeartwoTiming,
      });
    
      const fbMessenger__png = useWebAnimations({
        keyframes: appeartwo,
        timing: appeartwoTiming,
      });
      const gotomeeting__png = useWebAnimations({
        keyframes: appear,
        timing: appearTiming,
      });
    
      const fbMessengerBlur__png = useWebAnimations({
        keyframes: appeartwo,
        timing: appeartwoTiming,
      });
    
      const viberBlur__png = useWebAnimations({
        keyframes: appear,
        timing: appearTiming,
      });
    
      const telegramBlur__png = useWebAnimations({
        keyframes: appear,
        timing: appearTiming,
      });
      const slackBlur__png = useWebAnimations({
        keyframes: appear,
        timing: appearTiming,
      });
    
      const hangoutsBlur__png = useWebAnimations({
        keyframes: appear,
        timing: appearTiming,
      });
      const skypeBlur__png = useWebAnimations({
        keyframes: appear,
        timing: appearTiming,
      });
    
      const skype__png = useWebAnimations({
        keyframes: appear,
        timing: appearTiming,
      });
    
      const webex__png = useWebAnimations({
        keyframes: appeartwo,
        timing: appeartwoTiming,
      });
    
      const telegram__png = useWebAnimations({
        keyframes: appear,
        timing: appearTiming,
      });
    
      const viber__png = useWebAnimations({
        keyframes: appeartwo,
        timing: appeartwoTiming,
      });
    
      const hangouts__png = useWebAnimations({
        keyframes: appear,
        timing: appearTiming,
      });
    
      const zoom__png = useWebAnimations({
        keyframes: appear,
        timing: appearTiming,
      });
    
      const slack__png = useWebAnimations({
        keyframes: appear,
        timing: appearTiming,
      });  
    return (
        <div className="section work-with">
        <div className="work-with__inner container">
          <div className="work-with__microphone-control">
            <h2 className="title title_medium work-with__title">
              Control your&nbsp;microphone anywhere
            </h2>
            <p>Even during calls</p>
            <img
              src="https://mutify.app/images/FaceTimePopup-8b68d7ca18.jpg"
              // srcSet="images/FaceTimePopup@2x-11df12166f.jpg 2x"
              alt="FaceTime Popup"
            />
            <div className="work-with__logos-wrapper">
              <div
                 ref={appear__png.ref}
                className="work-with__logo work-with__logo_appear work-with__logo_floating"
              >
                <img
                  src="https://mutify.app/images/Appear-1ad98c17f8.png"
                  // srcSet="images/Appear@2x-524960b483.png 2x"
                  alt="Appear"
                />
                <span>Appear</span>
              </div>
              <div
             ref={fbMessenger__png.ref}
                className="work-with__logo work-with__logo_fb work-with__logo_floating"
              >
                <img
                  src="https://mutify.app/images/FB-1b46484926.png"
                  // srcSet="images/FB@2x-22351c148e.png 2x"
                  alt="FB Messenger"
                />
                <span>FB Messenger</span>
              </div>
              <div
             ref={gotomeeting__png.ref}
                className="work-with__logo work-with__logo_go-to-meetings work-with__logo_floating"
              >
                <img
                  src="https://mutify.app/images/GoToMeetings-6907108d0d.png"
                  // srcSet="images/GoToMeetings@2x-9a4bc25e56.png 2x"
                  alt="GoToMeetings"
                />
                <span>GoToMeetings</span>
              </div>
              <div
             ref={skype__png.ref}
                className="work-with__logo work-with__logo_skype work-with__logo_floating"
              >
                <img
                  src="https://mutify.app/images/Skype-64e68baaf2.png"
                  // srcSet="images/Skype@2x-184b075740.png 2x"
                  alt="Skype"
                />
                <span>Skype</span>
              </div>
              <div
             ref={slack__png.ref}
                className="work-with__logo work-with__logo_slack work-with__logo_floating"
              >
                <img
                  src="https://mutify.app/images/Slack-a34e725729.png"
                  // srcSet="images/Slack@2x-aa29d1f637.png 2x"
                  alt="Slack"
                />
                <span>Slack</span>
              </div>
              <div
             ref={zoom__png.ref}
                className="work-with__logo work-with__logo_zoom work-with__logo_floating"
              >
                <img
                  src="https://mutify.app/images/Zoom-0cb3267633.png"
                  // srcSet="images/Zoom@2x-5fea776a6d.png 2x"
                  alt="Zoom"
                />
                <span>Zoom</span>
              </div>
              <div
             ref={hangouts__png.ref}
                className="work-with__logo work-with__logo_hangouts work-with__logo_floating"
              >
                <img
                  src="https://mutify.app/images/Hangouts-de6270cae5.png"
                  // srcSet="images/Hangouts@2x-25426e4a32.png 2x"
                  alt="Hangouts"
                />
                <span>Hangouts</span>
              </div>
              <div
             ref={webex__png.ref}
                className="work-with__logo work-with__logo_webex work-with__logo_floating"
              >
                <img
                  src="https://mutify.app/images/Webex-0b269eb5af.png"
                  // srcSet="images/Webex@2x-d5b4bc2142.png 2x"
                  alt="Webex"
                />
                <span>Webex</span>
              </div>
              <div
             ref={viber__png.ref}
                className="work-with__logo work-with__logo_viber work-with__logo_floating"
              >
                <img
                  src="https://mutify.app/images/Viber-bcad9961af.png"
                  // srcSet="images/Viber@2x-f5bb2dfd9d.png 2x"
                  alt="Viber"
                />
                <span>Viber</span>
              </div>
              <div
             ref={telegram__png.ref}
                className="work-with__logo work-with__logo_telegram work-with__logo_floating"
              >
                <img
                  src="https://mutify.app/images/Telegram-d2ec968abe.png"
                  // srcSet="images/Telegram@2x-22661ce92e.png 2x"
                  alt="Telegram"
                />
                <span>Telegram</span>
              </div>
              <div
             ref={skypeBlur__png.ref}
                className="work-with__logo work-with__logo_skype work-with__logo_blurred"
              >
                <img
                  src="https://mutify.app/images/Skype-64e68baaf2.png"
                  // srcSet="images/Skype@2x-184b075740.png 2x"
                  alt="Skype"
                />
              </div>
              <div
             ref={viberBlur__png.ref}
                className="work-with__logo work-with__logo_viber work-with__logo_blurred"
              >
                <img
                  src="https://mutify.app/images/Viber-bcad9961af.png"
                  // srcSet="images/Viber@2x-f5bb2dfd9d.png 2x"
                  alt="Viber"
                />
              </div>
              <div
             ref={telegramBlur__png.ref}
                className="work-with__logo work-with__logo_telegram work-with__logo_blurred"
              >
                <img
                  src="https://mutify.app/images/Telegram-d2ec968abe.png"
                  // srcSet="images/Telegram@2x-22661ce92e.png 2x"
                  alt="Telegram"
                />
              </div>
              <div
             ref={slackBlur__png.ref}
                className="work-with__logo work-with__logo_slack work-with__logo_blurred"
              >
                <img
                  src="https://mutify.app/images/Slack-a34e725729.png"
                  // srcSet="images/Slack@2x-aa29d1f637.png 2x"
                  alt="Slack"
                />
              </div>
              <div
             ref={fbMessengerBlur__png.ref}
                className="work-with__logo work-with__logo_fb work-with__logo_blurred"
              >
                <img
                  src="https://mutify.app/images/FB-1b46484926.png"
                  // srcSet="images/FB@2x-22351c148e.png 2x"
                  alt="FB Messenger"
                />
              </div>
              <div
             ref={hangoutsBlur__png.ref}
                className="work-with__logo work-with__logo_hangouts work-with__logo_blurred"
              >
                <img
                  src="https://mutify.app/images/Hangouts-de6270cae5.png"
                  // srcSet="images/Hangouts@2x-25426e4a32.png 2x"
                  alt="Hangouts"
                />
              </div>
            </div>
          </div>
          <ScrollAnimation animateIn="fadeOut">
            <div className="work-with__macbook-wrapper">
              <img
                src="https://mutify.app/images/macbook-1-51fcc36e0a.png"
                srcSet="images/macbook-1@2x-7437a8b433.png 2x"
                alt="MacBook"
              />

              <motion.img
                animate={{ scale: [0, 1] }}
                src="https://mutify.app/images/magnifier-1878b93fb0.png"
                srcSet="images/magnifier@2x-31e24730ea.png 2x"
                alt="Mute button"
                className="animated bounceIn"
              />

              <div className="work-with__wave-wrapper">
                <img
                  src="https://mutify.app/images/wave-2-ca2e74569e.svg"
                  alt=""
                />
              </div>
            </div>
          </ScrollAnimation>
          <p>
            Use a shortcut or the touch bar on any&nbsp;Mac device
            to&nbsp;quickly mute your&nbsp;microphone
          </p>
          <div className="work-with__buttons-wrapper">
            <span
              className="button work-with__button download-button"
            >
              Download
            </span>
            <span
              className="button button_white button_bold work-with__button buy-button"
            >
              Buy: $4.99
            </span>
          </div>
        </div>
      </div>
 
    )
}
