import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './css/SubMenu.css';

const SidebarLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    cursor: pointer;
    text-decoration: none;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    text-decoration: none;
    cursor: pointer;
  }
`;

const SubMenu = (props) => {

  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);
  const modo = props.modo
      

  

  return (
    <>
      <SidebarLink className={modo ? 'daytxt':'nigthtxt'} to={props.item.path} onClick={props.item.subNav && showSubnav}>
        <div>
          {props.item.icon}
          <SidebarLabel>{props.item.title}</SidebarLabel>
        </div>
        <div>
          {props.item.subNav && subnav
            ? props.item.iconOpened
            : props.item.subNav
            ? props.item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        props.item.subNav.map((item, index) => {
          return (
            <DropdownLink className={modo ? 'daytxt':'nigthtxt'} to={item.path} key={index}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;
