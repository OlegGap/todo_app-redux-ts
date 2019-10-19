import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import styles from './AddCard.module.css';

const AddCard = () => {
  const getDate = () => {
    const currentDate = new Date();
    return `${currentDate.getFullYear()}-${
      currentDate.getMonth() < 10
        ? `0${currentDate.getMonth().toString()}`
        : currentDate.getMonth()
    }-${currentDate.getDate()}`;
  };

  const [deadline, setDeadline] = useState(false);
  const [mark, setMark] = useState(false);

  const getInputValue = (target, name) =>
    target.querySelector(`input[name="${name}"]`) &&
    target.querySelector(`input[name="${name}"]`).value;

  const handleAddCard = event => {
    event.preventDefault();
    const newCardContent = {
      title: getInputValue(event.target, 'title'),
      description: getInputValue(event.target, 'description'),
    };

    if (getInputValue(event.target, 'deadline'))
      newCardContent.deadline = getInputValue(event.target, 'deadline');

    if (getInputValue(event.target, 'mark'))
      newCardContent.mark = getInputValue(event.target, 'mark');
  };
  return (
    <Popup
      className={styles.addCardWrapper}
      trigger={<li className={styles.addNewCard}>&#43; ADD CARD</li>}
      modal
    >
      {close => (
        <div className={styles.modal}>
          <button type="button" className={styles.close} onClick={close}>
            &times;
          </button>
          <div className={styles.header}> Add new card </div>
          <div className={styles.content}>
            <form onSubmit={handleAddCard} className={styles.contentForm}>
              <div className={styles.contentFormTitle}>
                Title*: <input type="text" name="title" />
              </div>
              <div className={styles.contentFormDescription}>
                Description: <input type="text" name="description" />
              </div>
              <div className={styles.contentFormDeadline}>
                Deadline:
                <input
                  type="checkbox"
                  onChange={() => setDeadline(!deadline)}
                />
                {deadline && (
                  <input
                    type="date"
                    name="deadline"
                    defaultValue={getDate()}
                    min={getDate()}
                    max="2020-12-31"
                  />
                )}
              </div>
              <div className={styles.contentFormMark}>
                Mark:
                <input type="checkbox" onChange={() => setMark(!mark)} />
                {mark && (
                  <div>
                    <input type="radio" name="mark" value="email" />

                    <input type="radio" name="mark" value="phone" />

                    <input type="radio" name="mark" value="mail" />
                  </div>
                )}
              </div>
              <button type="submit" className={styles.button}>
                ADD CARD
              </button>
            </form>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default AddCard;
