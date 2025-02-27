// ToastMessage.js
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Export triggerToast as a separate function
export const triggerToast = (message, type = 'default') => {
    switch (type) {
        case 'success':
            toast.success(message);
            break;
        case 'error':
            toast.error(message);
            break;
        case 'info':
            toast.info(message);
            break;
        case 'warn':
            toast.warn(message);
            break;
        default:
            toast(message);
            break;
    }
};

// ToastContainer for displaying toasts
const ToastMessage = () => <ToastContainer />;

export default ToastMessage;
