import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';



function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Fitness World</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>All Trainers</Link>
          </li>
          <li>
            <Link to='/add-trainer'>AddTrainer</Link>

          </li>
          <li>
            <Link to='/ShopItems'>Equipments</Link>
          </li>
          <li>
            <Link to='/add'>Login</Link>
          </li>
          
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;