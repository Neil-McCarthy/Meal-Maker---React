import React from "react";
import Section from "./Main/Section";
let heading,sectionPosition;
let soupSections = ['soup 1','soup 2'];
let spaghettiSections = ['spag 1','spag 2','spag 3','spag 4','spag 5'];
let cakeSections = ['cake 1','cake 2','cake 3','cake 4'];
let drinksSections = ['pint 1'];
let breadSections = ['bread 1','bread 2','bread 3'];
let contentChosen;

const ContentStructure = (props) => {
    const totalSections = [];

    if (props.content === 'Starter') {
        heading = 'Starter';
        contentChosen = soupSections;
    } else if (props.content === 'Main') {
        heading = 'Main';
        contentChosen = spaghettiSections;
    } else if (props.content === 'Dessert') {
        heading = 'Dessert';
        contentChosen = cakeSections;
    } else if (props.content === 'Drinks') {
        heading = 'Drinks';
        contentChosen = drinksSections;
    } else if (props.content === 'Baking') {
        heading = 'Baking';
        contentChosen = breadSections;
    }
    for (let index=0;index<contentChosen.length;index++) {
        if (index%2 === 0) {
            sectionPosition = 'left';
        } else {
            sectionPosition = 'right';
        }
        totalSections.push(<Section heading={heading} paragraph={contentChosen[index]} key={index} sectionPosition={sectionPosition} />)
    }
    return(
        <React.Fragment>
            <section>
                <h1>
                    Opening
                </h1>
                <p>
                    description
                </p>
                <table>
                    <tr>
                        <th>
                            Ingredients
                        </th>
                        <th>
                            Measurements
                        </th>
                    </tr>
                    <tr>
                        <td>
                            food
                        </td>
                        <td>
                            amount
                        </td>
                    </tr>
                    <tr>
                        <td>
                            food
                        </td>
                        <td>
                            amount
                        </td>
                    </tr>
                    <tr>
                        <td>
                            food
                        </td>
                        <td>
                            amount
                        </td>
                    </tr>
                </table>
            </section>
            {totalSections}
        </React.Fragment>
    );
}

export default ContentStructure;