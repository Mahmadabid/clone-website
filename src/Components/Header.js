import React from 'react';

export const Header = () => {
  return (
    <div className='header'>
      <div className="header__inner container">
        <nav className="main-nav">
          <div className="main-nav__inner">
            <div className="main-nav__logo">
              <img
                src="https://mutify.app/images/mutify-logo@2x-43fd3a1fd6.png"
                // srcset="images/mutify-logo@2x-43fd3a1fd6.png 2x"
                alt="Mutify"
              />
              <span>Mutify</span>
            </div>
            <ul className="main-nav__menu">
              <li>
                <span >Works With</span>
              </li>
              <li>
                <span >Noise Level</span>
              </li>
              <li>
                <span >Switch Device</span>
              </li>
              <li>
                <span >Feedback</span>
              </li>
            </ul>
            <span
              className="button button_small main-nav__button download-button"
            >
              Download
                </span>
            <span className="main-nav__burger"></span>
          </div>
        </nav>
      </div>
    </div>
  )
}
