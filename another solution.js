/*
 * Helper function returns true if no boxes are checked.
 */
function validBoxes(checkboxes, max) {
  let counter = 0;
  for (let i = 0; i < max; i++) {
    if (!checkboxes[i].checked) {
      counter++;
    }
  }
  if (counter === 5) {
    return true;
  } else {
    return false;
  }
}
/* 
 * Function validates the form for part two (part_two.html). 
 * The fields that are validated are the text field and the checkbox field.  
 */
function isValid(event) {
  var
  textField = document.getElementById('user-name'),
  checkboxes = document.querySelectorAll('[name=lang]'),
  // Targeting the first checkbox in which i will be appending the required attribute temporarily for validation.
  py = document.getElementById('python'),
  counter = 0,
  arr = [],
  max = checkboxes.length;
  /* 
   * Elements that are appended into the array means there exists invalid input fields.
   * Currently they are the <label> for the text field and <p> in the checkbox section which will be dyed red.
   * Validating the text field first then the checkboxes, and applying inline style through Javascript to indicate valid or invalid.
   */
  if (!textField.value) {
    arr.push(document.getElementById('text-error'));
    // Make the text field red to indicate invalid input.
    textField.style.boxShadow = '0 0 10px 0 #ff3300';
  } else {
    textField.style.boxShadow = '0 0 10px 0 #66ff33';
    // Reverting back to white if is valid.
    document.getElementById('text-error').style.color = '#ffffff';
  }
  if (validBoxes(checkboxes, max)) {
    arr.push(document.getElementById('checkbox-error'));
    py.setAttribute('required', '');
    py.setCustomValidity('Please check at least one box')
  } else {
    document.getElementById('checkbox-error').style.color = '#ffffff';
  }
  if (arr.length > 0) {
    let 
    max = arr.length,
    i = 0;
    for (; i < max; i++) {
      arr[i].style.color = '#ff0000';
    }
  } else {
    // If there are no more invalid input fields, remove the required attribute.
    py.removeAttribute('required');
    py.setCustomValidity('');
  }
}

var validator = document.getElementById('validator');
validator.addEventListener('click', isValid);
