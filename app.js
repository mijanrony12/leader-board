//color change

const ChangeColor = document.getElementById('head-title');
ChangeColor.style.color = 'rgba(230, 24, 91, 1)';

// background color change.
for (let i = 0; i <= 5; i++)
{
    let changeBg = document.getElementsByClassName('player')[ i ];
    changeBg.style.backgroundColor = 'rgba(226, 136, 51, 1)';
}

//add li with button click.
document.getElementById('btn-click').addEventListener('click', function () {
    const li = document.createElement('li');
    li.innerText = 'brand new';
    const parent = document.getElementById('parent');
    parent.appendChild(li);
});

//input feiuld

document.getElementById('click').addEventListener('click', function () {
    let input = document.getElementById('item');
    let getInput = parseInt(input.value);
    getInput = getInput + 1;
    input.value = getInput;
     const getButton = document.getElementById('click');
    if (input.value == 5)
    {
       
        getButton.disabled = true;
    }
    else
    {
        getButton.disabled = false;
    }
});


