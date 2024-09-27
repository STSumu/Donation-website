// input value taking functions
function getInputValueById(id){
    const inputValue=document.getElementById(id).value;
    const inputNumber=parseFloat(inputValue);
    return inputNumber;
}

// text value taking functions
function getTextValueById(id){
    const textValue=document.getElementById(id).innerText;
    const textNumber=parseFloat(textValue);
    return textNumber;
}

// transactions field creation functions 
function createTransactionField(amount,donatePlace,date){
    const div=document.createElement('div');
    div.classList.add('border',"border-[#111111]/[0.1]",'p-4','md:p-8','rounded-2xl', 'space-y-4');
    div.innerHTML=`
            <h1 class="text-xl font-bold">${amount} Taka is Donated for ${donatePlace}</h1>
            <p class="font-light text-xs md:text-base opacity-70">Date : ${date}</p>
    `
    document.getElementById('transactions').appendChild(div);
}

// donation function 
function donate(donateButton,InputField,donatePlaceBalance){
    document.getElementById(donateButton).addEventListener('click',function(event){

        //   prevent the default 
          event.preventDefault();
    
    // get the main account balance 
          const balance=getTextValueById('account-balance');
        
        //   get donate place balance and input amount 
          const donateAmount=getInputValueById(InputField);
          const placeBalance=getTextValueById(donatePlaceBalance);
          
          if(isNaN(donateAmount)){
            alert("Invalid Input!Try again.");
            return;
          }
          //   set the main Account balance 
          const newAccountBalance=balance-donateAmount;

        //   check if can donate or not 
          if(newAccountBalance < 0){
            alert("Insufficient Balance.");
            return;
          }
          document.getElementById('account-balance').innerText=newAccountBalance;

          //   set the new balance in the donate place 
          const newBalance=donateAmount+placeBalance;
          document.getElementById(donatePlaceBalance).innerText=newBalance;
          
        // //   show transactions 
        // show Modal 
        document.getElementById('my_modal_4').showModal();
        // date 
        const today=new Date();
        const date=today.toString();
        let donatePlace;
        // place 
        if(donateButton === 'noakhali-donate-btn'){
            donatePlace='Flood Relief in Noakhali,Bangladesh';
        }
        else if(donateButton === 'feni-donate-btn'){
            donatePlace='famine-2024 at Feni, Bangladesh';
        }
        else if(donateButton === 'quota-donate-btn'){
            donatePlace='Aid for Injured in the Quota Movement, Bangladesh';
        }
        createTransactionField(donateAmount,donatePlace,date);
    })
}
