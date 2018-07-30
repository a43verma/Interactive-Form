document.addEventListener('DOMContentLoaded', () => {

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

$('.basic').append(createInput);
$('#job').hide();

// Acknowledges the "other" job role
$("#title").on("change", function () {
  if (this.value === "other") {
    $('#job').show();
  } else {
    $('#job').hide();
  }
});

})
