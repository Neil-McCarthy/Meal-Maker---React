import React, { useState } from "react";

// let sectionPosition;
const DisplayAllOptions = (props) => {
    const [output, setOutput] = useState("ello guv");
    if (props.mealInformation.length > 0) {
        for (let specificMeal = 0;specificMeal < props.mealInformation.length;specificMeal++) {
            if (specificMeal === 0) {
                let placeHolder = props.mealInformation[2].title;
                console.log(placeHolder);
                if (output === "ello guv")
                setOutput(placeHolder);
            }
        }
    }
    // let totalSections = [];
    // for (let index=0;index<10;index++) {
    //     if (index%2 === 0) {
    //         sectionPosition = 'left';
    //     } else {
    //         sectionPosition = 'right';
    //     }
    //     totalSections.push(<Section heading={heading} paragraph={contentChosen[index]} key={index} sectionPosition={sectionPosition} />)
    // }

    return (
        <React.Fragment>
            <p>{output}</p>
        </React.Fragment>
    )
}

export default DisplayAllOptions;