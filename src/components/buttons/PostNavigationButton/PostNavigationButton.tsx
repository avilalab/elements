import { IPostNavigationButtonProps } from '../types';
import '../../../scss/style.scss';

export function PostNavigationButton({
    type,
    postTitle,
    onClick
}: IPostNavigationButtonProps) {
    return (
        <button onClick={onClick} className={`btn-post-navigation${ type === 'next' ? ' reverse' : '' }`}>
            { type === 'previous' ? <i className="fa fa-arrow-left"></i> : <i className="fa fa-arrow-right"></i> } 
            <span>{ type === 'previous' ? 'Previous Article' : 'Next Article' }</span>
            <h6>{ postTitle }</h6>
        </button>
    );
}

export const PostNavigationTypes = {
    previous: {
        title: 'Anterior'
    },
    next: {
        title: 'Próximo'
    }
};