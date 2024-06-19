function showTextarea(boxId) {
  const box = document.getElementById(boxId);
  const textAreaContainer = box.querySelector('.text-area-container');
  const button = box.querySelector('.view-button');
  
  if (textAreaContainer.style.display === 'none' || textAreaContainer.style.display === '') {
      // Crear y añadir el <sl-textarea> solo si no existe ya
      if (!textAreaContainer.querySelector('sl-textarea')) {
          const slTextarea = document.createElement('sl-textarea');
          slTextarea.setAttribute('rows', '4');
          textAreaContainer.appendChild(slTextarea);
      }
      textAreaContainer.style.display = 'block';
      button.textContent = 'Guardar'; // Cambiar texto del botón a "Guardar"
  } else {
      textAreaContainer.style.display = 'none';
      button.textContent = 'Agregar'; // Cambiar texto del botón a "Agregar"
  }
}



