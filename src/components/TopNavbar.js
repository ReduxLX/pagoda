import React from "react";
import styled from "styled-components";
import PagodaLogo from "../res/images/pagoda_logo.png";

const TopNavbar = () => {
  return (
    <TopNavbarWrapper>
      <LogoWrapper>
        <img src={PagodaLogo} alt="logo" width="55px" height="55px" />
        <h1>Pagoda</h1>
      </LogoWrapper>
    </TopNavbarWrapper>
  );
};

const TopNavbarWrapper = styled.div`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  display: flex;
  justify-content: center;
  padding: 1rem;
  flex-direction: column;
  max-width: 1200px;
  width: 100%;
  z-index: 100;
  transition: top 0.6s;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  h1 {
    font-size: 36px;
    font-weight: 300;
    margin-left: 20px;
  }
`;

export default TopNavbar;
