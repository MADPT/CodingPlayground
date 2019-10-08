import React from 'react';
import BtnReverse from './btn_reverse';

class TableHeader extends React.Component {
    render() {
        let {title, filter, currentCat} = this.props;
        return (
            <th>
                <span onClick={this.props.handleClick.bind(this, filter)}>{title}</span>
                {filter === currentCat &&
                    <BtnReverse handleClick={this.props.handleReverse}></BtnReverse>
                }
            </th>
        );
    }
}

export default TableHeader;
