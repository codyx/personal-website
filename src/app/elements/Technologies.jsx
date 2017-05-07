import React, { Component } from 'react';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import styled from 'styled-components';

const stack = [
  { name: 'node.js', iconName: 'nodejs' },
  { name: 'react.js', iconName: 'react' },
  { name: 'mongodb/mysql', iconName: 'database' },
  { name: 'go', iconName: 'gopher' },
  { name: 'c++', iconName: 'cpp' },
];

const StackWrapper = styled.div`
  display: flex;
  justifyContent: center;
  flexWrap: wrap;
`;

class Technologies extends Component {
  render() {
    return (
      <StackWrapper>
        {stack.map((tech, idx) =>
          <Chip
            key={idx}
            label={tech.name}
            avatar={<Avatar src={`dist/svg/${tech.iconName}.svg`} />}
          />
        )}
      </StackWrapper>
    );
  }
}

export default Technologies;
