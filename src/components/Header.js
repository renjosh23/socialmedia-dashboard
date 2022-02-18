import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const StyledHeader = styled.div`
  .barHeader {
    position: floating;
    width: 100%;
    display:flex;
    justify-content: right;
    padding-left: 20px;
    padding-right: 20px;
    align-items: center;
    height: 70px;
    box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.1);
    background-color: #3d54ba;

    a {
      color: #dfe5f0;
      text-decoration: underline overline;
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div className="barHeader">
        <div className="logo">
          <Link to="/">
            <h1>The Social Media</h1>
          </Link>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
