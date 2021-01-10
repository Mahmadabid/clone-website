import React from 'react';

export const Body3 = () => {
    return (
        <div className="noise-level">
            <div className="noise-level__inner container">
                <div className="noise-level__block">
                    <div className="noise-level__content">
                        <h2 className="title title_medium title_white noise-level__title">
                            Easily control the volume level
                        </h2>
                        <p>
                            Use a shortcut to&nbsp;quickly access a&nbsp;window for
                            your&nbsp;microphone volume&nbsp;controls
                        </p>
                        <span className="button button_white" >
                            Try It Free
                        </span>
                    </div>
                    <div className="noise-level__right-block">
                        <img
                            src="https://mutify.app/images/wave-c1b84a9196.png"
                            srcSet="images/wave@2x-7ab45b32d6.png 2x"
                            alt=""
                        />
                        <div className="noise-level__circles-wrapper">
                            <div className="noise-level__circle noise-level__circle_active"></div>
                            <div className="noise-level__circle noise-level__circle_active"></div>
                            <div className="noise-level__circle"></div>
                            <div className="noise-level__circle"></div>
                            <div className="noise-level__circle"></div>
                            <div className="noise-level__circle"></div>
                            <div className="noise-level__circle"></div>
                            <div className="noise-level__circle"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
