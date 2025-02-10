export type AlertType = "danger" | "success" | "warning" | "info";

export interface AlertProps {
    type: AlertType;
    mesage: string;
}

const states: { [key: string]: { state: AlertType; element: JSX.Element } } = {
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

export const Alert = ({ type, mesage }: AlertProps) => {
    return (
        <div className={`alert alert-${states[type].state}`}>
            { states[type].element } { mesage }
        </div>
    );
};
