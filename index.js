// import React from 'react';
// import ReactDOM from 'react-dom';
import './main.scss';
import datas from './data.json';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import bat from './bat.jpg';
// import captain from './captain.jpg';
// import iron from './iron.jpg';

// ReactDOM.render(<App />, document.getElementById('root'));

import Navbar from './Navbar';
import 'semantic-ui-css/semantic.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';


// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
// const MemberAPI = {
//     members: [
//         { number: 1, name: "Rohit Ghai", img: captain, role: "Developer" },
//         { number: 2, name: "Hemant Sahu", img: bat, role: "Developer" },
//         { number: 3, name: "Prashant Adiyodi", img: iron, role: "Project Manager" }
//     ],
//     all: function () { return this.members },
//     get: function (id) {
//         const isMember = p => p.number === id
//         return this.members.find(isMember)
//     }
// }

// The FullRoster iterates over all of the players and creates
// a link to their profile page.
// const TeamList = () => (
//     <div>

//         <div class="ui horizontal list">
//             {
//                 MemberAPI.all().map(p => (
//                     <div key={p.number} class="item">

//                         <img class="ui mini circular image" src={p.img} />
//                         <div class="content">
//                             <div class="ui sub header"> <Link to={`/team/${p.number}`}>{p.name} </Link></div>
//                             {p.role}
//                         </div>
//                     </div>
//                 ))
//             }
//         </div>
//     </div>
// )

// The member looks up the member using the number parsed from
// the URL's pathname. If no member is found with the given
// number, then a "member not found" message is displayed.
// const Member = (props) => {
//     const member = MemberAPI.get(
//         parseInt(props.match.params.number, 10)
//     )
//     if (!member) {
//         return <div>Sorry, but the member was not found</div>
//     }
//     return (
//         <div>
//             <div className="ui card">
//                 <div class="image">
//                     <img src={member.img} alt="Logo" />
//                 </div>
//                 <div className="content">
//                     <a className="header">{member.name}</a>
//                 </div></div>
//             <h4>Position:<b>{member.role}</b></h4>
//             <Link to='/team'>Back</Link>
//         </div>
//     )
// }


// The team component matches one of two different routes
// depending on the full pathname
// const Team = () => (
//     <Switch>
//         <Route exact path='/team' component={TeamList} />
//         <Route path='/team/:number' component={Member} />
//     </Switch>
// )

// const AboutUs = () => (
//     <div>
//         <h1>inside About Us</h1>
      
//         <video controls="controls"
//             class="video-stream"
//             x-webkit-airplay="allow"
//             data-youtube-id="N9oxmRT2YWw"
//             src="http://www.youtube.com/watch?v=OmxT8a9RWbE"
//         ></video>

//     </div>
// )

// const ContactUs = () => (
//     <div>
//         <div className="ui card">
//             <div className="content">
//                 <a className="header" href="#link">Steve Jobes</a>
//             </div></div>
//     </div>
// )

var activateLasers = () => {
    console.log("called")
    return(
    <div>
        <div className="ui card">
            <div className="content">
                <a className="header" href="#link">Steve Jobes</a>
            </div></div>
    </div>)
}

const Home = () => {
    console.log(datas)
    return(
    <div>
        <h1>List Of Items </h1>
        

            <table className="ui inverted table">
                <thead>
                    <tr><th>Name</th>
                        <th>Price</th>
                        <th>Weight</th>
                        <th>Choose Items</th>
                    </tr></thead>
                <tbody>
                    {
                        datas.map(data => (

                            <tr key={data.Name}>
                                <td data-label="Name">{data.Name}</td>
                                <td data-label="Price">{data.Price}</td>
                                <td data-label="Weight">{data.Weight}</td>
                                <td>
                                    <div className="ui checkbox">
                                        <input type="checkbox" name="example"/>
                                            <label></label>
                                        </div>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
            <button class="ui inverted secondary button">Place Order</button>
            <br/> <br/> <br/> <br/>
    </div>)
}

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home} />
            {/* <Route path='/team' component={Team} />
            <Route path='/about' component={AboutUs} />
            <Route path='/contact' component={ContactUs} /> */}
        </Switch>
    </main>
)

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
    <header>
        <Navbar />
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
), document.getElementById('root'));
registerServiceWorker();