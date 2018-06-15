var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

// create a new div element
  var newDiv = document.createElement("div");
  // and give it some content
  var newContent = document.createTextNode("Hi there and greetings!");
  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  var currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);


  document.querySelector('html').onclick = function() {
    //alert('Ouch! Stop poking me!');
}
