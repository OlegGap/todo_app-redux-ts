import React from 'react';
import styled from './Header.module.css';

export interface Header {
  name: string;
}

const Header = ({ name }: Header) => {
  return (
    <div className={styled.headerContainer}>
      <div className={styled.headerWrapper}>
        <div className={styled.headerLogo}>TODO</div>
        <div className={styled.headerName}>{name}</div>
      </div>
    </div>
  );
};

export default Header;
