import React from "react";
import TableTwoColumn from "../../ExtraBits/TableTwoColumn";

const FullMealOverview = (props) => {
    return (
        <section>
            <h1>
                {props.heading}
            </h1>
            <p>
                {props.description}
            </p>
            <TableTwoColumn heading={"Ingredients"} />
            <TableTwoColumn heading={"Spices"} />
        </section>
    )
}

export default FullMealOverview;