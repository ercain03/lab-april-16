function sum(x,y){
  var result = x + y;
//  console.log('"The sum of ' + x + ' and ' + y + ' is ' + result + '."');
  var probOne = document.getElementById('sumThing');
  probOne.textContent = '"The sum of ' + x + ' and ' + y + ' is ' + result + '."';
  return x + y;
}

function multiply(x,y){
  var result = x * y;
//  console.log('"The product of ' + x + ' and ' + y + ' is ' + result + '."');
  var probTwo = document.getElementById('multiThing');
  probTwo.textContent = '"The product of ' + x + ' and ' + y + ' is ' + result + '."';
  return x * y;
}

function sumAndMultiply(x, y, z) {
  var output = [];
  output.push(sum(sum(x,y),z));
  output.push(multiply(multiply(x,y),z));
  console.log(x + ' and ' + y + ' and ' + z + ' sum to ' + output[0] + '.');
  console.log('The numbers ' + x + ' and ' + y + ' and ' + z + ' have a product of ' + output[1] + '.');
  var probThree = document.getElementById('partOne');
  probThree.textContent = x + ' and ' + y + ' and ' + z + ' sum to ' + output[0] + '.';
  var partTwo = document.getElementById('partTwo');
  partTwo.textContent = 'The numbers ' + x + ' and ' + y + ' and ' + z + ' have a product of ' + output[1] + '.';
  return output;
}
//Really good code.
function sumArray(arr){
  var sum = 0;
  for (var i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  console.log('"' + arr + ' was passed as an array of numbers, and ' + sum + ' is their sum."');
  console.table(arr);
  var probFour = document.getElementById('arrayOne');
  probFour.textContent = '"' + arr + ' was passed as an array of numbers, and ' + sum + ' is their sum."';
}
//I have the same code
function multiplyArray(arr){
  var product = 1;
  for (var i = 0; i < arr.length; i++){
    product *= arr[i];
  }
  console.log('"The numbers ' + arr + ' have a product of ' + product + '."');
  console.table(arr);
  var probFive = document.getElementById('arrayTwo');
  probFive.textcontent = '"The numbers ' + arr + ' have a product of ' + product + '."';
}
