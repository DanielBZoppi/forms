const addButton = document.getElementById('add-integrante');
const form = document.getElementById('appointment-form');
const container = document.getElementById('integrantes-container');

addButton.addEventListener('click', () => {
  const last = container.lastElementChild;
  const nome = last.querySelector('input[name="nome"]').value.trim();
  const bebida = last.querySelector('input[name="bebida"]').value.trim();
  const restricao = last.querySelector('textarea[name="restricao"]').value.trim();

  if (!nome) {
    alert('Por favor, preencha o nome completo do integrante.');
    return;
  }

  form.insertAdjacentHTML('beforeend', `
    <input type="hidden" name="Integrante_Nome[]" value="${nome}" />
    <input type="hidden" name="Integrante_Bebida[]" value="${bebida}" />
    <input type="hidden" name="Integrante_Restricao[]" value="${restricao}" />
  `);

  const newBlock = document.createElement('div');
  newBlock.classList.add('integrante');
  newBlock.innerHTML = `
    <div class="input-group">
      <input type="text" placeholder="Nome Completo" name="nome" required />
    </div>
    <div class="input-group">
      <input type="text" placeholder="Consome bebida Alcoólica?" name="bebida" />
    </div>
    <textarea name="restricao" placeholder="Caso tenha, descreva restrição alimentar"></textarea>
  `;
  container.appendChild(newBlock);
});

form.addEventListener('submit', (e) => {
  const last = container.lastElementChild;
  const nome = last.querySelector('input[name="nome"]').value.trim();
  const bebida = last.querySelector('input[name="bebida"]').value.trim();
  const restricao = last.querySelector('textarea[name="restricao"]').value.trim();

  if (!nome) {
    alert('Por favor, preencha o nome do último integrante.');
    e.preventDefault();
    return;
  }

  form.insertAdjacentHTML('beforeend', `
    <input type="hidden" name="Integrante_Nome[]" value="${nome}" />
    <input type="hidden" name="Integrante_Bebida[]" value="${bebida}" />
    <input type="hidden" name="Integrante_Restricao[]" value="${restricao}" />
  `);
});
