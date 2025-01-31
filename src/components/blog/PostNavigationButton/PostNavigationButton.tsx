import "./PostNavigationButton.scss";

export interface PostNavigationButtonProps {
    type: PostNavigationButtonType;
    label: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export type PostNavigationButtonType = "previous" | "next";

const PostNavigationButtonTypes: {
    [key: string]: { label: string; icon: JSX.Element; cssClass: string };
} = {
    previous: {
        icon: <i className="fa fa-arrow-left"></i>,
        label: "Previous Article",
        cssClass: "btn-post-navigation ",
    },
    next: {
        icon: <i className="fa fa-arrow-right"></i>,
        label: "Next Article",
        cssClass: "btn-post-navigation reverse",
    },
};

export function PostNavigationButton({
    type,
    label,
    onClick,
}: PostNavigationButtonProps) {
    return (
        <button
            onClick={onClick}
            className={PostNavigationButtonTypes[type].cssClass}
        >
            {PostNavigationButtonTypes[type].icon}
            <span>{PostNavigationButtonTypes[type].label}</span>
            <h6>{label}</h6>
        </button>
    );
}
