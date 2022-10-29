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
  const [contentToShow, setContentToShow] = useState("displayAllOptions");

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
      mealsInfo = mealsDictionary.sides;
    } else if (mealNumber === 2) {
      mealsInfo = mealsDictionary.mains;
    } else if (mealNumber === 3) {
      mealsInfo = mealsDictionary.desserts;
    } else if (mealNumber === 4) {
      mealsInfo = mealsDictionary.drinks;
    } else if (mealNumber === 5) {
      mealsInfo = mealsDictionary.baking;
    }
    setMealContent(mealsInfo);
    setIsLoading(false);
    setCatagorySelected(mealNumber);
  }

  if (contentToShow === "displayAllOptions") {
    displayedContent = <DisplayAllOptions mealInformation={mealContent} chooseMeal={setMealSelected} changeDisplay={setContentToShow} />
  } else if (contentToShow === "fullMeal") {
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
          <ListFull listOfOptions={['Starter','Sides','Main','Dessert','Drinks','Baking']} callFetchMealInfo={fetchMealInfo} callSetContentToShow={setContentToShow} />
        </nav>
        <main className={contentToShow}>
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
                <section>
                    <ul>
                        <li><a href='https://www.facebook.com/'><img src={require('./images/icons/facebook.png')} /></a></li>
                        <li><a href='https://www.instagram.com/'><img src={require('./images/icons/instagram.png')} /></a></li>
                        <li><a href='https://www.github.com/'><img src={require('./images/icons/github.png')} /></a></li>
                        <li><a href='https://www.linkedin.com/'><img src={require('./images/icons/linkedin.png')} /></a></li>
                    </ul>
                </section>
            <section>
                <p>
                    A Neil McCarthy Website
                </p>
            </section>
            <section>
                <p>
                    Phone: 123456789<br/>
                    Email: email.email@email.email
                </p>
            </section>
            <section>
                <small>
                    <p>
                        This website was made as a template and should not be considered a genuine site and/or business. legal stuff legal stuff legal stuff legal stuff legal stuff legal stuff legal stuff legal stuff
                    </p>
                </small>
            </section>
        </footer>
    </React.Fragment>
  );
}


export default App;