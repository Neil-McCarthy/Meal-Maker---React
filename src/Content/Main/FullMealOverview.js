import React from "react";


const FullMealOverview = (props) => {

    let seasoningContent = [];
    for (let seasoningData = 0;seasoningData < props.mealInfo.seasoning.length;seasoningData++) {
        //console.log();
        seasoningContent.push(<tr><td>{props.mealInfo.seasoning[seasoningData]}</td></tr>);
    }
    let ingredientsContent = [];
    for (let ingredientsData = 0;ingredientsData < Object.keys(props.mealInfo.ingredients).length;ingredientsData++) {
        console.log(Object.values(props.mealInfo.ingredients)[ingredientsData]);
        ingredientsContent.push(<tr><td>{Object.values(props.mealInfo.ingredients)[ingredientsData].name}</td><td>{Object.values(props.mealInfo.ingredients)[ingredientsData].amount}</td></tr>);
    }
    return (
        <section className="overview">
            <h1>
                {props.mealInfo.title}
            </h1>
            <p>
                {props.mealInfo.briefDescription}
            </p>
            <table>
                <tr>
                    <th>
                        Ingredients
                    </th>
                    <th>
                        Amounts
                    </th>
                </tr>
                {ingredientsContent}
            </table>
            <table>
                <tr>
                    <th>
                        Seasonings
                    </th>
                </tr>
                {seasoningContent}
            </table>
        </section>
    )
}

export default FullMealOverview;