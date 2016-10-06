import React, { Component, PropTypes } from 'react';
import { ItemTypes } from '../constants';
import { DragSource } from 'react-dnd';
import '../css/components/Knight.css';
import wN from '../img/chesspieces/wikipedia/wN.png';

const knightSource = {
  beginDrag(props) {
    return {};
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class Knight extends Component {
  render() {
    const { connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <div style={{
        opacity: isDragging ? 0.5 : 1
      }}>
        <img src={wN} alt="wN"/>
      </div>
    );
  }
}

Knight.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

export default DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight);
