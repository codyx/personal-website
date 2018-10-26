// @flow

import React from 'react';
import { default as MUIButton } from '@material-ui/core/Button';
import styled, { css } from 'styled-components';

type Props = {};

const Button = styled(MUIButton)`
	background: transparent;
	border-radius: 3px;
	border: 2px solid palevioletred;
	color: palevioletred;
	margin: 0 1em;
	padding: 0.25em 1em;

	${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`;

export default class App extends React.Component<Props> {
    render() {
        return (
					<>
						<Button variant="contained" color="primary">Hey</Button>
					</>
        );
    }
}
