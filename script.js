function generateRandomPassword(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~';
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}

document.getElementById('generateBtn').addEventListener('click', () => {
    const length = document.getElementById('length').value;
    const password = generateRandomPassword(parseInt(length, 10));
    document.getElementById('passwordDisplay').textContent = password;
});
