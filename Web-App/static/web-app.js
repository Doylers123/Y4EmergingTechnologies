 // Creating the canvas element and placing it in the myCanvas slot
 var canvas = document.getElementById('canvasDiv');
 var ctx = canvas.getContext('2d');

 var painting = document.getElementById('canvas');
 var paint_style = getComputedStyle(painting);
 canvas.width = parseInt(paint_style.getPropertyValue('width'));
 canvas.height = parseInt(paint_style.getPropertyValue('height'));

 var mouse = { x: 0, y: 0 };

 // adding event listener for the mouse movement
 canvas.addEventListener('mousemove', function (e) {
     // Adding offset to the mouse so it's drawing position is correct
     mouse.x = e.pageX - this.offsetLeft;
     mouse.y = e.pageY - this.offsetTop;
 }, false);

 //width of the line
 // image appears closer to typical mnist data image ith line size at 15
 //  May make predicitions more accurate
 ctx.lineWidth = 5;
 

 // specifying how you want the image to be drawn eg "round" will have no edges
 ctx.lineJoin = 'round';
 ctx.lineCap = 'round';

 // colour of the line
 // Set white to match mnist dataset
 // White color improves prediction rate
 ctx.strokeStyle = '#FFFFFF';

 // adding event listener for when the mouse is clicked
 canvas.addEventListener('mousedown', function (e) {
     //begin the path path for the drawing
     ctx.beginPath();
     // draw the line following the mouse position
     ctx.moveTo(mouse.x, mouse.y);
     canvas.addEventListener('mousemove', onPaint, false);
 }, false);

 // Adding event lstener for when the mouse is no longer clicked
 canvas.addEventListener('mouseup', function (e) {
     canvas.removeEventListener('mousemove', onPaint, false);
 }, false);

 // function to draw the line for the canvas
 var onPaint = function () {
     ctx.lineTo(mouse.x, mouse.y);
     ctx.stroke();
 };

 // function to clear the canvas completely
 // Attched to the clearButton
 // Also now clears guessed number
 function erase() {
     ctx.clearRect(0, 0, canvas.width, canvas.height);
     $('#predictedNumber').text('');
 }

 // function to save the image created in the canvas
 function predict() {
     //directed to take the image 
     var canvas = document.getElementById("canvasDiv");
     var dataURL = canvas.toDataURL();
     console.log(dataURL);

     // Using Ajax post method for the image
     $.ajax({
         type: 'POST',
         url: '/predict',
         data: {
             imgBase64: dataURL
         }
     }).done(function (data) {
         // Logging to the console to confirm 
         console.log('SENT');
         // sending predicted number to the console
         console.log(data);
         $("#predictedNumber").empty().append(data);
     });
 };