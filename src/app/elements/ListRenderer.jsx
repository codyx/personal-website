// @flow

import React, { Component } from 'react';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';
import type { ListRendererItem } from '../types/ListRendererItem';

class ListRenderer extends Component {
  props: {
    itemsToShowFallback: number,
    items: Array<Object>,
  }

  static defaultProps = {
    itemsToShowFallback: 4,
    items: [],
  };

  state = {
    shownElementsNb: this.props.itemsToShowFallback,
    items: this.props.items,
  }

  onShowMore = () => {
    this.setState({
      shownElementsNb: this.state.shownElementsNb === this.props.itemsToShowFallback ?
      this.props.items.length : this.props.itemsToShowFallback,
    });
  }

  render() {
    const { shownElementsNb, items } = this.state;
    const itemsToShow = items.slice(0, shownElementsNb);
    const btnText = itemsToShow.length === this.props.itemsToShowFallback ? 'more' : 'less';
    return (
      <List>
        {itemsToShow.map((project: ListRendererItem, idx) => (
          <ListItem key={idx}>
            <Avatar>
              {project.icon}
            </Avatar>
            <ListItemText primary={project.name} secondary={project.desc}/>
          </ListItem>
        ))}
        {
          itemsToShow.length >= this.props.itemsToShowFallback ?
           <Button primary accent onClick={this.onShowMore}>Show {btnText}</Button>
           : ''
        }
      </List>
    );
  }
}

export default ListRenderer;
