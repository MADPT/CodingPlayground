import React from 'react';

class BtnReverse extends React.Component {
    render() {
        return (
            <button className="reverse-btn" onClick={this.props.handleClick.bind(this, 'reverse')}>
                <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="reverse-icon"><path fill="currentColor" d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"></path></svg>
            </button>
        );
    }
}

export default BtnReverse;