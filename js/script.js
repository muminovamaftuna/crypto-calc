function convert() {
    // Получаем значения из полей ввода
    const amount = document.getElementById('amount').value;
    const rate = document.getElementById('rate').value;
    const currency = document.getElementById('currency').value;
    const crypto = document.getElementById('crypto').value;

    // Проверяем, что все поля заполнены
    if (amount === '' || rate === '') {
        alert('Please fill in all fields');
        return;
    }

    // Конвертируем валюту в криптовалюту
    const cryptoAmount = amount / rate;

    // Выводим результат
    document.getElementById('result').innerHTML = `${amount} ${currency} = ${cryptoAmount.toFixed(8)} ${crypto}`;
}
