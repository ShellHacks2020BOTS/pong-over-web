var firebaseConfig = {
    apiKey: "AIzaSyAZRyF5MR7unguS_QXQcYJcriNDGVk5M0M",
    authDomain: "pow-server.firebaseapp.com",
    databaseURL: "https://pow-server.firebaseio.com",
    projectId: "pow-server",
    storageBucket: "pow-server.appspot.com",
    messagingSenderId: "893663120987",
    appId: "1:893663120987:web:fcf4c51bbc21cce279397e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore()

var table = document.querySelector(".leaderboard-table");

var index = 1;
db.collection("leaderboard/MFDGbq39Epr7i13mY7sp/singlerally")
    .orderBy("score", "desc").get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var row = table.insertRow();
            row.insertCell(0).innerHTML = index++;
            row.insertCell(1).innerHTML = doc.data().name;
            row.insertCell(2).innerHTML = doc.data().score;
        });
    });