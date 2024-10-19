import Navbar from './Navbar';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Footer from './Footer';

// import { initializeApp } from 'firebase/app';

// // Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyB4okOOcB6r1bnFhrWJc6SKLtOOhpRTHPg",
//   authDomain: "real-eastate-lp.firebaseapp.com",
//   projectId: "real-eastate-lp",
//   storageBucket: "real-eastate-lp.appspot.com",
//   messagingSenderId: "1089559572758",
//   appId: "1:1089559572758:web:ef536b368ac0e11a786037",
// };

// // Initialize Firebase
// initializeApp(firebaseConfig);

const App = () => {
  return (
    <div>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </div>
  );
};

export default App;
