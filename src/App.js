import StartOverlay from './components/StartOverlay';
import Phrase from './components/Phrase';
import Keyboard from './components/Keyboard';
import Scoreboard from './components/Scoreboard';
import firebase from 'firebase/app'
import 'firebase/analytics'

function initializeFirebase() {
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyASVlQLbBN155_UjuHpxdwvtf3ecXB3mR8",
    authDomain: "langnet-1538701917715.firebaseapp.com",
    databaseURL: "https://langnet-1538701917715.firebaseio.com",
    projectId: "langnet-1538701917715",
    storageBucket: "langnet-1538701917715.appspot.com",
    messagingSenderId: "130876109837",
    appId: "1:130876109837:web:b062c9b8341ad1bc439144",
    measurementId: "G-VYVD2P1MYN"
  };
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  console.log('Initialized firebase app:');
  console.log(app);

}

const App = () => {
  console.log('App render');
  initializeFirebase();
  firebase.analytics().logEvent('test_start_app', {});
  firebase.analytics().logEvent('test_notification_received');

  console.log("Sent events");
  return (
    <div className='main-container'>
      <StartOverlay />
      <div id='banner' className='section'>
        <h3 className='header'>Idioms game</h3>
      </div>
      <Phrase />
      <Keyboard />
      <Scoreboard />
    </div>
  );
};

export default App;
