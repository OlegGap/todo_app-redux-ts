import React from 'react';
import styled from './Header.module.css';

export interface Header {
  name: string;
}

const Header = ({ name }: Header) => {
  return (
    <div className={styled.headerContainer}>
      <div className={styled.headerWrapper}>
        <div>TODO</div>
        <div>{name}</div>
      </div>
    </div>
  );
};

export default Header;
