 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyD1iMd26sRM5QpvYmH4o_9rVr6a7K6ndXw",
    authDomain: "fir-messaging-2a230.firebaseapp.com",
    databaseURL: "https://fir-messaging-2a230.firebaseio.com",
    projectId: "fir-messaging-2a230",
    storageBucket: "fir-messaging-2a230.appspot.com",
    messagingSenderId: "984600315066",
    appId: "1:984600315066:web:ee48bf99087d783bdeae83"
  };
 // initialize firebase
 firebase.initializeApp(firebaseConfig);

// push notifications
const messaging = firebase.messaging();
// request permission
messaging.requestPermission()
.then(() => {
    console.log('Permission granted');
    return messaging.getToken();
})
.then((token) => {
    console.log(token);
})
.catch(err => {
    console.log('Error occurred!');
})

