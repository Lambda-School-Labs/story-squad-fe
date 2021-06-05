import React from 'react';
import { Row, Col } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const ButtonDown = props => {
  return (
    <div>
      <Row className="rectangle125-box">
        <Col className="your-mission rectangle125">
          <h1>Your Mission</h1>
          <Row className="rectangle12B5 read-button-font">
            <Col className="gamemodebtncolclass">
              {
                // Read button
              }
              <p className="read-button-font">Read</p>
            </Col>
            <Col className="gamemodebtncolclass">
              {
                // Write Button
              }
              <p className="read-button-font">Write</p>
            </Col>
            <Col className="gamemodebtncolclass">
              {
                //Draw button
              }
              <p className="read-button-font">Draw</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
const singled = e => {
  props.singled(e);
};
const ButtonBar = ({ read = false, write = false, draw = false, ...props }) => {
  // Render read write and draw buttons
  return (
    <>
      <ButtonDown read={true}>
        <button
          style={
            props.child.gamemode.read || read
              ? { opacity: '40% ' }
              : { opacity: '100% ' }
          }
          onClick={e => {
            singled(e);
          }}
          id="mission-read-button"
        >
          1
        </button>
        <button
          style={
            props.child.gamemode.write || write
              ? { opacity: '40% ' }
              : { opacity: '100% ' }
          }
          onClick={e => {
            singled(e);
          }}
          id="mission-write-button"
        >
          2
        </button>
        <button
          style={
            props.child.gamemode.draw || draw
              ? { opacity: '40% ' }
              : { opacity: '100% ' }
          }
          onClick={e => {
            singled(e);
          }}
          id="mission-draw-button"
        >
          3
        </button>
      </ButtonDown>
    </>
  );
};
export default connect(
  state => ({
    child: state.child,
  }),
  {}
)(ButtonBar);
ButtonBar.propTypes = {
  child: PropTypes.object,
};