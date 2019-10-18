import React from 'react';
import styled from './Header.module.css';

export interface Header {
  profile: string;
}

const Header = ({ profile }: Header) => {
  console.log(profile);

  return (
    <div className={styled.headerContainer}>
      <div className={styled.headerWrapper}>
        <div>TODO</div>
        <div>{}</div>
      </div>
    </div>
  );
};

export default Header;
