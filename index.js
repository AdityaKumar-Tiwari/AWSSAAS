// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCKlpVqEtfCyZSzPV-tBE9089xFNQj40SU",
    authDomain: "saas-project-9f75b.firebaseapp.com",
    projectId: "saas-project-9f75b",
    storageBucket: "saas-project-9f75b.appspot.com",
    messagingSenderId: "654774951619",
    appId: "1:654774951619:web:2255cdd5c1c2d360800c76",
    measurementId: "G-XP5MYRQJV5"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  //Initialize variables
  const auth = firebase