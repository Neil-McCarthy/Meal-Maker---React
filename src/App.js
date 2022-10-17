import React, {useState} from 'react';
import ContentStructure from './Content/ContentStructure';
import PairingList from './Content/PairingList';
import ListFull from './ExtraBits/ListFull';
import './App.css';

function App() {
  const [selectedContent, contentChanger] = useState('Starter');
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
