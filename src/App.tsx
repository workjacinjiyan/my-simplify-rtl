import Vote from 'src/components/Vote';
// import DrinkSearch from 'src/components/DrinkSearch';

import './styles.css';

export default function App() {
  return (
    <div className="App">
      <Vote totalGlobalLikes={10} />
      {/* <DrinkSearch /> */}
    </div>
  );
}
