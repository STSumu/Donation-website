function getInputById(id){
    const inputValue=document.getElementById(id).value;
    const inputNumber=parseFloat(inputValue);
    return inputNumber;
}
function getTextValueById(id){
    const textValue=document.getElementById(id).innerText;
    const textNumber=parseFloat(textValue);
    return textNumber;
}
function createTransactionField(amount,donatePlace,date){
    const div=document.createElement('div');
    div.classList.add('border',"border-[#111111]/[0.1]",'p-4','md:p-8','rounded-2xl', 'space-y-4');
    div.innerHTML=`
            <h1 class="text-xl font-bold">${amount} Taka is Donated for ${donatePlace}</h1>
            <p class="font-light text-xs md:text-base opacity-70">Date : ${date}</p>
    `
    document.getElementById('transactions').appendChild(div);
}
