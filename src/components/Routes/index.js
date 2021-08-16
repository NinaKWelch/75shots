import { Switch, Route } from "react-router-dom"
import AdminDashboard from "../AdminDashboard"
import Donate from "../Donate"
import Productions from "../Productions"
import SignUp from "../SignUp"
import SignIn from "../SignIn"
import Academy from "../Academy"
import About from "../About"
import Home from "../Home"

const Routes = ({ user }) => (
  <Switch>
    <Route path="/admin">
      <AdminDashboard user={user} />
    </Route>
    <Route path="/donate">
      <Donate />
    </Route>
    <Route path="/productions">
      <Productions />
    </Route>
    <Route path="/signup">
      <SignUp />
    </Route>
    <Route path="/signin">
      <SignIn />
    </Route>
    <Route path="/pocket-cinema">
      <Academy />
    </Route>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/">
      <Home />
    </Route>
  </Switch>
)

export default Routes
