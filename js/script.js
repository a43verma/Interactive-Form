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

function tShirtInfo () {
  $('#design').on("change", function () {
    if (this.value === "js puns") {
      $('#color option').eq(0).attr('selected', true);
      for (let i = 0; i < 3; i ++) {
        $('#color option').eq(i).show();
      }
      for (let i = 3; i < 6; i ++) {
        $('#color option').eq(i).hide();
      }
    } else if (this.value === "heart js") {
      $('#color option').eq(3).attr('selected', true);
      for (let i = 0; i < 3; i ++) {
        $('#color option').eq(i).hide();
      }
      for (let i = 3; i < 6; i ++) {
        $('#color option').eq(i).show();
      }
    } else {
      for (let i = 0; i < 6; i ++) {
        $('#color option').eq(i).show();
        $('#color option').eq(0).attr('selected', true);
      }
    }
  })

  // <div>
  //   <label for="design">Design:</label>
  //   <select id="design" name="user_design">
  //     <option>Select Theme</option>
  //     <option value="js puns">Theme - JS Puns</option>
  //     <option value="heart js">Theme - I &#9829; JS</option>
  //   </select>
  // </div>
  //
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
}

// Function Calls
otherJobRole();
tShirtInfo();
