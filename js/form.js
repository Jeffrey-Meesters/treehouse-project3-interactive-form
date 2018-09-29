// start at the IIFE at the bottom of this file

const jobRoleChange = (e) => {
    // store target element
    const targetElement = e.target;
    // compare target value with String
    if (targetElement.value === 'other') {
        // show 'other' input
        $('#other-title').show();
    } else {
        // hide 'other' input
        $('#other-title').hide();
        // empty empty it's value
        $('#other-title').val('');
    }
};

const designChange = (e) => {
    // store target element
    const targetElement = e.target;
    // store all possible options
    const options = $('#color option');

    // select the placeholder option and remove it
    $('#placeholder-option').remove();
    // show the colors menu
    $('#color').show();

    // compare target value with String
    if (targetElement.value === 'js puns') {
        // create a loop to loop over options
        for(let i = 0; i < options.length; i += 1) {
            // the first 3 are puns so show them now
            if (i <= 2) {
                // set first option to selected to show it
                $(options[0]).attr('selected', true);
                // set 4th option selection to false so it is not shown
                $(options[3]).attr('selected', false);
                // show options 1 to 3
                $(options[i]).show();
            } else {
                // the last 3 are hearts so hide them now
                $(options[i]).hide();
            }
        }
    // compare target value with String
    } else if (targetElement.value === 'heart js') {
        // create a loop to loop over options
        for(let i = 0; i < options.length; i += 1) {
            // the last 3 are hearts so show them now
            if (i > 2) {
                // set 4th option to selected to show it
                $(options[3]).attr('selected', true);
                // set first option selection to false so it is not shown
                $(options[0]).attr('selected', false);
                // show options 4 to 6
                $(options[i]).show();
            } else {
                // the first 3 are puns so hide them now
                $(options[i]).hide();
            }
        }
    } else if (targetElement.value === 'Select Theme') {
        // if the user puts the design selection back on 'Select Theme'
        //  hide all options
        for(let i = 0; i < options.length; i += 1) {
            $(options[i]).hide();
        }
        // append the placeholder
        $('#color').append('<option value="" id="placeholder-option" disabled selected>Please select a T-shirt theme</option>');
        // for exceeds expectations grade hide it
        $('#color').hide();

        // and put the default message back in the color field
        const colorLabel = $('#color').prev();
        const colorPlaceHolder = '<div id="placeholder-option" disabled selected>Please select a T-shirt theme</div>';
        $(colorPlaceHolder).insertAfter(colorLabel);
    }
};

const paymentSelect = (e) => {
    //  get click targets value
    const targetValue       = e.target.value;
    //  store creditcard element
    const $creditCardInfo   = $('#credit-card');
    // store sibeling of creditcard element
    const $paypalinfo       = $('#credit-card').next();
    // store the sibeling of the sibeling of creditcard element
    // (I think it is better to read this than chaining it of from paypalinfo)
    const $btcInfo          = $('#credit-card').next().next();

    // show creditcard options nothing else
    if (targetValue === 'credit card') {
        $creditCardInfo.show();
        $paypalinfo.hide();
        $btcInfo.hide();
    }

    // show paypal message nothing else
    if (targetValue === 'paypal') {
        $creditCardInfo.hide();
        $paypalinfo.show();
        $btcInfo.hide();
    }

    // show bitcoin message nothing else
    if (targetValue === 'bitcoin') {
        $creditCardInfo.hide();
        $paypalinfo.hide();
        $btcInfo.show()
    }
};

const checkboxChange = () => {
    // get all checkboxes
    const allCheckBoxes = $('input[type=checkbox]');

    // create empty array so we can store checked checkbox name values
    let arrayOfCheckedBoxes = [];
    let price = 0;
    // loop over all checkboxes
    allCheckBoxes.each(function(index) {
        // if checkbox is checked
        if ($(allCheckBoxes[index]).is(':checked')) {
            // push its name attribute value to the arrayOfCheckedBoxes
            arrayOfCheckedBoxes.push($(allCheckBoxes[index]).attr('name'))
        }
    });

    // loop over all checked checkboxes
    for(let i = 0; i < arrayOfCheckedBoxes.length; i += 1) {
        // if the checkbox is 'all' price + 200
        if (arrayOfCheckedBoxes[i] === 'all') {
            price += 200
        // else price + 100
        } else {
            price += 100
        }
    }

    // if price is not 0
    if (price) {
        // create an element holding the price value
        const priceShow = $(`<p id="price-show">Total: $${price}</p>`);
        // remove an existing price-show element
        $('#price-show').remove();
        // append the new price-show element
        $('.activities').append(priceShow)
    } else {
        // if price is 0 remove the price-show element
        $('#price-show').remove()
    }


    // START: check if name of activity is in arrayOfCheckedBoxes
    // the inArray method looks if the given value exists in the erray if so it returns it's index
    // else it returns -1, so if the value is bigger than -1 it is in the array

    // if js-frameworks then express needs to be disabled and vice versa
    if ($.inArray('js-frameworks', arrayOfCheckedBoxes) > -1 ) {

        // how to select with name values: https://www.w3schools.com/jquery/sel_attribute_contains_value.asp
        // set the parents (label) class to disabled as I found out that the disabled attribute does not work on labels
        // so I needed to use a class, both disabled states are styled in style.css
        $("input[name~='express']").attr('disabled', true).parent().attr('class', 'disabled')
    } else {
        $("input[name~='express']").attr('disabled', false).parent().attr('class', '')
    }

    if ($.inArray('express', arrayOfCheckedBoxes) > -1 ) {
        $("input[name~='js-frameworks']").attr('disabled', true).parent().attr('class', 'disabled')
    } else {
        $("input[name~='js-frameworks']").attr('disabled', false).parent().attr('class', '')
    }

    // if js-libs then node needs to be disabled and vice versa
    if ($.inArray('js-libs', arrayOfCheckedBoxes) > -1 ) {
        $("input[name~='node']").attr('disabled', true).parent().attr('class', 'disabled')
    } else {
        $("input[name~='node']").attr('disabled', false).parent().attr('class', '')
    }

    if ($.inArray('node', arrayOfCheckedBoxes) > -1 ) {
        $("input[name~='js-libs']").attr('disabled', true).parent().attr('class', 'disabled')
    } else {
        $("input[name~='js-libs']").attr('disabled', false).parent().attr('class', '')
    }
    // END: check if name of activity is in arrayOfCheckedBoxes //
};

