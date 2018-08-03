const name = document.getElementById('name');
const email = document.getElementById('mail');
const hasNumber = /\d/;
const isEmail = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

////// Initial Page Setup //////

// Creates error message
function createErrorMessage (msg, theClass) {
  let newHeading = document.createElement('p');
  $(newHeading).addClass(theClass);
  $(newHeading).addClass('error');
  $(newHeading).text(msg);
  return newHeading;
}

// creates all the error messages on the page
function createAllErrorMessages () {
  // Name error for empty
  newHeading = createErrorMessage('Sorry, name field is required.', 'nameError');
  $('fieldset label').eq(0).after(newHeading);
  // Name error for numbers
  newHeading = createErrorMessage('Sorry, name field cannot contain numbers.', 'nameInvalid');
  $('fieldset label').eq(0).after(newHeading);
  // Email error for invalid email
  newHeading = createErrorMessage('Sorry, this is not a valid email.', 'emailInvalid');
  $('fieldset label').eq(1).after(newHeading);
  // Email error for empty email
  newHeading = createErrorMessage('Sorry, email field is required.', 'emailError');
  $('fieldset label').eq(1).after(newHeading);
  // Activity error
  newHeading = createErrorMessage('Sorry, please choose at least 1 activity.', 'activityError');
  $('.activities legend').after(newHeading);
  // Credit card error
  newHeading = createErrorMessage('This is not a valid credit card number.');
  $('.credit-card div').eq(0).append(newHeading);
  // Zip code error
  newHeading = createErrorMessage('This is not a valid Zip code.');
  $('.credit-card div').eq(1).append(newHeading);
  // CVV error
  newHeading = createErrorMessage('This is not a valid CVV.');
  $('.credit-card div').eq(2).append(newHeading);
  // Styles the error messages
  $('.error').css('color', 'red');
  // Hides all error messages on the page
  $('.error').hide();
}




////// Focus on the First Field //////

// Page load starts with focus on name input
$('#name').focus();




////// Job Role Section //////

// Hides and reveals the other job role input
function otherJobRole () {
  //Hides the appended input
  $('#job').hide();
  // Acknowledges the "other" job role
  $('#title').on("change", function () {
    if (this.value === "other") {
      $('#job').show();
    } else {
      $('#job').hide();
    }
  });
}




////// T-Shirt Section //////

// updates color drop down based on t-shirt theme
function tShirtInfo () {
  // Hides the color dropdown menu
  $('#colors-js-puns').hide();
  $('#design').on("change", function () {
    // Hides the select theme option for a more clean dropdown menu
    $('#design option').eq(0).hide();
    // Resets color options so that they always change selection (Bug Fix)
    for (let i = 0; i < 6; i ++) {
      $('#color option').eq(i).attr('selected', false);
    }
    // If js puns is selected
    if (this.value === "js puns") {
      // reveals the color dropdown menu
      $('#colors-js-puns').show();
      // Loops to show first three options
      for (let i = 0; i < 3; i ++) {
        $('#color option').eq(i).show();
      }
      // Loops to hide the last 3 options
      for (let i = 3; i < 6; i ++) {
        $('#color option').eq(i).hide();
      }
      // Auto select cornflowerblue option
      $('#color option').eq(0).attr('selected', true);
      // If I heart JS is selected
    } else if (this.value === "heart js") {
      // reveals the color dropdown menu
      $('#colors-js-puns').show();
      // Loops to hide the first 3 options
      for (let i = 0; i < 3; i ++) {
        $('#color option').eq(i).hide();
      }
      // Loops to show the last three options
      for (let i = 3; i < 6; i ++) {
        $('#color option').eq(i).show();
      }
      // Auto select the tomato option
      $('#color option').eq(3).attr('selected', true);
      // show all the options
    } else {
      $('#colors-js-puns').hide();
    }
  })
}




////// Activity Registration //////

// Create a total heading
function createTotal () {
  const heading = document.createElement('h3');
  $(heading).text('Total: $0.00');
  $(heading).addClass('total');
  $('.activities').append(heading);
}

// Resets disabled elements
function resetDisabled () {
  $("[name*='express']").attr("disabled", false);
  $("[name*='node']").attr("disabled", false);
  $("[name*='js-frameworks']").attr("disabled", false);
  $("[name*='js-libs']").attr("disabled", false);
}

// Reverts colors of disabled elements
function resetColors () {
  $("[name*='express']").closest('label').css('color', 'black');
  $("[name*='node']").closest('label').css('color', 'black');
  $("[name*='js-frameworks']").closest('label').css('color', 'black');
  $("[name*='js-libs']").closest('label').css('color', 'black');
}

