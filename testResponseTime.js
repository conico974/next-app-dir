var https = require("https");
// Define the URL and the number of requests
// var url = "d2jjvnhym149vv.cloudfront.net";
var url = "next-app-dir-seven.vercel.app";
var requests = 100;

// Create an array to store the response times
var times = [];

// Define a function to make a request and measure the time
function makeRequest() {
  // Get the current time before sending the request
  var startTime = Date.now();
  // Send an HTTP HEAD request to get only the headers

  var req = https.request(
    { hostname: url, path: `/isr`, method: "GET" },
    function (res) {
      // Get the current time after receiving the response
      var endTime = Date.now();
      // Calculate the response time in milliseconds
      var responseTime = endTime - startTime;
      console.log(
        `Response time for request ${times.length + 1}: ${responseTime} ms`
      );
      // Push the response time to the array
      times.push(responseTime);
      // Check if there are more requests to make
      if (times.length < requests) {
        // Wait for 500 milliseconds before making another request
        setTimeout(makeRequest, 500);
      } else {
        // Compute the average response time
        var sum = times.reduce(function (a, b) {
          return a + b;
        });
        var average = sum / times.length;
        // Display the average response time
        console.log("Average response time: " + average + " ms");
      }
    }
  );
  req.end();
}

// Start making requests
makeRequest();
