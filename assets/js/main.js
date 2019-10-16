// variabili
var name;
var surname;
var color;
var password;
var message;

// input utente
name = prompt('Inserisci il tuo nome');
surname = prompt('Inserisci il tuo cognome');
color = prompt('Inserisci il tuo colore preferito');

// password gen
password = name + surname + color +'19';

// message gen
message = 'Ciao ' + name + ' ' + surname + ' la tua password è:';

// output
document.getElementById('js-message').innerHTML = (message);
document.getElementById('js-password').innerHTML = (password);