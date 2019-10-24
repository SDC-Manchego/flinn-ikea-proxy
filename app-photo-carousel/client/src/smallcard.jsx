/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/extensions */
import React from 'react';
import styles from './styles.js';

const SmallCard = (props) => (
  <img
    onClick={() => {
      props.changeMainPic(props.pic);
      props.toggle(props.pic.index);
    }}
    style={styles.smolCard}
    src={props.pic.image_url}
    tabIndex="0"
  />
);

export default SmallCard;
