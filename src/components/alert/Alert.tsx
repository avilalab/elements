import { useEffect, useState } from "react";
import styles from './Alert.module.scss';

export type IAlertType = 'danger' | 'success' | 'warning' | 'info';

export interface IAlertProps {
    type: IAlertType;
    mesage: string;
}

const states: { state: IAlertType; element: JSX.Element }[] = [
    { state: 'danger', element: <i className="fa fa-times"></i>},
    { state: 'success', element: <i className="fa fa-check"></i>},
    { state: 'warning', element: <i className="fa fa-warning"></i>},
    { state: 'info', element: <i className="fa fa-info"></i>},
];

export const Alert = ({
    type,
    mesage
}: IAlertProps) => {
    const [state, setState] = useState<{ state: string; element: JSX.Element } | null>(null);

    useEffect(() => {
        setState(states.filter( x => x.state === type)[0]!);
    }, [type]);

    if (!state) return <></>;

    return (
        <div className={ `${styles['alert']} ${styles[`alert-${state.state}`]}` }>{state.element} {mesage}</div>
    );
}