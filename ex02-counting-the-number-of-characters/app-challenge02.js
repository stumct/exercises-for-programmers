function onKeyPress(){
  var inputBox = document.getElementById('input')
  var counter = document.getElementById('counter')
  counter.innerHTML = inputBox.value + " has " + inputBox.value.length + " characters"
}
