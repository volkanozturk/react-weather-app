import React, {FC} from 'react';
import {useTranslation} from "react-i18next";

interface AlertProps {
    message: string;
    onClose: () => void
}

const Alert: FC<AlertProps> = ({message, onClose}) => {
    const {t} = useTranslation();
    return (


        <div className="modal is-active has-text-centered">
            <div className="modal-background" onClick={onClose}></div>
            <div className="modal-card">
                <header className="modal-card-head has-background-danger">
                    <p className="modal-card-title has-text-white">{message}</p>
                </header>
                <footer className="modal-card-foot" style={{justifyContent: 'center'}}>
                    <button className="button" onClick={onClose}>{t('close')}</button>
                </footer>
            </div>
        </div>
    );
}

export default Alert;