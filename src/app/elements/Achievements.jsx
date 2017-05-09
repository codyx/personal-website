// @flow

import React from 'react';
import StarIcon from 'material-ui-icons/Star';
import ListRenderer from './ListRenderer';
import type { ListRendererItem } from '../types/ListRendererItem';

const ACHIEVEMENTS: Array<ListRendererItem> = [
  { name: 'Project Week 2015 by La Poste - 1st place', desc: 'Designed an innovative mobile application', icon: <StarIcon /> },
  { name: 'Trade - 7th on 160', desc: 'Epitech trading programs contest', icon: <StarIcon /> },
];

const Achievements = () => <ListRenderer items={ACHIEVEMENTS} />;

export default Achievements;
