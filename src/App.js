import {Provider} from 'react-redux';
import Players from './components/Players';
import ChosenTeam from './components/ChosenTeam';
import store from './store'


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Quidditch Players Manager</h1>
        <Players />
        <ChosenTeam />
    </div>
    </Provider>

  );
}

export default App;
