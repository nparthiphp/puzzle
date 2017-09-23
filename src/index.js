import React from 'react';
import { render } from 'react-dom';

class Puzzle extends React.Component {
    constructor(props, context) {
        super(props);
        this.state = {
            rowCount: 10,
            columnCount: 10,
            cells: []
        };
    }

    getRawData() {
        return ["Apple", "Mango", "Bananna", "Orange", "Apple", "Mango", "Bananna", "Orange", "PineApple", "Watermilon"];
    }

    createRow(pos) {
        let rows = [];
        for (let i=0; i < this.state.rowCount; i++) {
            let keyVal = pos + i; 
            let result = 'X';
            rows.push(
                <div className="col" key={keyVal.toString()}>
                    <button className="btnInfo" value={keyVal}> 
                        {result}
                    </button>
                </div>
            );
        }
        return rows;
    }

    createCell() {
        let cells = [];
        for (let i=0; i < this.state.columnCount; i++) {
            cells.push(
                <div className="row" key={i.toString()}>
                    {this.createRow(i)}
                </div>
            );
        }
        return cells;
    }

    render() {
        return (
            <div className="container"> 
                {this.createCell()}
            </div>
        );
    }
}

render(<Puzzle/>, document.getElementById('app'));

export default Puzzle;