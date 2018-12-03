
import Navbar from './Navbar';
import 'semantic-ui-css/semantic.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';


// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
const PlayerAPI = {
  players: [
    { number: 1, name: "Prashant Adiyodi", position: "G" },
    { number: 2, name: "Rohit Ghai", position: "D" },
    { number: 3, name: "Hemant Sahu", position: "D" }
  ],
  all: function() { return this.players},
  get: function(id) {
    const isPlayer = p => p.number === id
    return this.players.find(isPlayer)
  }
}

// The FullRoster iterates over all of the players and creates
// a link to their profile page.
const FullRoster = () => (
  <div>
    <ul>
      {
        PlayerAPI.all().map(p => (
          <li key={p.number}>
            <Link to={`/roster/${p.number}`}>{p.name}</Link>
          </li>
        ))
      }
    </ul>
  </div>
)

// The Player looks up the player using the number parsed from
// the URL's pathname. If no player is found with the given
// number, then a "player not found" message is displayed.
// const Player = (props) => {
//   const player = PlayerAPI.get(
//     parseInt(props.match.params.number, 10)
//   )
//   if (!player) {
//     return <div>Sorry, but the player was not found</div>
//   }
//   return (
//     <div>
//       <h1>{player.name} (#{player.number})</h1>
//       <h2>Position: {player.position}</h2>
//       <Link to='/roster'>Back</Link>
//     </div>
//   )
// }

const Chota = () => (
  <div>
  I am internal route
   <Link to='/roster'>Back</Link>
  </div>
)

// The Roster component matches one of two different routes
// depending on the full pathname
const Roster = () => (
  <Switch>
    <Route exact path='/roster' component={FullRoster}/>
    <Route path='/roster/:number' component={Chota}/>
  </Switch>
)

const AboutUs = () => (
  <div>
    <h1>inside About Us</h1>
  </div>
)

const ContactUs = () => (
  <div>
    <h1>inside Contact Us</h1>
  </div>
)


const Home = () => (
  <div>
    <h1>Welcome to the Tornadoes Website!</h1>
  </div>
)

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/roster' component={Roster}/>
      <Route path='/about' component={AboutUs}/>
      <Route path='/contact' component={ContactUs}/>
    </Switch>
  </main>
)

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
  <Navbar/>
  </header>
)

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
)

// This demo uses a HashRouter instead of BrowserRouter
// because there is no server to match URLs
ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'))
