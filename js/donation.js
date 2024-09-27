// toggle between donation and history page 
// donation button work 
document.getElementById('donation-btn').addEventListener('click',function(){
    document.getElementById('transactions').classList.add('hidden');
    document.getElementById('card-container').classList.remove('hidden');
    document.getElementById('donation-btn').classList.add('bg-button-bg');
    document.getElementById('donation-btn').classList.remove('bg-white','border','border-[#111111]/[0.1]');
    document.getElementById('history-btn').classList.remove('bg-button-bg');
    document.getElementById('history-btn').classList.add('bg-white','border','border-[#111111]/[0.1]');
})
// history button Work 
document.getElementById('history-btn').addEventListener('click',function(){
    document.getElementById('transactions').classList.remove('hidden');
    document.getElementById('card-container').classList.add('hidden');
    document.getElementById('donation-btn').classList.remove('bg-button-bg');
    document.getElementById('donation-btn').classList.add('bg-white','border','border-[#111111]/[0.1]');
    document.getElementById('history-btn').classList.remove('bg-white','border','border-[#111111]/[0.1]');
    document.getElementById('history-btn').classList.add('bg-button-bg');

})

// add event to nokhali donate button 
donate('noakhali-donate-btn','noakhali-donate-amount','noakhali-balance');
donate('feni-donate-btn','feni-donate-amount','feni-balance');
donate('quota-donate-btn','quota-donate-amount','quota-balance');

