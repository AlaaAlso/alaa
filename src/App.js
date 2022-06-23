import React from 'react';
import Navbar from './MyProfial.js/Navbar'
import Fullname from './MyProfial.js/FullName';
import Mainpart from './MyProfial.js/Mainpart'
import ProfilePhoto from './MyProfial.js/ProfilePhoto'
import Aboutpart from './MyProfial.js/Aboutpart'
import Footer from './MyProfial.js/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
         <Navbar/> 
       <Fullname/>
       <Mainpart/>
       <ProfilePhoto/>
       <Aboutpart/>
       <Footer/>
       {/* <Address/>  */}
      </div>
  );
}

export default App;
