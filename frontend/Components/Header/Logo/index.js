import React, { Component } from 'react';
import styles from './styles';

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <div className={styles.logo}>
            <img src="https://se-infra-imageserver2.azureedge.net/clink/images/fd5eaa24-8f74-4bec-bba7-5b6b9a4ebbc2666cbba4-8a2b-440f-a02e-be172e446140.jpeg?preset=med-sq" width = "52" height ="52" alt="" class="brand"></img>
      </div>
      <div className={styles.logoTitle}>IUSM Forum</div>
    </div>
  );
};

export default Logo;
