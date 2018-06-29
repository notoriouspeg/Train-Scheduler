
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

//Store inputs to Firebase in a JSON property

$("#trainInfoBtn").on("click", function(event) {
    event.preventDefault();
    
    var trainName = $("#name").val().trim();
    var destination = $("#dest").val().trim();
    var firstTime = $("#firstTime").val().trim();
    var frequency = $("#freq").val().trim();
	
	//current time
	var currentTime = moment();
    console.log("CURRENT TIME: " +  moment(firstTime).format("hh:mm"));
    
var newTrain = {

    train: trainName,
    trainGoing: destination,
    trainComing: firstTime,
    everyXMin: frequency
};

database.ref().push(newTrain);

 $("#name").val("");
 $("#dest").val("");
 $("#firstTime").val("");
 $("#freq").val("");

});

database.ref().on("child_added", function(trainData) {

var tName = trainData.val().train;
var tNameGoing = trainData.val().trainGoing; 
var tNameComing = trainData.val().trainComing; 
var tFrequency = trainData.val().everyXMin;
var minAway = 0;
var splitTime = tNameComing.split(":");
console.log(splitTime);
var newTrainTime = moment().hours(splitTime[0]).minutes(splitTime[1]);
console.log(newTrainTime);
var minDiff = moment().diff(newTrainTime, "minutes");
var modulus = minDiff % tFrequency;
console.log(modulus);
var tDiff = '';
tDiff = tFrequency - modulus;
console.log(tDiff);



// Subtract the modulus from the frequency is not working. 
//I know I need to add that difference to the current time is not working
// And I need to add the minAway

newTrainTime = moment().format("hh:mm a");
console.log (tName);
console.log (tNameGoing);
console.log (tNameComing);
console.log (tFrequency);
console.log(minAway);



$("#tBody").append("<tr><td>"+tName+"</td><td>"+tNameGoing+"</td><td>"+tFrequency+"</td><td>"+tNameComing+"</td><td>"+minAway+"</td></tr>")




});

});