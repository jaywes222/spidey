const input = document.getElementById('link-input');
const linkForm = document.getElementById('link-form');
const errMSg = document.getElementById('err-msg');

linkForm.addEventListener('submit', formSubmit);

// Validate a URL
function validURL(str) {
    var pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
        '((\\d{1,3}\\.){3}\\d{1,3}))' +
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
        '(\\?[;&a-z\\d%_.~+=-]*)?' +
        '(\\#[-a-z\\d_]*)?$',
        'i'
    )
    return !!pattern.test(str)
}

function formSubmit(e) {
    e.preventDefault();
    
    if (input.value === '') {
        errMSg.innerHTML = "Please Enter A Link";
        input.classList.add('border-red');
    } else if (!validURL(input.value)) {
        errMSg.innerHTML = 'Please Enter a Valid URL'
        input.classList.add('border-red')
    } else {
        errMSg.innerHTML = ''
        input.classList.remove('border-red')
        alert('Success')
    };
}