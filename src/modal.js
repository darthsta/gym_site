import { BUSINESS_NAME } from './constants.js';

document.title = BUSINESS_NAME;
document.querySelector('footer').innerHTML = `&copy; ${new Date().getFullYear()} ${BUSINESS_NAME}`;
