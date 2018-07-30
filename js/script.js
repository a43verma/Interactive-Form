// Page load starts with focus on name input
$('#name').focus();

// Creates input field
function createInput () {
  const newLi = document.createElement("input");
  $(newLi).attr({
    type: 'text',
    id: 'job',
    name: 'job_role',
    placeholder: 'Your job role'
  })
  return newLi;
}

// Creates an input for the other job role
function otherJobRole () {
  // Appends the input field to Basic Info
  $("fieldset").first().append(createInput);

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

// updates color drop down based on t-shirt theme
function tShirtInfo () {
  // Hides the color dropdown menu
  $('#colors-js-puns').hide();

  $('#design').on("change", function () {
    // If js puns is selected
    if (this.value === "js puns") {
      // reveals the color dropdown menu
      $('#colors-js-puns').show();
      // Auto select cornflowerblue option
      $('#color option').eq(0).attr('selected', true);
      // Loops to show first three options
      for (let i = 0; i < 3; i ++) {
        $('#color option').eq(i).show();
      }
      // Loops to hide the last 3 options
      for (let i = 3; i < 6; i ++) {
        $('#color option').eq(i).hide();
      }

      // If I heart JS is selected
    } else if (this.value === "heart js") {
      // reveals the color dropdown menu
      $('#colors-js-puns').show();
      // Auto select the tomato option
      $('#color option').eq(3).attr('selected', true);
      // Loops to hide the first 3 options
      for (let i = 0; i < 3; i ++) {
        $('#color option').eq(i).hide();
      }
      // Loops to show the last three options
      for (let i = 3; i < 6; i ++) {
        $('#color option').eq(i).show();
      }

      // show all the options
    } else {
      $('#colors-js-puns').hide();
    }
  })
}

// <div id="colors-js-puns" class="">
//   <label for="color">Color:</label>
//   <select id="color">
//     <option value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option>
//     <option value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option>
//     <option value="gold">Gold (JS Puns shirt only)</option>
//     <option value="tomato">Tomato (I &#9829; JS shirt only)</option>
//     <option value="steelblue">Steel Blue (I &#9829; JS shirt only)</option>
//     <option value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option>
//   </select>
// </div>
// Function Calls
otherJobRole();
tShirtInfo();
