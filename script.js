//                                        ARRAYS

/*Question no 01: Declare an empty array using JS literal notation to store
student names in future.*/
var studentNames = [];
console.log(studentNames);

/*Question no 02: Declare an empty array using JS object notation to store
student names in future.*/
var studentNames = new Array();
console.log(studentNames);

/*Question no 03: Declare and initialize a strings array.*/
var fruits = ["apple", "banana", "orange", "kiwi"];
console.log(fruits);

/*Question no 04: Declare and initialize a numbers array.*/
var numbers = [1, 5, 10, 20, 50];
console.log(numbers);

/*Question no 05: Declare and initialize a boolean array.*/
var booleanArr = [true, false, true];
console.log(booleanArr);

/*Question no 06: Declare and initialize a mixed array.*/
var mixedArr = ["apple", 25, true, "banana", 50, false];
console.log(mixedArr);

/*Question no 07: Declare and Initialize an array and store available
education qualifications in Pakistan (e.g. SSC, HSC, BCS,
BS, BCOM, MS, M. Phil., PhD). Show the listed
qualifications in your browser like*/
const qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("Qualifications: <br>");
for(let i = 0; i < qualifications.length; i++) {
  document.write((i+1) + ") " + qualifications[i] + "<br>");
}

/*Question no 08: Write a program to store 3 student names in an array.Take
another array to store score of these three students.
Assume that total marks are 500 for each student, display
the scores & percentages of students like:*/
var studentNames = ["Michael", "John", "Tony"];
var studentScores = [320, 230, 480];
var totalMarks = 500;
var studentPercentages = [];
for (var i = 0; i < studentScores.length; i++) {
    var percentage = (studentScores[i] / totalMarks) * 100;
    studentPercentages.push(percentage);
}
for (var i = 0; i < studentNames.length; i++) {
    document.write(("Score of " + studentNames[i] + " is " + studentScores[i] + ". Percentage: " + studentPercentages[i] + "%") + "<br />");
}

/*Question no 09: Initialize an array with color names. Display the array
elements in your browser.
a. Ask the user what color he/she wants to add to the
beginning & add that color to the beginning of the array.
Display the updated array in your browser.
b. Ask the user what color he/she wants to add to the end
& add that color to the end of the array. Display the
updated array in your browser.
c. Add two more color to the beginning of the array.
Display the updated array in your browser.
d. Delete the first color in the array. Display the updated
array in your browser.
e. Delete the last color in the array. Display the updated
array in your browser.
f. Ask the user at which index he/she wants to add a color
& color name. Then add the color to desired
position/index. . Display the updated array in your
browser.
g. Ask the user at which index he/she wants to delete
color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined
position/index. . Display the updated array in your
browser.*/
var colors = ["red", "green", "blue", "yellow"];
document.write("Initial colors: " + colors + "<br>");
var colorToAddAtStart = prompt("Enter color to add to the beginning:");
colors.unshift(colorToAddAtStart);
document.write("After adding color at the beginning: " + colors + "<br>");
var colorToAddAtEnd = prompt("Enter color to add to the end:");
colors.push(colorToAddAtEnd);
document.write("After adding color at the end: " + colors + "<br>");
colors.unshift("purple", "orange");
document.write("After adding two colors at the beginning: " + colors + "<br>");
colors.shift();
document.write("After deleting first color: " + colors + "<br>");
colors.pop();
document.write("After deleting last color: " + colors + "<br>");
var indexToAdd = prompt("Enter index at which you want to add color:");
var colorToAdd = prompt("Enter color to add at index " + indexToAdd + ":");
colors.splice(indexToAdd, 0, colorToAdd);
document.write("After adding color at index " + indexToAdd + ": " + colors + "<br>");
var indexToDelete = prompt("Enter index from where you want to delete color(s):");
var numOfColorsToDelete = prompt("Enter number of colors to delete from index " + indexToDelete + ":");
colors.splice(indexToDelete, numOfColorsToDelete);
document.write("After deleting " + numOfColorsToDelete + " colors from index " + indexToDelete + ": " + colors);

/*Question no 10: Write a program to store student scores in an array &
sort the array in ascending order using Array’s sort
method.*/
let scores = [320 , 230 , 480 , 120];
document.write("Scores of Students: " + scores + "<br />");
scores.sort(function(a, b){return a-b});
document.write("Sorted scores in ascending order: " + scores);

/*Question no 11: Write a program to initialize an array with city names.
Copy 3 array elements from cities array to selectedCities
array*/
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cities.slice(1, 3);
document.write("Cities: " + cities + "<br />");
document.write("Selected Cities: " + selectedCities);

/*Question no 12: Write a program to create a single string from the
below mentioned array:
var arr = [“This ”, “ is ”, “ my ”, “ cat”];
(Use array’s join method)*/
var arr = ["This", "is", "my", "cat"];
var string = arr.join(" ");
document.write("Array: ");
document.write((arr.join()) + ("<br />"));
document.write( "<br />");
document.write("String: ");
document.write(string);

/*Question no 13: Create a new array. Store values one by one in such a way
that you can access the values in the order in which they
were stored. (FIFO-First In First Out)*/
var devices = ["keyboard", "mouse", "printer", "monitor"];
document.write("Devices: " + devices + "<br>");
document.write("Out: " + devices.shift() + "<br>");
document.write("Out: " + devices.shift() + "<br>");
document.write("Out: " + devices.shift() + "<br>");
document.write("Out: " + devices.shift());

/*Question no 14: Create a new array. Store values one by one in such a way
that you can access the values in reverse order. (Last InFirst Out)*/
var devices = [];
devices.push("keyboard");
devices.push("mouse");
devices.push("printer");
devices.push("monitor");
document.write("Devices: ");
document.write(devices + "<br />");
document.write("Out: " );
document.write(devices.pop() + "<br />");
document.write("Out: " );
document.write(devices.pop() + "<br />");
document.write("Out:" );
document.write(devices.pop() + "<br />");
document.write("Out: ");
document.write(devices.pop());

/*Question no 15: */
var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<select>");
for (var i = 0; i < manufacturers.length; i++) {
    document.write("<option>" + manufacturers[i] + "</option>");
}
document.write("</select>");

