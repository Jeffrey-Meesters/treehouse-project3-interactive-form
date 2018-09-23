const jobRoleChange = (e) => {
    // store target element
    const targetElement = e.target
    // compare target value with String
    if (targetElement.value === 'other') {
        // create textInput html
        const textInput = '<br><input name="user_other_title" placeholder="Your job role">'
        // get the parent of the select field which is fieldset
        // append the textInput
        $(targetElement).parent().append(textInput)
    }
}

const designChange = (e) => {
    // store target element
    const targetElement = e.target
    // store all possible options
    const options = $('#color option')

    // compare target value with String
    if (targetElement.value === 'js puns') {
        // create a loop to loop over options
        for(let i = 0; i < options.length; i += 1) {
            // the first 3 are puns so show them now
            if (i <= 2) {
                // set first option to selected to show it
                $(options[0]).attr('selected', true)
                // set 4th option selection to false so it is not shown
                $(options[3]).attr('selected', false)
                $(options[i]).show()
            // the last 3 are hearts so hide them now 
            } else {
                $(options[i]).hide()
            }
        }
    // compare target value with String
    } else if (targetElement.value === 'heart js') {
        // create a loop to loop over options
        for(let i = 0; i < options.length; i += 1) {
            // the last 3 are hearts so show them now
            if (i > 2) {
                // set 4th option to selected to show it
                $(options[3]).attr('selected', true)
                // set first option selection to false so it is not shown
                $(options[0]).attr('selected', false)
                $(options[i]).show()
            // the first 3 are puns so hide them now
            } else {
                $(options[i]).hide()
            }
        }
    }
}

const paymentSelect = (e) => {
    //  get click targets value
    const targetValue       = e.target.value
    //  store creditcard element
    const $creditCardInfo   = $('#credit-card')
    // store sibeling of creditcard element
    const $paypalinfo       = $('#credit-card').next()
    // store the sibeling of the sibeling of creditcard element 
    // (I think it is better to read this than chaining it of from paypalinfo)
    const $btcInfo          = $('#credit-card').next().next()
    console.log(e.target.value)

    // if this option is selected there is no payment option selected
    if (targetValue === 'select_method') {
        $creditCardInfo.hide()
        $paypalinfo.hide()
        $btcInfo.hide()
    }

    // show creditcard options nothing else
    if (targetValue === 'credit card') {
        $creditCardInfo.show()
        $paypalinfo.hide()
        $btcInfo.hide()
    }

    // show paypal message nothing else
    if (targetValue === 'paypal') {
        $creditCardInfo.hide()
        $paypalinfo.show()
        $btcInfo.hide()
    }
    
    // show bitcoin message nothing else
    if (targetValue === 'bitcoin') {
        $creditCardInfo.hide()
        $paypalinfo.hide()
        $btcInfo.show()
    }
}

const checkboxChange = () => {
    // get all checkboxes
    const allCheckBoxes = $('input[type=checkbox]')
    // create empty array
    let arrayOfCheckedBoxes = []
    
    // loop over all checkboxes
    allCheckBoxes.each(function(index) {
        // if checkbox is checked
        if ($(allCheckBoxes[index]).is(':checked')) {
            // push its name attribute value to the arrayOfCheckedBoxes 
            arrayOfCheckedBoxes.push($(allCheckBoxes[index]).attr('name'))
        }
    })

    // START: check if name of activity is in arrayOfCheckedBoxes //
    // the inArray method looks if the given value exists in the erray if so it returns it's index
    // else it returns -1, so if the value is bigger than -1 it is in the array

    // if js-frameworks then express needs to be disabled and vice versa 
    if ($.inArray('js-frameworks', arrayOfCheckedBoxes) > -1 ) {
        $("input[name~='express']").attr('disabled', true)
        $("input[name~='express']").parent().attr('class', 'disabled')
    } else {
        $("input[name~='express']").attr('disabled', false)
        $("input[name~='express']").parent().attr('class', '')
    }

    if ($.inArray('express', arrayOfCheckedBoxes) > -1 ) {
        $("input[name~='js-frameworks']").attr('disabled', true)
        $("input[name~='js-frameworks']").parent().attr('class', 'disabled')
    } else {
        $("input[name~='js-frameworks']").attr('disabled', false)
        $("input[name~='js-frameworks']").parent().attr('class', '')
    }

    // if js-libs then node needs to be disabled and vice versa
    if ($.inArray('js-libs', arrayOfCheckedBoxes) > -1 ) {
        $("input[name~='node']").attr('disabled', true)
        $("input[name~='node']").parent().attr('class', 'disabled')
    } else {
        $("input[name~='node']").attr('disabled', false)
        $("input[name~='node']").parent().attr('class', '')
    }

    if ($.inArray('node', arrayOfCheckedBoxes) > -1 ) {
        $("input[name~='js-libs']").attr('disabled', true)
        $("input[name~='js-libs']").parent().attr('class', 'disabled')
    } else {
        $("input[name~='js-libs']").attr('disabled', false)
        $("input[name~='js-libs']").parent().attr('class', '')
    }

    // END: check if name of activity is in arrayOfCheckedBoxes //
}

// We use an IIFE like this at work for a whole JS document so i'd like to use it here as well
// Only that now I use it for code that needs to be triggered right away
// https://stackoverflow.com/questions/8228281/what-is-the-function-construct-in-javascript
(function() {
    // on pageload add focus to the first input element
    $('#name').focus();
    // on pageload set prevent default on form submit
    $('form').on('submit', (e) => {
        e.preventDefault();
    })
    // when the job role select changes call jobRoleChange function
    $('#title').on('change', jobRoleChange)
    // when the t-shirt design select changes call designChange function
    $('#design').on('change', designChange)

    // hide all payment options
    $('#credit-card').hide()
    $('#credit-card').next().hide()
    $('#credit-card').next().next().hide()
    // when the payment options select changes call paymentSelect function
    $('#payment').on('change', paymentSelect)

    // listen for checkbox un-/checking
    $('input[type=checkbox]').on('change', checkboxChange)
})()

