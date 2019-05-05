$(document).ready(function() {
  document.getElementById("main").style.visibility = "hidden";
  document.getElementById("score").style.visibility = "hidden";

  var correct = 0;
  var incorrect = 0;
  var timesUp = 0;
  var number = 60;
  var intervalId;

  $("#start").on("click", start);
  $("#submit").on("click", stop);

  function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

  function decrement() {
    number--;
    $("#time").html("Time remaining: " + number);
    if (number === 0) {
      stop();
      alert("Time Up!");
    }
  }
  function start() {
    document.getElementById("main").style.visibility = "visible";
    document.getElementById("intro").style.visibility = "hidden";
    run();
  }

  function stop() {
    clearInterval(intervalId);
    document.getElementById("score").style.visibility = "visible";
    document.getElementById("main").style.visibility = "hidden";

    var userInput1 = $("input:radio[name=q1]:checked").val();
    if (userInput1 != undefined) {
      if (userInput1 == "true") {
        correct++;
      } else {
        incorrect++;
      }
    } else {
      timesUp++;
    }

    var userInput2 = $("input:radio[name=q2]:checked").val();

    if (userInput2 != undefined) {
      if (userInput2 == "true") {
        correct++;
      } else {
        incorrect++;
      }
    } else {
      timesUp++;
    }

    var userInput3 = $("input:radio[name=q3]:checked").val();

    if (userInput3 != undefined) {
      if (userInput3 == "true") {
        correct++;
      } else {
        incorrect++;
      }
    } else {
      timesUp++;
    }
    var userInput4 = $("input:radio[name=q4]:checked").val();

    if (userInput4 != undefined) {
      if (userInput4 == "true") {
        correct++;
      } else {
        incorrect++;
      }
    } else {
      timesUp++;
    }

    var userInput5 = $("input:radio[name=q5]:checked").val();

    if (userInput5 != undefined) {
      if (userInput5 == "true") {
        correct++;
      } else {
        incorrect++;
      }
    } else {
      timesUp++;
    }
    $("#correct").append(correct);
    $("#incorrect").append(incorrect);
    $("#timesUp").append(timesUp);
  }
});
