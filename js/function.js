

const discount = document.getElementById('discount');
const totalPrice = document.getElementById('total-price');
const inputField = document.getElementById('textInput');

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

   

    return totalPrice;

}





document.getElementById('apply').addEventListener('click', function () {
    if (totalPrice >= 200) {
        apply.disabled = false;

        if (inputField.value === 'SELL200') {
            let discountAmount = (totalPrice * 20) / 100;
            let discountTotal = totalPrice - discountAmount;
            discount.innerText = discountTotal;
    
        }
    } 
    else {
        apply.disabled = true;
    }
    




})


