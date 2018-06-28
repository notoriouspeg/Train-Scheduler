
$( document ).ready(function() {

    var config = {
        apiKey: "AIzaSyDuZvka8lhvhtd6DXkh3C5vYBnxcSSniiM",
        authDomain: "train-scheduler-eed54.firebaseapp.com",
        databaseURL: "https://train-scheduler-eed54.firebaseio.com",
        projectId: "train-scheduler-eed54",
        storageBucket: "train-scheduler-eed54.appspot.com",
        messagingSenderId: "568398515577"
      };
      firebase.initializeApp(config);

var database = firebase.database();

$("#trainInfoBtn").on("click", function(event) {
	event.preventDefault();

    var firstTime = moment($("#firstTime").val().trim(), "hh:mm").subtract(1, "years").format("X");
    
    var frequency = $("#freq").val().trim();
	
	//current time
	var currentTime = moment();
	console.log("CURRENT TIME: " +  moment(currentTime).format("hh:mm"));

	console.log(trainName);
	console.log(destination);
	console.log(firstTime);
	console.log(frequency);
	console.log(currentTime);

// var trainName = "";
// var destination = "";
// var frequency = "";
// var nextArrival = "";
// var minutesAway = "";

// console.log(trainName);
// console.log(Destination);
// console.log(frequency);
// console.log(nextArrival);
// console.log(minutesAway);



});
});