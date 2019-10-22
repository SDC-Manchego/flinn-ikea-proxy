import React from 'react';
import styles from './styles.js';


const Zoom = ({toggleZoom, pics}) => (
  <div>
    <div style={styles.exit}>
    <button
  style={styles.xButton}
  onClick={() => toggleZoom()}
  >
    <i className="fas fa-times"></i>
  </button>
    </div>
    <div style={styles.zoomList}>
      {pics.map((photo, i) =>
        <img
        style={styles.zoomImage}
        src={photo.image_url}
        key={i}
        />
        )}
    </div>
  </div>
)

export default Zoom;