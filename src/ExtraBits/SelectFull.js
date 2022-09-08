import React from "react";

const SelectFull = (props) => {
    let selectContents = [];

    for (let index = 0;index < props.listOfOptions.length;index++) {
        selectContents.push(<option key={index}>{props.listOfOptions[index]}</option>);
    }

    return <select>{selectContents}</select>;
}

export default SelectFull;