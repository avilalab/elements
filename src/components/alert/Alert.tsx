import "./Alert.scss";

export type IAlertType = "danger" | "success" | "warning" | "info";

export interface IAlertProps {
    type: IAlertType;
    mesage: string;
}

const states: { [key: string]: { state: IAlertType; element: JSX.Element } } = {
    danger: {
        state: "danger",
        element: <i className="fa fa-times"></i>,
    },
    success: {
        state: "success",
        element: <i className="fa fa-check"></i>,
    },
    warning: {
        state: "warning",
        element: <i className="fa fa-warning"></i>,
    },
    info: {
        state: "info",
        element: <i className="fa fa-info"></i>,
    },
};

export const Alert = ({ type, mesage }: IAlertProps) => {
    return (
        <div className={`alert alert-${states[type].state}`}>
            { states[type].element } { mesage }
        </div>
    );
};
