$(document).ready(onReady);

function onReady() {
    console.log($('#newPlantBtn'));
    //$('#newPlantBtn').on('click', onNewPlant);
    $(document).on('click', '#newPlantBtn', onNewPlant);

    // Remove a plant from the list
    // when the delete button is clicked
    // $('.deleteBtn').on('click', onDeletePlant); // 👈 doesn't work!

    // Listen for clicks anywhere on the DOM
    // Then check if we're clicking on a .deleteBtn element
    // before running `onDeletePlant()`
    //
    // "Event Delegation"
    // "Using the descendent selector"
    $(document).on('click', '.deleteBtn', onDeletePlant);

    $(document).on('click', '.growBtn', onGrow);
}

function onGrow() {
    $(this).parent().addClass('bigPlant').addClass('yolo');
}

function onDeletePlant() {
    // `this` is the DOM element that the event happened to
    console.log('buh-bye cruel world 😿', this);

    // Remove this plant from the DOM
    $(this).parent().remove();
}

function onNewPlant() {
    console.log('new plant 🌱');

    // I want to....
    // grab the value of my <input>
    // save it to a variable (string)
    let plantName = $('#plantNameInput').val();
    console.log(plantName);

    // and render it in a <li> on the DOM
    $('#plantList').append(`
        <li>
            ${plantName}
            <button class="deleteBtn">
                Delete
            </button>
            <button class="growBtn">
                Grow 🆙
            </button>
        </li>
    `);

    // Reset the new plant input
    $('#plantNameInput').val('').focus();
}