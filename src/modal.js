import { BUSINESS_NAME } from './constants.js';
import { createModal } from './modal.js';

document.title = BUSINESS_NAME;
document.querySelector('footer').innerHTML = `&copy; ${new Date().getFullYear()} ${BUSINESS_NAME}`;
// document.querySelector('.business-name').textContent = BUSINESS_NAME;

document.addEventListener('readystatechange', () => {
  if (document.readyState === 'complete') {
    document.getElementById('but_1').addEventListener('click', () => {
      createModal('This is a modal!');
    });
  }
});

export function createModal(content) {
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 flex items-center justify-center bg-black bg-opacity-50';

  const modalContent = document.createElement('div');
  modalContent.className = 'bg-white p-6 rounded shadow-lg';
  modalContent.innerHTML = content;

  const closeButton = document.createElement('button');
  closeButton.className = 'mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600';
  closeButton.textContent = 'Close';
  closeButton.addEventListener('click', () => {
    document.body.removeChild(modal);
  });

  modalContent.appendChild(closeButton);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);
}