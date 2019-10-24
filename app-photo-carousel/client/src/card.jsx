/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React from 'react';
import styles from './styles.js';

const Card = ({ pic, toggleZoom }) => (
  <img
    style={styles.mainCard}
    src={pic.image_url}
    onClick={() => toggleZoom()}
  />
);

export default Card;
