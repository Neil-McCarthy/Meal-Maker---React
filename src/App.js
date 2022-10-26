import React, {useState, useCallback, useEffect} from 'react';
import ContentStructure from './Content/ContentStructure';
import DisplayAllOptions from './Content/Main/DisplayAllOptions';
import PairingList from './Content/PairingList';
import ListFull from './ExtraBits/ListFull';
import './App.css';
import FullMeal from './Content/Main/FullMeal';

let displayedContent;
let contentOnLoad = false;
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
    //console.log(data);
    const transformedMealInfo = data.map(mealData => {
      if (mealNumber === 0) {
        mealsInfo = mealData.starters;
        // console.log(mealsInfo);
      } else if (mealNumber === 1) {
        mealsInfo = mealData.mains;
      } else if (mealNumber === 2) {
        mealsInfo = mealData.desserts;
      } else if (mealNumber === 3) {
        mealsInfo = mealData.drinks;
      } else if (mealNumber === 4) {
        mealsInfo = mealData.baking;
      }
      // return {
      //   title: mealsInfo.title,
      //   ingrediants: mealsInfo.ingrediants,
      //   images: mealsInfo.images,
      //   steps: mealsInfo.Steps,
      //   seasoningMeat: mealsInfo.SeasoningTheMeat,
      //   seasoningSauce: mealsInfo.Seasoning_the_Sauce
      // }
    })
    // console.log(mealsInfo);
    setMealContent(mealsInfo);
    setIsLoading(false);
    setCatagorySelected(mealNumber);
  }

  // console.log(contentOnLoad);
  // if (contentOnLoad === false) {
  //   fetchMealInfo(0);
  //   contentOnLoad = true;
  // }
  if (contentToShow === "display all options") {
    displayedContent = <DisplayAllOptions mealInformation={mealContent} chooseMeal={setMealSelected} changeDisplay={setContentToShow} />
  } else if (contentToShow === "full meal") {
    displayedContent = <FullMeal mealInformation={mealContent} specificMeal={mealSelected} />;
  }

  // window.onload(() => {fetchMealInfo(0)});
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