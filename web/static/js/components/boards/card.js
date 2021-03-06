import React, {PropTypes} from 'react';
import { routeActions }   from 'react-router-redux';

export default class BoardCard extends React.Component {
  _handleClick() {
    this.props.dispatch(routeActions.push(`/boards/${this.props.id}`));
  }

  render() {
    return (
      <div id={this.props.id} className="board" onClick={::this._handleClick}>
        <div className="inner">
          <h4>{this.props.name}</h4>
        </div>
      </div>
    );
  }
}

BoardCard.propTypes = {
};
