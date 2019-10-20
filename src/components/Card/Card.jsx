import React from 'react';
import styles from './Card.module.css';
import cutString from '../../utils/cutString.js';

const ListContainer = ({ cardData }) => (
  <li className={styles.cardContainer}>
    <div className={styles.cardContent}>
      <h4 className={styles.cardTitle}>{cutString(cardData.title, 50)}</h4>
      <div className={styles.shortInfo}>
        <div className={styles.subtasks} />
        <div className={styles.deadline}>
          {cardData.deadline ? `DL:${cardData.deadline}` : null}
        </div>
      </div>
    </div>
    <div
      className={styles.cardMark}
      style={{ backgroundColor: `${cardData.mark}` }}
    />
  </li>
);

export default ListContainer;
