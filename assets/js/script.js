document.getElementById('yourName');
yourName.addEventListener('submit', getFormDetails);

function getFormDetails(event) {
    this.style['display'] = 'none';
    event.preventDefault(); 
    let name = document.getElementById('name');
    document.getElementById('name-result').textContent = name.value;
}