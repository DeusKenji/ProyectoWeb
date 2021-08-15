import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './data/SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import Header from "./Header";
import './css/Header.css';

const Nav = styled.div`
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = (props) => {

  const sidebar = props.sidebar
  const {showSidebar} = props
  const modo = props.modoDia
  const {setLocalMode} = props
  const {validar} = props

  return (
    <div className="d-flex">
      <IconContext.Provider value={modo? { color: '#000000' }:{ color: '#ffffff'}}>
        <Nav className={modo ? 'daybg':'nigthbg'}>
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
        </Nav>
        <Header modo={modo} setLocalMode={setLocalMode}/>
        <SidebarNav className={modo ? 'daybg dayborder':'nigthborder nigthbg'} sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} modo={modo}/>;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </div>
  );
};

export default Sidebar;
