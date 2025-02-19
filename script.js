document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let file = document.getElementById('file').files[0];

    let formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('file', file);

    fetch(https://script.google.com/macros/s/AKfycbz9CVcha634bmqMyAew19Vvw4L7lKREQn4tMqpA3makYBIEJl0nCNezkXg3GPZfplexlw/exec, {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert('Data berhasil disimpan!');
        document.getElementById('userForm').reset();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Terjadi kesalahan saat mengirim data.');
    });
});