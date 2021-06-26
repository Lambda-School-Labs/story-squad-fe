import React from 'react';
import { connect } from 'react-redux';

const Weekly = (props) => {

    return (
        <>
        <div className="weekly-sub-container">
            <span className="label">
                <h3 className="h3">Week {props.sprint}</h3>
                <h3 className="h3"> View Prompt </h3>
            </span>
            <span className="submissions">
                <div className="sub-container">
                    <img className="gallery-submission" src={props.drawing} alt="drawing submision" />
                </div>
                <div className="sub-container">
                    <img className="gallery-submission" src={props.writing} alt="writing submision" />
                </div>
            </span>
        </div>
        </>
    )
};

export default connect(state => ({
    child: state.child,
  }))(Weekly);