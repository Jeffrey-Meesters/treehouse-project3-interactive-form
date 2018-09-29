const jobRoleChange = (e) => {
    // store target element
    const targetElement = e.target;
    // compare target value with String
    if (targetElement.value === 'other') {
        $('#other-title').show();
    } else {
        $('#other-title').hide();
        $('#other-title').val('');
    }
};

const designChange = (e) => {
    // store target element
    const targetElement = e.target;
    // store all possible options
    const options = $('#color option');
    const placeholderOption = $('#placeholder-option');
    $(placeholderOption).remove();
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
                $(options[i]).show();
            // the last 3 are hearts so hide them now
            } else {
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
                $(options[i]).show();
            // the first 3 are puns so hide them now
            } else {
                $(options[i]).hide();
            }
        }
    } else if (targetElement.value === 'Select Theme') {
        for(let i = 0; i < options.length; i += 1) {
            $(options[i]).hide();
        }
        $('#color').append('<option value="" id="placeholder-option" disabled selected>Please select a T-shirt theme</option>');
        $('#color').hide();
    }
};

const paymentSelect = (e) => {
    //  get click targets value
    const targetValue       = e.target.value;
    // store al paymeny options
    const paymentOptions    = $('#payment option');
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

    // create empty array so we can store checkbox name values
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

    for(let i = 0; i < arrayOfCheckedBoxes.length; i += 1) {
        if (arrayOfCheckedBoxes[i] === 'all') {
            price += 200
        } else {
            price += 100
        }
    }

    if (price) {
        const priceShow = $(`<p id="price-show">Total: $${price}</p>`);
        $('#price-show').remove();
        $('.activities').append(priceShow)
    } else {
        $('#price-show').remove()
    }


    // START: check if name of activity is in arrayOfCheckedBoxes //
    // the inArray method looks if the given value exists in the erray if so it returns it's index
    // else it returns -1, so if the value is bigger than -1 it is in the array

    // if js-frameworks then express needs to be disabled and vice versa
    if ($.inArray('js-frameworks', arrayOfCheckedBoxes) > -1 ) {

        // how to select with name values: https://www.w3schools.com/jquery/sel_attribute_contains_value.asp
        $("input[name~='express']").attr('disabled', true);
        // set the parents (label) class to disabled as I found out that the disabled attribute does not work on labels
        // I needed to use a class, both disabled states are styled in style.css
        $("input[name~='express']").parent().attr('class', 'disabled')
    } else {
        $("input[name~='express']").attr('disabled', false);
        $("input[name~='express']").parent().attr('class', '')
    }

    if ($.inArray('express', arrayOfCheckedBoxes) > -1 ) {
        $("input[name~='js-frameworks']").attr('disabled', true);
        $("input[name~='js-frameworks']").parent().attr('class', 'disabled')
    } else {
        $("input[name~='js-frameworks']").attr('disabled', false);
        $("input[name~='js-frameworks']").parent().attr('class', '')
    }

    // if js-libs then node needs to be disabled and vice versa
    if ($.inArray('js-libs', arrayOfCheckedBoxes) > -1 ) {
        $("input[name~='node']").attr('disabled', true);
        $("input[name~='node']").parent().attr('class', 'disabled')
    } else {
        $("input[name~='node']").attr('disabled', false);
        $("input[name~='node']").parent().attr('class', '')
    }

    if ($.inArray('node', arrayOfCheckedBoxes) > -1 ) {
        $("input[name~='js-libs']").attr('disabled', true);
        $("input[name~='js-libs']").parent().attr('class', 'disabled')
    } else {
        $("input[name~='js-libs']").attr('disabled', false);
        $("input[name~='js-libs']").parent().attr('class', '')
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
        $('.email-error-msg').remove();
        const label = $('#mail').prev();
        const errorMsg = '<div class="email-error-msg">email-address is not valid yet</div>';
        $(errorMsg).insertAfter(label);
        hasEmailError = true;
    } 

    // if email is correct or empty, remove error
    if (correctEmail || email === '') {
        $('.email-error-msg').remove();
        hasEmailError = false; 
    }
}

