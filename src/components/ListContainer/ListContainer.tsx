import React from 'react';
import styled from './ListContainer.module.css';

const ListContainer = () => (
  <div className={styled.ListContainer}>
    <div className={styled.addNewListContainer}>
      <div className={styled.addNewList}>&#43;</div>
    </div>
  </div>
);

export default ListContainer;
