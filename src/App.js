import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
function App() {
  return <div className="App">
    <Router>
      <div>
        <ul>
          <li>Home</li> 
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </Router>
  </div>;
}

export default App;

// /
// /projects
// /about
// /contact

// url ებზე

// მთავარ გვერდზე განათავსეთ მისასალმებელი მარკაპი თქვენთვის სასურველი,

// ებაუთზე დაწერეთ თქვენს შესახებ რაც გსურთ ავტო ბიოგრაფია

// კონტაქტზე თქვენი საკონტაქტო LinkedIn, facebook, Phone ან რაც გსურთ

// პროექტებზე დალინკეთ თქვენი ყველა გითჰაბის პროექტი
