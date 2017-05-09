// @flow

import React  from 'react';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import styled from 'styled-components';

const stack = [
  { name: 'node.js', iconName: 'nodejs' },
  { name: 'react.js', iconName: 'react' },
  { name: 'mongodb/mysql', iconName: 'database' },
  { name: 'python', iconName: 'python' },
  { name: 'c++', iconName: 'cpp' },
  { name: 'go', iconName: 'gopher' },
];

const StackWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Technologies = () => (
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

export default Technologies;
