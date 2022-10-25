import React from "react";

let tableContentOutput = [];
const TableTwoColumn = (props) => {

    tableContentOutput = [];
    for (let tableData = 0;tableData < 4;tableData++) {
        tableContentOutput.push(<tr><td>Hello</td><td>goodbye</td></tr>)
    }
    return (
        <table>
            <tr>
                <th>
                    {props.heading}
                </th>
                <th>
                    Quantities
                </th>
            </tr>
            {tableContentOutput}
        </table>
    )
}

export default TableTwoColumn;