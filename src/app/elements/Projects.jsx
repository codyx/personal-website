// @flow

import React from 'react';
import WorkIcon from 'material-ui-icons/Work';
import SchoolIcon from 'material-ui-icons/School';
import StarIcon from 'material-ui-icons/StarBorder';
import ListRenderer from './ListRenderer';
import type { ListRendererItem } from '../types/ListRendererItem';

const PROJECTS: Array<ListRendererItem> = [
  { name: 'Geekeener', desc: 'Professional social media and job board', icon: <WorkIcon /> },
  { name: 'Smart Games', desc: 'Fun and easy to play TV games', icon: <WorkIcon /> },
  { name: 'CSGO-Deals', desc: 'Own startup project: giveaways platform and innovative WebTV', icon: <StarIcon /> },
  { name: 'ZX34', desc: 'Reverse engineering on a famous game. Several exploits found and exploited', icon: <StarIcon /> },
  { name: '42sh', desc: 'Shell including inhibitors, globbings, background, job control, variables and dynamic binding', icon: <SchoolIcon /> },
  { name: 'IRC', desc: 'Own IRC client and server implementation, RFC compliant', icon: <SchoolIcon /> },
  { name: 'Snake', desc: 'Snake-like game featuring dynamic library loading in C++', icon: <SchoolIcon /> },
];

const Projects = () => <ListRenderer items={PROJECTS} />;

export default Projects;
