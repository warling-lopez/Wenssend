import fs from 'fs';

// Div donde se mostrarán los usuarios
const UsersDiv = document.getElementById('usersDiv'); // Asegúrate de que exista en tu HTML

// Ruta del archivo JSON
const jsonFilePath = '../db/db_data_save-api.users.json';

// Leer archivo JSON
fs.readFile(jsonFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo:', err);
    return;
  }

  // Convertir el contenido del archivo a un objeto
  const jsonData = JSON.parse(data);

  // Iterar sobre los usuarios y presentar la información
  jsonData.users.forEach(user => {
    UsersDiv.innerHTML += `
      <div class="user">
          <b>ID: ${user.id}</b>
          <h3>Name: ${user.name}</h3>
          <p>Email: ${user.email}</p>
      </div>`;
    console.log(`ID: ${user.id}, Name: ${user.name}, Email: ${user.email}`);
  });
});
