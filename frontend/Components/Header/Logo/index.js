import React, { Component } from 'react';
import styles from './styles';

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <div className={styles.logo}>
        <svg viewBox="0 0 100 100"xmlns="http://www.w3.org/2000/svg">
          <g id="Group" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <path d="M51.1388842,81.5721454 L69.5667388,100 L92.0066458,100 C96.4114635,100 100,96.4212534 100,92.0066458 L100,7.99335421 C100,3.58853654 96.4212534,0 92.0066458,0 L7.99335421,0 C3.58853654,0 0,3.57874658 0,7.99335421 L0,92.0066458 C0,96.4114635 3.57874658,100 7.99335421,100 L10.5882353,100 L10.5882353,44.7058824 C10.7474244,24.5366987 27.1464843,8.23529412 47.3529412,8.23529412 C67.6575276,8.23529412 84.1176471,24.6954136 84.1176471,45 C84.1176471,64.0263195 69.6647717,79.676989 51.1388842,81.5721454 Z M24.2232146,73.5788183 L24.1176471,73.6843859 L50.4332612,100 L24.1176471,100 L24.1176471,73.4929507 C24.1527823,73.521637 24.1879715,73.5502596 24.2232146,73.5788183 Z" id="Combined-Shape" fill="#F1C40F"></path>
            <circle id="Oval" fill="#F1C40F" cx="47.6470588" cy="45.2941176" r="23.5294118"></circle>
          </g>
        </svg>
      </div>
      <div className={styles.logoTitle}>ReForum</div>
    </div>
  );
};

export default Logo;
