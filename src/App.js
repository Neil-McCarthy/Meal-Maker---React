import React, {useState} from 'react';
import ContentStructure from './Content/ContentStructure';
import DisplayAllOptions from './Content/DisplayAllOptions';
import PairingList from './Content/PairingList';
import ListFull from './ExtraBits/ListFull';
import './App.css';

function App() {
  const [selectedContent, contentChanger] = useState('Starter');
  const [mealContent, setMealContent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [catagorySelected, setCatagorySelected] = useState(0);
  const [mealSelected, setMealSelected] = useState(0);

  let mealsInfo;
  
  async function fetchMealInfo(mealNumber) {
    setIsLoading(true);
    const response = await fetch('https://react-http-5bad7-default-rtdb.europe-west1.firebasedatabase.app/meals.json');
    const data = await response.json();
    //console.log(data);
    const transformedMealInfo = data.map(mealData => {
      console.log(mealData);
      mealsInfo = mealData.mains;
      console.log(mealsInfo);
      return {
        title: mealsInfo[mealNumber].title,
        ingrediants: mealsInfo[mealNumber].ingrediants,
        images: mealsInfo[mealNumber].images,
        steps: mealsInfo[mealNumber].Steps,
        seasoningMeat: mealsInfo[mealNumber].SeasoningTheMeat,
        seasoningSauce: mealsInfo[mealNumber].Seasoning_the_Sauce
      }
    })
    setMealContent(mealsInfo);
    setIsLoading(false);
    setCatagorySelected(mealNumber)
  }

  let displayedContent = <DisplayAllOptions catagory={catagorySelected} mealInformation={mealContent} />
  return (
    <React.Fragment>
        <header className="App-header">
          <h1>
            Meal Maker
          </h1>
        </header>
        <nav>
          <ListFull listOfOptions={['Starter','Main','Dessert','Drinks','Baking']} contentChanger={contentChanger} />
        </nav>
        <main>
          {/* <ContentStructure content={selectedContent} /> */}
          {displayedContent}
          <button onClick={() => fetchMealInfo(0)}>Get info</button>
          <button onClick={() => fetchMealInfo(1)}>Get info</button>
          <button onClick={() => fetchMealInfo(2)}>Get info</button>
          {!isLoading && mealContent.length > 0 && console.log(mealContent)}
          {!isLoading && mealContent.length === 0 && console.log('no info')}
          {isLoading && console.log('loading')}
        </main>
        <aside>
          <PairingList />
        </aside>
        <footer>
          <small>
            <p>
              waa waa waa footer
            </p>
          </small>
        </footer>
    </React.Fragment>
  );
}

export default App;