const validateForm = (e) => {
    const user_name = $("input[name~='user_name']").val();
    const email_address = $("input[name~='user_email']").val();
    const paymentSelection = $("select[name~='user_payment']").val();
    const checkedBoxes = $("input[type='checkbox']:checked").length;
    const errored = $('.error-msg');

    // If there are error existing tags remove them
    if (errored) {
        for(let i = 0; i < errored.length; i += 1) {
            errored[i].remove();
        }
    }

    if (paymentSelection === 'credit card') {
        const creditNumber = $("input[name~='user_cc-num']").val();
        const zipCode = $("input[name~='user_zip']").val();
        const cvvCode = $("input[name~='user_cvv']").val();

        if (isNaN(creditNumber)) {
            e.preventDefault();
            const label = $("input[name~='user_cc-num']").prev();
            const errorMsg = '<div class="error-msg">You did not provide a number between 13 and 16 digits</div>';
            $(errorMsg).insertAfter(label);
        }
        if (isNaN(zipCode)) {
            e.preventDefault();
            const label = $("input[name~='user_zip']").prev();
            const errorMsg = '<div class="error-msg">You did not provide a number of 5 digits</div>';
            $(errorMsg).insertAfter(label);
        }
        if (isNaN(cvvCode)) {
            e.preventDefault();
            const label = $("input[name~='user_cvv']").prev();
            const errorMsg = '<div class="error-msg">You did not provide a number of 3 digits</div>';
            $(errorMsg).insertAfter(label);
        }

        if (!creditNumber) {
            e.preventDefault();
            // ask user to give cc number
            const label = $("input[name~='user_cc-num']").prev();
            const errorMsg = '<div class="error-msg">Please give your CC number</div>';
            $(errorMsg).insertAfter(label);
        } else {
            // check for valid number
            // between 13 and 16 numbers
            if (creditNumber.length < 13 && !isNaN(creditNumber) || creditNumber.length > 16 && !isNaN(creditNumber)) {
                e.preventDefault();
                const label = $("input[name~='user_cc-num']").prev();
                const errorMsg = '<div class="error-msg">Must be a number between 13 and 16 digits</div>';
                $(errorMsg).insertAfter(label);
            }
        }

        if (!zipCode) {
            e.preventDefault();
            // ask user for zipcode
            const label = $("input[name~='user_zip']").prev();
            const errorMsg = '<div class="error-msg">Please give your zip code</div>';
            $(errorMsg).insertAfter(label);
        } else {
            // check for valid zipcode
            // 5 numbers
            if (zipCode.length !== 5 && !isNaN(zipCode)) {
                e.preventDefault();
                const label = $("input[name~='user_zip']").prev();
                const errorMsg = '<div class="error-msg">Must be a number of 5 digits</div>';
                $(errorMsg).insertAfter(label);
            }
        }

        if (!cvvCode) {
            e.preventDefault();
            // ask user for ccvCode
            const label = $("input[name~='user_cvv']").prev();
            const errorMsg = '<div class="error-msg">Please give your CVV</div>';
            $(errorMsg).insertAfter(label);
        } else {
            // check for valid ccvCode
            // 3 numbers
            if (cvvCode.length !== 3 && !isNaN(cvvCode)) {
                e.preventDefault();
                const label = $("input[name~='user_cvv']").prev();
                const errorMsg = '<div class="error-msg">Must be a number of 3 digits</div>';
                $(errorMsg).insertAfter(label);
            }
        }
    }


    if(!user_name) {
        e.preventDefault();
        $("input[name~='user_name']").css({'border': '2px solid #f00'})
    } else {
        $("input[name~='user_name']").css({'border': '0px'})
    }

    if (!email_address) {
        e.preventDefault();
        const errorCheck = $('.email-error-msg');
        if (errorCheck.length === 0) {
            const label = $('#mail').prev();
            const errorMsg = '<div class="email-error-msg">Please provide an email address</div>';
            $(errorMsg).insertAfter(label);
        }
    } else {
        $("input[name~='user_email']").css({'border': '0px'})
    }

    if (checkedBoxes == 0) {
        e.preventDefault();
        $(".activities").css({'border': '2px solid #f00'})
        // ask user to choose at leas 1 activity
    } else {
        $(".activities").css({'border': '0px'})
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

// We use an IIFE like this at work for a whole JS document so i'd like to use it here as well
// Only that now I use it for code that needs to be triggered/set-up right away
// https://stackoverflow.com/questions/8228281/what-is-the-function-construct-in-javascript
(function() {
    // on pageload add focus to the first input element
    $('#name').focus();
    // on pageload set prevent default on form submit
    $('form').on('submit', validateForm);

    $('#mail').on('input', validateEmail);

    $('#other-title').hide();
    // when the job role select changes call jobRoleChange function
    $('#title').on('change', jobRoleChange);

    // so down here I have a color options hide function for the expectation grade
    // for the exceeds expectations grade however i need to hide it
    // So I hide it here, but keep the 'old' functionality for to prove it's there
    $('#color').hide();
    //Hide color option
    hideColorOptions();

    // when the t-shirt design select changes call designChange function
    $('#design').on('change', designChange);

    // hide all payment options except for the creditcard as that is choosen by default
    $('#credit-card').next().hide();
    $('#credit-card').next().next().hide();
    // when the payment options select changes call paymentSelect function
    $('#payment').on('change', paymentSelect);

    // listen for checkbox un-/checking
    $('input[type=checkbox]').on('change', checkboxChange)
})();

