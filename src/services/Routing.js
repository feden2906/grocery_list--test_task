import {Route, Switch, useHistory} from "react-router-dom";
import {GroceryList} from "../components";

export const Routing = () => {

  const history = useHistory()

  return (
      <Switch>

        <Route path='/grocery-list' exact>
          <GroceryList/>
        </Route>

        <Route>
          <h2>PAGE NOT FOUND <button onClick={() => history.push('/grocery-list')}>go home</button></h2>
        </Route>

      </Switch>

  );
}
