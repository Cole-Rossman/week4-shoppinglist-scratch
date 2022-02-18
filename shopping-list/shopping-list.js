import { checkAuth, logout, getItems, createItem, completeItem, deleteAllItems } from '../fetch-utils.js';

import { renderItem } from '../render-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

async function renderItems() {
    const shoppingItems = document.getElementById('shopping-items');
    shoppingItems.textContent = '';
    const items = await getItems();
    for (let item of items) {
        const li = renderItem(item);
        li.addEventListener('click', async () => {
            await completeItem(item.id);
            renderItems();
        });
        shoppingItems.append(li);
    }
}
renderItems();

const shoppingForm = document.getElementById('shopping-form');

shoppingForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(shoppingForm);
    await createItem(data.get('shopping-item'));
    renderItems();
    shoppingForm.reset();
});

const deleteButton = document.getElementById('delete-button');

deleteButton.addEventListener('click', async () => {
    await deleteAllItems();

    renderItems;
});