import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body/index';

function App() {
  const ScreenCtx = React.createContext('')
  const [screenList, setScreenList] = useState(['input', 'output'])
  const [productList, setProductList] = useState(['ORG', 'KSH', 'TBC'])
  const [currentScreen, setCurrentScreen] = useState('')
  const [currentProduct, setCurrentProduct] = useState('')

  const toggleScreen = i => {
    setCurrentScreen(screenList[i])
  }
  const toggleProduct = i => {
    setCurrentProduct(currentScreen[i])
  }
  return (
    <div className="App">
        <ScreenCtx.Provider value={currentScreen}>
          <Header width="50%" toggleHandler={toggleScreen} array={screenList} error="Can't read information" ></Header>
          <Body 

            headerWidth="70%" headerToggleHandler={toggleProduct} headerArray={productList} headerError="Can't read information"
          ></Body>
        </ScreenCtx.Provider>
    </div>
  );
}

export default App;
