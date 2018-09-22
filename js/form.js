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
                $(options[i]).show()
            // the first 3 are puns so hide them now
            } else {
                $(options[i]).hide()
            }
        }
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
})()

