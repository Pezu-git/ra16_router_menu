import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import Menu from './components/Menu';
import HomePage from './components/HomePage';
import DriftPage from './components/DriftPage';
import TimeAttackPage from './components/TimeAttackPage';
import ForzaPage from './components/ForzaPage';

const baseURL = '/ra-router-menu';

export default function App() {
  return (
    <Router>
      <div>
        <Menu>
          <nav className='menu'>
            <NavLink
              className='menu__item'
              activeClassName='menu__item-active'
              exact
              to={`${baseURL}/`}
            >
              ГЛАВНАЯ
            </NavLink>
            <NavLink
              className='menu__item'
              activeClassName='menu__item-active'
              exact
              to={`${baseURL}/drift`}
            >
              ДРИФТ-ТАКСИ
            </NavLink>
            <NavLink
              className='menu__item'
              activeClassName='menu__item-active'
              exact
              to={`${baseURL}/timeattack`}
            >
              TIME ATTACK
            </NavLink>
            <NavLink
              className='menu__item'
              activeClassName='menu__item-active'
              exact
              to={`${baseURL}/forza`}
            >
              FORZA KARTING
            </NavLink>
          </nav>
        </Menu>
      </div>
      <div className='page'>
        <Switch>
          <Route path={`${baseURL}/`} exact component={HomePage} />
          <Route path={`${baseURL}/drift`} component={DriftPage} />
          <Route path={`${baseURL}/timeattack`} component={TimeAttackPage} />
          <Route path={`${baseURL}/forza`} component={ForzaPage} />
        </Switch>
      </div>
    </Router>
  );
}