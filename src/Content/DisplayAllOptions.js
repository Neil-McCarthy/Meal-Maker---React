import React from "react";

// let sectionPosition;
let catagoryInfo;
const displayAllOptions = (props) => {
    if (props.mealInformation.length > 0) {
        if (props.catagory === 0) {
            catagoryInfo = props.mealInformation.mains;
        }
        for (let specificMeal = 0;specificMeal < catagoryInfo.length;specificMeal++) {
            console.timeLog(catagoryInfo[specificMeal]);
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
            <p>ello</p>
        </React.Fragment>
    )
}

export default displayAllOptions;