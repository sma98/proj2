import { Route, Switch } from 'react-router-dom';
import AllTrainersPage from './pages/AllTrainers';
import AddsPage from './pages/Adds';
import EquipmentsPage from './pages/Equipments';
import NewTrainersPage from './pages/NewTrainers';



import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <AllTrainersPage />
        </Route>
        <Route path='/add-trainer'>
          <NewTrainersPage />
        </Route>
        <Route path='/ShopItems'>
          <EquipmentsPage/>
          </Route>
        <Route path='/adds'>
          <AddsPage/>
          </Route>
           
        
      </Switch>
    </Layout>
  );
}

export default App;