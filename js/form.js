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
                $(options[0]).attr('selected', true)
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
                $(options[3]).attr('selected', true)
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
    const targetValue = e.target.value
    const $creditCardInfo = $('#credit-card')
    const $paypalinfo = $('#credit-card').next()
    const $btcInfo = $('#credit-card').next().next().hide()
    console.log(e.target.value)

    if (targetValue === 'select_method') {
        $creditCardInfo.hide()
        $paypalinfo.hide()
        $btcInfo.hide()
    }

    if (targetValue === 'credit card') {
        $creditCardInfo.show()
        $paypalinfo.hide()
        $btcInfo.hide()
    }

    if (targetValue === 'paypal') {
        $creditCardInfo.hide()
        $paypalinfo.show()
        $btcInfo.hide()
    }
    
    if (targetValue === 'bitcoin') {
        $creditCardInfo.hide()
        $paypalinfo.hide()
        $btcInfo.show()
    }
}

// We use an IIFE like this at work for a whole JS document so i'd like to use it here as well
// Only that now I use it for code that needs to be triggered right away
// https://stackoverflow.com/questions/8228281/what-is-the-function-construct-in-javascript
(function() {
    // on pageload set prevent default on form submit
    $('form').on('submit', (e) => {
        e.preventDefault();
    })
    // on pageload add focus to the first input element
    $('#name').focus();
    // when the job role select changes call jobRoleChange function
    $('#title').on('change', jobRoleChange)
    // when the t-shirt design select changes call designChange function
    $('#design').on('change', designChange)
    $('#payment').on('change', paymentSelect)

    $('#credit-card').hide()
    $('#credit-card').next().hide()
    $('#credit-card').next().next().hide()
})()

