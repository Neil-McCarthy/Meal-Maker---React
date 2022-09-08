import React, { useRef } from "react";

const AddSection = (props) => {
    const selectValue = useRef();
    let optionsList = [];
    for (let index=0;index < 10;index++) {
        optionsList.push(<option value={index} key={index}>{index}</option>);
    }
    return (
        <React.Fragment>
            <label>
                Add Section
            </label>
            <select ref={selectValue} onChange={() => props.sectionAdder('main', selectValue.current.value)}>
                {optionsList}
            </select>
        </React.Fragment>
    );
}

export default AddSection;