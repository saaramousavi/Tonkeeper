//1-variable 
const connectWalletButton = document.getElementById('connectWallet');
// 2-AddEventListener
connectWalletButton.addEventListener('click', function () {
//3-Alert
    alert('Connecting to TON wallet...');
//4-logic
    window.location.href = 'https://tonkeeper.com/';
});