// declare hasEmailError variable so it does not reset on function call
// hasEmailError is also used in form validation
let hasEmailError;
const validateEmail = (e) => {
    const email = e.target.value;
    // I knew I needed regex so looked up an email format: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // test the input format
    const correctEmail = regex.test(email);

    // if there is not an error yet AND email addres is incorrect append error
    if(!hasEmailError && !correctEmail) {
        // if there is an error with this class remove it
        // e.g.: the user tried to submit an empty mail input then this error class would exist
        $('.email-error-msg').remove();
        // get the label of mail input which is the previous sibling
        const label = $('#mail').prev();
        // create an error message
        const errorMsg = '<div class="email-error-msg error-msg">email-address is not valid yet</div>';
        // inset the error message after the label
        $(errorMsg).insertAfter(label);
        // set hasEmailerror to true, so next time this part will not run
        hasEmailError = true;
    } 

    // if email is correct or empty, remove error
    if (correctEmail || email === '') {
        $('.email-error-msg').remove();
        // set hasEmailError to false so when the user empties the mail input
        // validation/appending error message can happen again
        hasEmailError = false; 
    }
}

const validateForm = (e) => {
    if (hasEmailError) {
        e.preventDefault()
        // nothing else than preventing submission needs to happen
        // because the validateEmail function has put an error near the field
        // add this point html5 is ALSO validating the email field
    }
    // store elements
    const user_name = $("input[name~='user_name']");
    const email_address = $("input[name~='user_email']");
    const paymentSelection = $("select[name~='user_payment']");
    const checkedBoxes = $("input[type='checkbox']:checked");
    const errored = $('.error-msg');

    // If there are existing error tags remove them
    // the rest of this script will restore the error tags if any errors are found
    // this way the user only sees errors that are after the new form submit
    if (errored) {
        for(let i = 0; i < errored.length; i += 1) {
            errored[i].remove();
        }
    }

    if (paymentSelection.val() === 'credit card') {
        // store CC elements
        // store CC values of CC elements
        const creditNumber = $("input[name~='user_cc-num']");
        const creditNumValue = $(creditNumber).val();
        
        const zipcode = $("input[name~='user_zip']");
        const zipCodeValue = zipcode.val();
        
        const cvvCode = $("input[name~='user_cvv']")
        const cvvCodeValue = cvvCode.val();

        // isNaN checks if a value is a number or string and returns a boolean
        if (isNaN(creditNumValue)) {
            e.preventDefault();
            // get the label of the input which is the previous sibling
            const label = $(creditNumber).prev();
            // create an error message
            const errorMsg = '<div class="error-msg">You did not provide a number between 13 and 16 digits</div>';
            // insert the errormassage after the label
            $(errorMsg).insertAfter(label);
        }
        if (isNaN(zipCodeValue)) {
            e.preventDefault();
            const label = $(zipcode).prev();
            const errorMsg = '<div class="error-msg">You did not provide a number of 5 digits</div>';
            $(errorMsg).insertAfter(label);
        }
        if (isNaN(cvvCodeValue)) {
            e.preventDefault();
            const label = $(cvvCode).prev();
            const errorMsg = '<div class="error-msg">You did not provide a number of 3 digits</div>';
            $(errorMsg).insertAfter(label);
        }

        if (creditNumValue === '') {
            e.preventDefault();
            // ask user to give cc number
            const label = $(creditNumber).prev();
            const errorMsg = '<div class="error-msg">Please give your CC number</div>';
            $(errorMsg).insertAfter(label);
        } else {
            // check for valid number
            // between 13 and 16 numbers
            if (creditNumValue.length < 13 && !isNaN(creditNumValue) || creditNumValue.length > 16 && !isNaN(creditNumValue)) {
                e.preventDefault();
                const label = $("input[name~='user_cc-num']").prev();
                const errorMsg = '<div class="error-msg">Must be a number between 13 and 16 digits</div>';
                $(errorMsg).insertAfter(label);
            }
        }

        if (!zipCodeValue) {
            e.preventDefault();
            // ask user for zipcode
            const label = $(zipcode).prev();
            const errorMsg = '<div class="error-msg">Please give your zip code</div>';
            $(errorMsg).insertAfter(label);
        } else {
            // check for valid zipcode
            // 5 numbers
            if (zipCodeValue.length !== 5 && !isNaN(zipCodeValue)) {
                e.preventDefault();
                const label = $(zipcode).prev();
                const errorMsg = '<div class="error-msg">Must be a number of 5 digits</div>';
                $(errorMsg).insertAfter(label);
            }
        }

        if (!cvvCodeValue) {
            e.preventDefault();
            // ask user for ccvCode
            const label = $(cvvCode).prev();
            const errorMsg = '<div class="error-msg">Please give your CVV</div>';
            $(errorMsg).insertAfter(label);
        } else {
            // check for valid ccvCode
            // 3 numbers
            if (cvvCodeValue.length !== 3 && !isNaN(cvvCodeValue)) {
                e.preventDefault();
                const label = $(cvvCode).prev();
                const errorMsg = '<div class="error-msg">Must be a number of 3 digits</div>';
                $(errorMsg).insertAfter(label);
            }
        }
    }


    if(user_name.val() === '') {
        e.preventDefault();
        const errorCheck = $('.name-error-msg');
        if (errorCheck.length === 0) {
            const label = $('#name').prev();
            const errorMsg = '<div class="name-error-msg error-msg">Please provide your name</div>';
            $(errorMsg).insertAfter(label);
        }
    } else {
        $('.name-error-msg').remove();
    }

    if (email_address.val() === '') {
        e.preventDefault();
        const errorCheck = $('.email-error-msg');
        if (errorCheck.length === 0) {
            const label = $('#mail').prev();
            const errorMsg = '<div class="email-error-msg error-msg">Please provide an email address</div>';
            $(errorMsg).insertAfter(label);
        }
    } else {
        $('.email-error-msg').remove();
    }

    if (checkedBoxes.length == 0) {
        e.preventDefault();
        // ask user to choose at leas 1 activity
        const errorCheck = $('.checkbox-error-msg');
        if (errorCheck.length === 0) {
            const legend = $('.activities legend');
            const errorMsg = '<div class="checkbox-error-msg error-msg">Please choose at least 1 activity</div>';
            $(errorMsg).insertAfter(legend);
        }
    } else {
        $('.checkbox-error-msg').remove();
    }
};