// updates all the activity criteria
function activityRegistration () {
  // counts the total cost of the workshops
  let total = 0;
  $('.activities').on("change", function () {
    // constantly resets the total to 0
    total = 0;
    resetDisabled();
    resetColors();
    // if main conference is checked
    if ($("[name*='all']").prop("checked")) {
      total += 200;
    }
    // if Javascript Frameworks is checked
    if ($("[name*='js-frameworks']").prop("checked")) {
      total += 100;
      $("[name*='express']").attr("disabled", true);
      $("[name*='express']").closest('label').css('color', 'grey');
    }
    // if JavaScript Libraries is checked
    if ($("[name*='js-libs']").prop("checked")) {
      total += 100;
      $("[name*='node']").attr("disabled", true);
      $("[name*='node']").closest('label').css('color', 'grey');
    }
    // if Express Workshop is checked
    if ($("[name*='express']").prop("checked")) {
      total += 100;
      $("[name*='js-frameworks']").attr("disabled", true);
      $("[name*='js-frameworks']").closest('label').css('color', 'grey');
    }
    // if node.js workshop is checked
    if ($("[name*='node']").prop("checked")) {
      total += 100;
      $("[name*='js-libs']").attr("disabled", true);
      $("[name*='js-libs']").closest('label').css('color', 'grey');
    }
    // if build tools workshop is checked
    if ($("[name*='build-tools']").prop("checked")) {
      total += 100;
    }
    // if npm workshop is checked
    if ($("[name*='npm']").prop("checked")) {
      total += 100;
    }
    // Updates the total heading with the current total
    $('.total').text('Total: $' + total + '.00');
  })
}




////// Displaying Payment Section //////

// Shows the correct payment input field
function paymentInfo () {
  // Hides the other payment options initially
  $('#credit-card').next().hide();
  $('#credit-card').next().next().hide();
  // Selects credit card option as default
  $('#payment option').eq(1).attr('selected', true);
  // hides the select payment option
  $('#payment option').eq(0).hide();
  // event handler for the changing payment method
  $('#payment').on('change', function() {
    if (this.value === 'credit card') {
      $('#credit-card').show();
      $('#credit-card').next().hide();
      $('#credit-card').next().next().hide();
    }
    if (this.value === 'paypal') {
      $('#credit-card').hide();
      $('#credit-card').next().show();
      $('#credit-card').next().next().hide();
    }
    if (this.value === 'bitcoin') {
      $('#credit-card').hide();
      $('#credit-card').next().hide();
      $('#credit-card').next().next().show();
    }
  })
}

////// Form Validation //////

// The requirements for the name input field
function nameRequirements () {
  // if the field is empty
  if ($('#name').val() == "") {
    $('.nameError').show();
    $('.nameInvalid').hide();
    $('#name').css('border', '2px solid red');
    $('fieldset label').eq(0).css('color', 'red');
    // if the field has a number in it
  } else if (hasNumber.test($('#name').val())) {
    $('.nameError').hide();
    $('.nameInvalid').show();
    $('#name').css('border', '2px solid red');
    $('fieldset label').eq(0).css('color', 'red');
    // if the input field is correct
  } else if (/^[A-Za-z\s]+$/.test($('#name').val())) {
    $('.nameError').hide();
    $('.nameInvalid').hide();
    $('#name').css('border', 'none');
    $('fieldset label').eq(0).css('color', 'black');
    // just in case of symbols or other things
  } else {
    $('.nameError').hide();
    $('.nameInvalid').show();
    $('#name').css('border', '2px solid red');
    $('fieldset label').eq(0).css('color', 'red');
  }
}

// The requirements for the email input field
function emailRequirements() {
  // if the field is empty
  if ($('#mail').val() == "") {
    $('.emailError').show();
    $('.emailInvalid').hide();
    $('#mail').css('border', '2px solid red');
    $('fieldset label').eq(1).css('color', 'red');
  }
  // if the field is correct
  if (isEmail.test($('#mail').val())) {
    $('.emailError').hide();
    $('.emailInvalid').hide();
    $('#mail').css('border', 'none');
    $('fieldset label').eq(1).css('color', 'black');
    // if the field isn't correct
  } else {
    $('.emailError').hide();
    $('.emailInvalid').show();
    $('#mail').css('border', '2px solid red');
    $('fieldset label').eq(1).css('color', 'red');
  }
}

// Checks if at least one checkbox is checked
function checkboxRequirements() {
  if ($('input:checked').length > 0) {
    $('.activityError').hide();
    $('.activities legend').css('color', '#184f68');
  } else {
    $('.activityError').show();
    $('.activities legend').css('color', 'red');
  }
}

// initiates the checkbox requirements and activates change event handler so the error updates in real time
function checkboxError () {
  checkboxRequirements();
  $('input:checkbox').on('change', function (e) {
    checkboxRequirements();
  })
}

function creditCardNumberRequirements () {

}



////// Event Handlers for Form Validation //////

// prevents the entire form from submitting
$('form').on('submit', function (e) {
  e.preventDefault();
  nameRequirements();
  emailRequirements();
  checkboxError();
})

// checks name input field
$('#name').on('input', function (e) {
  nameRequirements();
})

// checks the email input field
$('#mail').on('blur', function (e) {
  emailRequirements();
})




////// Function Calls //////
otherJobRole();
tShirtInfo();
activityRegistration();
createTotal();
paymentInfo();
createAllErrorMessages();
