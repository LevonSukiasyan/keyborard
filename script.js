const keys = document.querySelectorAll('.key');
const result = document.querySelector('.result');
const deleteButton = document.querySelector('.delete')

deleteButton.addEventListener('click', function () {
    result.value = result.value.slice(0,- 1)
}) 

const keyFunc = (elem) => {
    if(elem.className === 'key space') {
        result.value += ' '
    } else if(elem.textContent.length === 1) {
        result.value += elem.textContent
    }
}

keys.forEach(key => {
    key.addEventListener('click', function () {
        keyFunc(this)
    });
});

