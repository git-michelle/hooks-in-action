import "../App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { FaCalendarAlt, FaDoorOpen, FaUsers } from "react-icons/fa";

import BookablesPage from "./Bookables/BookablesPage";
import BookingsPage from "./Bookings/BookingsPage";
import UserPicker from "./Users/UserPicker";
import UsersPage from "./Users/UsersPage";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/bookings" className="btn btn-header">
                  <FaCalendarAlt />
                  <span>Bookings</span>
                </Link>
              </li>
              <li>
                <Link to="/bookables" className="btn btn-header">
                  <FaDoorOpen />
                  <span>Bookables</span>
                </Link>
              </li>
              <li>
                <Link to="/Users" className="btn btn-header">
                  <FaUsers />
                  <span>Users</span>
                </Link>
              </li>
            </ul>
          </nav>
          <UserPicker />
        </header>
      </div>

      <Switch>
        <Route path="/bookings" component={BookingsPage}></Route>
        <Route path="/bookables" component={BookablesPage}></Route>
        <Route path="/users" component={UsersPage}></Route>{" "}
      </Switch>
    </Router>
  );
}

export default App;
