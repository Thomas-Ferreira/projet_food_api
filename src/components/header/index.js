import React from 'react';
import SideBar from '../sidebar/sidebar'
import styled from 'styled-components'

const header = () => {
  return (
    <DivHeader>
      <SideBar pageWrapId={'page-wrap'} outerContainerId={'App'} />
    </DivHeader>
  );
};

export default header;

const DivHeader = styled.div`
margin-top: 0;
`