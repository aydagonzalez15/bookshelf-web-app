

window.addEventListener('DOMContentLoaded', () => {
    fetch('/dynamic-content')
      .then(response => response.text("HELLO"))
      .then(data => {
        document.getElementById('dynamic-content').innerHTML = data;
      })
      .catch(error => console.error('Error fetching dynamic content:', error));
  });
  