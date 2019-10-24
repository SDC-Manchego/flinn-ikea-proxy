/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/button-has-type */
/* eslint-disable import/extensions */
import React from 'react';
import styles from './styles.js';

const Zoom = ({ toggleZoom, pics }) => (
  <div style={styles.zoomDiv}>
    <div style={styles.exit}>
      <button style={styles.xButton} onClick={() => toggleZoom()}>
        <i className="fas fa-times"></i>
      </button>
    </div>
    <div style={styles.zoomList}>
      {pics.map((photo, i) => (
        <img style={styles.zoomImage} src={photo.image_url} key={i} />
      ))}
    </div>
  </div>
);

export default Zoom;
