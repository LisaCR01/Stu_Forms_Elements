var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');

$(shoppingFormEl).ready(function() {
    $('.btn').click(function() {
            // If something is written
            if ($('#shopping-input').val().length != 0) {
                //Store previous data
                var x = $('#shopping-list').html();

                // Add typed text in alert container
                var y = 
     `<div class="alert alert-success alert-dismissible fade in">
<a href="#" class="close" data-dismiss="alert" aria-label="close">×</a>
              ` + $('#text').val() + `</div>`;

                //Update
                $('.container').html(y + x);
                //Clear after addition
                $('#text').val("");
            } else alert("Enter some Text!");
        });
    });

//add a items to my shopping list so that I can view them all in one place.

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`

// TODO: Add an event listener to the `shoppingFormEl` to handle submission
