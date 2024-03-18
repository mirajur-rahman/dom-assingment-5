

const discount = document.getElementById('discount');
const totalPrice = document.getElementById('total-price');
const inputField = document.getElementById('textInput');
const applyButton = document.getElementById('apply');
const lastTotal = document.getElementById('total'); 
const purchaseButton = document.getElementById('purchase');

let total = 0;
function handleClick(event) {

    const selectedItemContainer = document.getElementById('create-li');
    const itemName = event.parentNode.childNodes[3].childNodes[3].innerText;
    const li = document.createElement('li');
    li.innerText = itemName;
    selectedItemContainer.appendChild(li);

    const price = event.parentNode.childNodes[3].childNodes[5].innerText.split(" ")[0];
    total = parseFloat(total) + parseFloat(price);

    totalPrice.innerText = total;

    //Enable or disable apply button

    if(total >= 200){
        applyButton.disabled = false;
    }else{
        applyButton.disabled = true;
    }

    if(total >= 1){
        purchaseButton.classList.remove('pointer-events-none');
    }else{
        purchaseButton.classList.add('pointer-events-none');
    }

}


document.getElementById('apply').addEventListener('click', function () {
    if (inputField.value === 'SELL200') {
        let discountAmount = (total * 20) / 100;
        discount.innerText = discountAmount;

        let discountTotal = total - discountAmount;
        lastTotal.innerText = discountTotal;
    }
});

document.getElementById('purchase').addEventListener('click', function(){
    
})

document.getElementById('home').addEventListener('click', function(){
    totalPrice.innerText = '';
    discount.innerText = '';
    lastTotal.innerText = '';
})

