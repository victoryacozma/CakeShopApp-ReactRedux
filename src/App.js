import logo from './logo.svg';
import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import HookCakeContainer from './components/HookCakeContainer';
import HookIceCreamContainer from './components/HookIceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';

//provider component jnows about redux store through props
function App() {
  return (
    <Provider store = {store}>
    <div className="App">
      <ItemContainer cake />
      <ItemContainer/>
      <HookCakeContainer/>
      <HookIceCreamContainer/>
      <NewCakeContainer/>
    </div>
    </Provider>
  );
}

export default App;
