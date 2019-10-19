import React from 'react';
import styles from './Card.module.css';
import cutString from '../../utils/cutString.js';

const ListContainer = ({ cardData }) => (
  <li className={styles.cardContainer}>
    <div className={styles.cardContent}>
      <h4 className={styles.cardTitle}>{cutString(cardData.title, 50)}</h4>
      <div className={styles.shortInfo}>
        <div className={styles.subtasks}>3/4</div>
        <div className={styles.deadline}>DL: 10/11/19</div>
      </div>
    </div>
    <div
      className={styles.cardMark}
      style={{ backgroundColor: `#${cardData.mark}` }}
    />
  </li>
);

export default ListContainer;
