import React from 'react';
import styles from './styles.js';


const Card = ({pic, toggleZoom}) => (
      <img
      style={styles.mainCard}
      src={pic.image_url}
      onClick={() => toggleZoom()}
      />
)

export default Card;