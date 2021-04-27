import { Route, Switch } from 'react-router-dom';
import AllBooks from '../pages/AllBooks';
import Favorites from '../pages/Favorites';

const Routes = () => {
  return (
    <Switch>
      <Route path='/' component={AllBooks} exact />
      <Route path='/favorites' component={Favorites} exact />
    </Switch>
  )
}

export default Routes
