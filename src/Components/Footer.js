import React from 'react';

export const Footer = () => {
    return (
        <div>
        <div className="footer">
        <div className="footer__inner container">
          <div className="footer__feedback">
            <h2 className="title title_medium footer__title">
              Have an Idea or Feedback?
            </h2>
            <span >help@mutify.app</span>
            <video
                src="https://mutify.app/videos/wave-white@1x.mp4"
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
          </div>
          <nav className="main-nav footer__main-nav">
            <div className="main-nav__inner">
              <div className="main-nav__logo">
                <img
                  src='https://mutify.app/images/mutify-logo@2x-43fd3a1fd6.png'
                  // srcSet="images/mutify-logo@2x-43fd3a1fd6.png 2x"
                  alt="Mutify"
                />
                <span>Mutify</span>
              </div>
            </div>
          </nav>
          <div className="footer__copyright">
            Made by&nbsp;
            <span >Pixel Point&nbsp;</span>– Web, Mobile, AI, Blockchain
            development company. © 2019 Mutify. <br/><p style={{textAlign:'center'}}>All right reserved</p>
          </div>
        </div>
      </div>
      <nav className="mobile-nav mobile-nav_hidden">
        <div className="mobile-nav__inner container">
          <div className="mobile-nav__logo">
            <img
              src="images/mutify-logo-6ab64e5ad7.png"
              // srcSet="images/mutify-logo@2x-43fd3a1fd6.png 2x"
              alt="Mutify"
            />
            <span>Mutify</span>
          </div>
          <ul className="mobile-nav__menu">
            <li>
              <span >Work With</span>
            </li>
            <li>
              <span >Noise level</span>
            </li>
            <li>
              <span >Switch Device</span>
            </li>
            <li>
              <span >Feedback</span>
            </li>
            <li>
              <span >Privacy Policy</span>
            </li>
          </ul>
          <button className="mobile-nav__close"></button>
        </div>
      </nav>
      </div>
    )
}