const hideColorOptions = () => {
    // hide all color options
    const options = $('#color option');
    for(let i = 0; i < options.length; i += 1 ) {
        $(options[i]).hide();
    }
    // Add an option to show the user he/she has to select a theme first
    $('#color').append('<option value="" id="placeholder-option" disabled selected>Please select a T-shirt theme</option>');
}

// When I was not sure about existing Jquery methods I looked up Jquery documentation
// If I used something from stack overflow I have mentioned it once near the code I first used it
// We use an IIFE like this at work for a whole JS document so i'd like to use it here as well
// Only that now I use it for code that needs to be triggered/set-up right away
// https://stackoverflow.com/questions/8228281/what-is-the-function-construct-in-javascript
(function() {
    // on pageload add focus to the name input element
    $('#name').focus();
    // on form submit validate form
    $('form').on('submit', validateForm);

    // on email input validate input
    $('#mail').on('input', validateEmail);

    // hide the 'other' job role input option
    $('#other-title').hide();
    // when the job role select changes call jobRoleChange function
    $('#title').on('change', jobRoleChange);

    // so down here I have a color OPTIONS hide function for the Meets expectation grade
    // for the exceeds expectations grade however i need to hide it
    // So I hide the options here, but keep the 'old' functionality for to prove it's there (user will probably never see this, because it is hidden)
    $('#color').hide();
    // get the label which is a sibling of the #color
    const colorLabel = $('#color').prev();
    // create an element with text
    const colorPlaceHolder = '<div id="placeholder-option" disabled selected>Please select a T-shirt theme</div>';
    // insert it after the label
    $(colorPlaceHolder).insertAfter(colorLabel);

    //The hide color option for the meets expectations grade
    hideColorOptions();

    // when the t-shirt design select changes call designChange function
    $('#design').on('change', designChange);

    // hide all payment options except for the creditcard as that is choosen by default
    // paypal
    $('#credit-card').next().hide();
    // bitcoin
    $('#credit-card').next().next().hide();
    // when the payment options select changes call paymentSelect function
    $('#payment').on('change', paymentSelect);

    // listen for checkbox un-/checking
    $('input[type=checkbox]').on('change', checkboxChange)
})();

