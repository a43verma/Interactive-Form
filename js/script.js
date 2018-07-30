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

function activityRegistration () {
  // counts the total cost of the workshops
  let total = 0;

  $('.activities').on("change", function () {
    // constantly resets the total to 0
    total = 0;

    // Resets disabled elements
    $("[name*='express']").attr("disabled", false);
    $("[name*='node']").attr("disabled", false);
    $("[name*='js-frameworks']").attr("disabled", false);
    $("[name*='js-libs']").attr("disabled", false);

    // if main conference is checked
    if ($("[name*='all']").prop("checked")) {
      total += 200;
    }
    // if Javascript Frameworks is checked
    if ($("[name*='js-frameworks']").prop("checked")) {
      total += 100;
      $("[name*='express']").attr("disabled", true);
    }
    // if JavaScript Libraries is checked
    if ($("[name*='js-libs']").prop("checked")) {
      total += 100;
      $("[name*='node']").attr("disabled", true);
    }
    // if Express Workshop is checked
    if ($("[name*='express']").prop("checked")) {
      total += 100;
      $("[name*='js-frameworks']").attr("disabled", true);
    }
    // if node.js workshop is checked
    if ($("[name*='node']").prop("checked")) {
      total += 100;
      $("[name*='js-libs']").attr("disabled", true);
    }
    // if build tools workshop is checked
    if ($("[name*='build-tools']").prop("checked")) {
      total += 100;
    }
    // if npm workshop is checked
    if ($("[name*='npm']").prop("checked")) {
      total += 100;
    }
    console.log(total);
  })
}
// <fieldset class="activities">
//   <legend>Register for Activities</legend>
//   <label><input type="checkbox" name="all"> Main Conference — $200</label>
//   <label><input type="checkbox" name="js-frameworks"> JavaScript Frameworks Workshop — Tuesday 9am-12pm, $100</label>
//   <label><input type="checkbox" name="js-libs"> JavaScript Libraries Workshop — Tuesday 1pm-4pm, $100</label>
//   <label><input type="checkbox" name="express"> Express Workshop — Tuesday 9am-12pm, $100</label>
//   <label><input type="checkbox" name="node"> Node.js Workshop — Tuesday 1pm-4pm, $100</label>
//   <label><input type="checkbox" name="build-tools"> Build tools Workshop — Wednesday 9am-12pm, $100</label>
//   <label><input type="checkbox" name="npm"> npm Workshop — Wednesday 1pm-4pm, $100</label>
//
// </fieldset>

// Function Calls
otherJobRole();
tShirtInfo();
activityRegistration();
