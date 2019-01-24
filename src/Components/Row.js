import React, { Component } from "react";
import Cell from './Cell'

class Row extends Component {

    render() {
        const { row, play } = this.props
        return (
            <tr>
                {row.map((cell, i) => <Cell key={i} value={cell} columnIndex={i} play={play} />)}
            </tr>
        );
    }
}
export default Row
