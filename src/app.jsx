import React from 'react';
import styles from './app.module.css';
import Login from './component/login/login';
import {BrowserRouter ,Switch,Route,Link} from "react-router-dom";
import Maker from './component/maker/maker';


function App({ authService,FileInput }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login authService={authService} />
          </Route>
          <Route path="/maker">
            <Maker FileInput={FileInput} authService={authService} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
