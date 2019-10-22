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
      tabIndex='0'/>
)

export default SmallCard;