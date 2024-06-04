document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('name');

    nameInput.addEventListener('input', (event) => {
        const value = event.target.value;
        const regex = /^[A-Za-zА-Яа-яЁё\s]+$/;
        
        if (!regex.test(value)) {
            event.target.value = value.replace(/[^A-Za-zА-Яа-яЁё\s]/g, '');
        }
    });
});
