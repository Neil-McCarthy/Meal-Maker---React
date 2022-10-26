import React, {useState, useCallback, useEffect} from 'react';
import ContentStructure from './Content/ContentStructure';
import DisplayAllOptions from './Content/Main/DisplayAllOptions';
import PairingList from './Content/PairingList';
import ListFull from './ExtraBits/ListFull';
import './App.css';
import FullMeal from './Content/Main/FullMeal';

let displayedContent;

function App() {
  const [selectedContent, contentChanger] = useState('Starter');
  const [mealContent, setMealContent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [catagorySelected, setCatagorySelected] = useState(0);
  const [mealSelected, setMealSelected] = useState(0);
  const [contentToShow, setContentToShow] = useState("display all options");

  let mealsInfo;
  let mealsDictionary;

  const fetchMealInfoOnLoad = useCallback(async() => {
    setIsLoading(true);
    try {
      const response = await fetch('https://react-http-5bad7-default-rtdb.europe-west1.firebasedatabase.app/meals.json');
      if (!response.ok) {
        setError("Something went wrong");
      }
      const data = await response.json();
      mealsDictionary = data[0];
      mealsInfo = mealsDictionary.starters;
      setMealContent(mealsInfo);
      setIsLoading(false);
      setCatagorySelected(0);
    } catch (error) {
      setError("Something went wrong");
    }

  });

  useEffect(() => {
    fetchMealInfoOnLoad();
  }, []);

  async function fetchMealInfo(mealNumber) {
    setIsLoading(true);
    const response = await fetch('https://react-http-5bad7-default-rtdb.europe-west1.firebasedatabase.app/meals.json');
    const data = await response.json();
    mealsDictionary = data[0];
    if (mealNumber === 0) {
      mealsInfo = mealsDictionary.starters;
    } else if (mealNumber === 1) {
      mealsInfo = mealsDictionary.mains;
    } else if (mealNumber === 2) {
      mealsInfo = mealsDictionary.desserts;
    } else if (mealNumber === 3) {
      mealsInfo = mealsDictionary.drinks;
    } else if (mealNumber === 4) {
      mealsInfo = mealsDictionary.baking;
    }
    setMealContent(mealsInfo);
    setIsLoading(false);
    setCatagorySelected(mealNumber);
  }

  if (contentToShow === "display all options") {
    displayedContent = <DisplayAllOptions mealInformation={mealContent} chooseMeal={setMealSelected} changeDisplay={setContentToShow} />
  } else if (contentToShow === "full meal") {
    displayedContent = <FullMeal mealInformation={mealContent} specificMeal={mealSelected} />;
  }

  return (
    <React.Fragment>
        <header className="App-header">
          <h1>
            Meal Maker
          </h1>
        </header>
        <nav>
          <ListFull listOfOptions={['Starter','Main','Dessert','Drinks','Baking']} callFetchMealInfo={fetchMealInfo} callSetContentToShow={setContentToShow} />
        </nav>
        <main>
          {/* <ContentStructure content={selectedContent} /> */}
          {displayedContent}
          {!isLoading && mealContent.length > 0}
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