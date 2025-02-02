import { useEffect, useState } from "react";
import useModal from "./useModal";

import './Modal.scss';

export function Modal() {
    const { animationType, isModalOpen, modalContent, HandleCloseModal, animationState } = useModal();
    const [animacao, setAnimacao] = useState('');

    useEffect(() => {
        switch (animationState) {
            case 'opening':
                setAnimacao(animationType + 'In');
                break;
            case 'open':
                setAnimacao(animationType + 'In');
                break;
            case 'closing':
                setAnimacao(animationType + 'Out');
                break;
            case 'closed':
                setAnimacao('');
                break;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [animationState]);

    if (!isModalOpen) return <></>;

    return (
        <div className={`modal-container ${animacao}`}>
            <div className="background"></div>
            <div className="content">
                {modalContent}
            </div>
        </div>
    );
}