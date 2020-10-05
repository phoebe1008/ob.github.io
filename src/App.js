import React, {Component} from 'react';
import { StyleRoot } from 'radium';
import {
  createStore,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter,Route} from 'react-router-dom';
import ProductList from './component/ProductList';
import Header from './component/Header';
import Banner from './component/Banner';
import ShopCarList from './component/ShopCarList';
import reducers from './reducer/index';

import 'antd/dist/antd.css';

export const store = createStore(
  reducers,
  applyMiddleware(thunk),
);
class App extends Component{
  render(){ 
    return (
      <Provider store={store}>
        <StyleRoot>
          <BrowserRouter>
            <Route path="/" render={()=><Header/>}/>
            <Route exact path="/" render={()=><Banner/>}/>
            <Route exact path="/" render={()=><ProductList/>}/>
            <Route exact path="/SHOPCAR" render={()=><ShopCarList/>}/>
          </BrowserRouter>
        </StyleRoot>
      </Provider>
    );
  }
}
export default App;
