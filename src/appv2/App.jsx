// @flow

import React from 'react';
import Button from '@material-ui/core/Button';

type Props = {};

export default class App extends React.Component<Props> {
    render() {
        return (
					<Button variant="contained" color="primary">
            Hi!
          </Button>
        );
    }
}
