// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import { CartProvider } from './ContextReducer';
import Signin from './components/Signin';
import Registration from './components/Registration';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Signin />} />
          <Route exact path="Registration" element={<Registration />} />
          <Route path="signin" element={<Signin />} />
          <Route exact path="home" element={<Home />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;

