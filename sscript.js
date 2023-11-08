document.getElementById('betaForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const email = document.getElementById('emailInput').value;
  // Here you can add code to handle the form submission, e.g., sending data to a server, saving it to a database, etc.
  console.log('Submitted email:', email);
});
