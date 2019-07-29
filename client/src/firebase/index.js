import firebase from 'firebase/app';
import 'firebase/storage'; 

const firebaseConfig = {
    apiKey: "AIzaSyA87ka1kfn5EHKSEX8elJXKjN77FBC7MOY",
    authDomain: "get-a-life-c454d.firebaseapp.com",
    databaseURL: "https://get-a-life-c454d.firebaseio.com",
    projectId: "get-a-life-c454d",
    storageBucket: "get-a-life-c454d.appspot.com",
    messagingSenderId: "375527253679",
    appId: "1:375527253679:web:abf8e0c3f83b9005"
  };
  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

  export {
      storage, firebase as default
  }