import { atom } from 'recoil'


export enum AlertTypes {
    error = "error",
    success = "success",
    warning = 'warning'
};

export const AlertAtom = atom({
    key: 'Alert',
    default: {
        isOpen: false,
        message: '',
        type: AlertTypes.success,
    },
})