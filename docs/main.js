'use strict';

(() => {
  window.addEventListener('load', (event) => {
    const updateUI = () => {
      document.getElementById('totalCost').textContent =
        '$' + totalCost.toFixed(2);
      quantity.value = '';
      unitPrice.value = '';
      description.value = '';
    };

    document.getElementById('addItem').addEventListener('click', (event) => {
      addItem(quantity.value, unitPrice.value, description.value);

      const newRow = document.createElement('tr');
      newRow.appendChild(document.createElement('td')).textContent =
        quantity.value;
      newRow.appendChild(document.createElement('td')).textContent =
        '$' + parseFloat(unitPrice.value).toFixed(2);
      newRow.appendChild(document.createElement('td')).textContent =
        description.value;

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.setAttribute('type', 'button');
      newRow
        .appendChild(document.createElement('td'))
        .appendChild(deleteButton);
      list.appendChild(newRow);

      updateUI();
    });

    list.addEventListener('click', (event) => {
      if (event.target.tagName == 'BUTTON') {
        list.querySelectorAll('button').forEach((value, index) => {
          if (value == event.target) {
            deleteItem(index);
            value.parentElement.parentElement.parentElement.removeChild(
              value.parentElement.parentElement
            );
          }
        });
        updateUI();
      }
    });

    updateUI();
  });
})();
