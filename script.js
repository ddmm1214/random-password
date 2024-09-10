function generateRandomPassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols) {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+~';
    
    let charSet = '';
    if (includeUppercase) charSet += uppercaseChars;
    if (includeLowercase) charSet += lowercaseChars;
    if (includeNumbers) charSet += numberChars;
    if (includeSymbols) charSet += symbolChars;

    if (charSet === '') {
        return '请选择至少一个字符集。';
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charSet.length);
        password += charSet[randomIndex];
    }
    
    return password;
}

function checkPasswordStrength(password) {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[\W_]/.test(password)) strength++;
    
    let strengthText = '';
    switch (strength) {
        case 0:
        case 1:
            strengthText = '非常弱';
            break;
        case 2:
            strengthText = '弱';
            break;
        case 3:
            strengthText = '中';
            break;
        case 4:
            strengthText = '强';
            break;
        case 5:
            strengthText = '非常强';
            break;
    }

    document.getElementById('passwordStrength').textContent = `密码强度: ${strengthText}`;
}

document.getElementById('generateBtn').addEventListener('click', () => {
    const length = parseInt(document.getElementById('length').value, 10);
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSymbols = document.getElementById('symbols').checked;

    const password = generateRandomPassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols);
    document.getElementById('passwordDisplay').textContent = password;
    checkPasswordStrength(password);
});
