import React, {useState} from 'react';
import ContentStructure from './Content/ContentStructure';
import PairingList from './Content/PairingList';
import ListFull from './ExtraBits/ListFull';
import './App.css';

function App() {
  const [selectedContent, contentChanger] = useState('Starter');
  const [mealContent, setMealContent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchMealInfo() {
    setIsLoading(true);
    const response = await fetch('https://react-http-5bad7-default-rtdb.europe-west1.firebasedatabase.app/results.json');
    const data = await response.json();
    //console.log(data);
    const transformedMealInfo = data.map(mealData => {
      return {
        id: mealData.episode_id,
        title: mealData.title,
        openingText: mealData.opening_crawl,
        releaseDate: mealData.release_date
      }
    })
    setMealContent(transformedMealInfo);
    setIsLoading(false);
  }
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
          <ContentStructure content={selectedContent} />
          <button onClick={fetchMealInfo}>Get info</button>
          {!isLoading && mealContent.length > 0 && console.log(mealContent[0].title)}
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
