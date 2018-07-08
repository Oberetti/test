import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

const Repair = styled.div`
color: #464646;
font-family: Roboto;
font-size: 18px;
font-weight: 300;
line-height: 22px;
`

class Menu extends React.Component{
	render(){
		return(
			<Row>
			<Col lg={3}>
			<Repair>Ремонт айфонов в сервисном
центре и на выезде
</Repair>
			</Col>
			<Col lg={3} lgOffset={1}>
			</Col>
			<Col lg={3}>
			</Col>
			<Col lg={2}>
			</Col>


			</Row>
			)
	}
}

export default Menu