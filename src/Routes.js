import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import NewLink from './pages/NewLink';
import EditLink from './pages/EditLink';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/new" component={NewLink} />
      <Route path="/edit/:id" component={EditLink} />
    </Switch>
  );
}
