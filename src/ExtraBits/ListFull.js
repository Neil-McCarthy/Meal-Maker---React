import React from "react";

const ListFull = (props) => {
    let listContents = [];

    for (let index = 0;index < props.listOfOptions.length;index++) {
        listContents.push(<li key={index} onClick={() => props.contentChanger(props.listOfOptions[index])}>{props.listOfOptions[index]}</li>);
    }

    return <ul>{listContents}</ul>;
}

export default ListFull;