import './App.css';
import GithubProfile from "./GithubProfile";
import {useState} from "react";
// import {Route} from "react-router-dom";
// import RandomUser from "./RandomUser";
import {Route, Routes, useParams, Link} from "react-router-dom";

const Home = () => <h1>Home</h1>
const About = () => <h1>About</h1>
const GithubProfilePage = () => {

    const {githubUsername} = useParams()

    return(
        <div>
            <h1>Github Profile</h1>
           <GithubProfile username= {githubUsername} />
        </div>
    )

}

function App() {

    const[username, setUsername] =useState('')
    const onFormSubmit =(event)=>{
        event.preventDefault()
        console.log(event)
        setUsername(event.target[0].value)
    }
  return (
    <div className="App">

        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="about" element={<About />}/>
            <Route path="github-user/:githubUsername" element={<GithubProfilePage />}/>

        </Routes>

        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/github-user/bhague1281">bhague1281 profile</Link>
            </li>
        </ul>





      {/*  <form onSubmit={onFormSubmit}>*/}
      {/*      <label htmlFor="username-input">Username: </label>*/}
      {/*      <input id={"username-input"}/>*/}
      {/*      <button type="submit">Search</button>*/}

      {/*  </form>*/}

      {/*  {username && <GithubProfile username={username} />}*/}

      {/*/!*<GithubProfile username="bhague1281" />*!/*/}

      {/*  /!*<RandomUser />*!/*/}

    </div>
  );
}

export default App;
