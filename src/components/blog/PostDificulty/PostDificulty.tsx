import { useState, useEffect } from "react";

import './PostDificulty.scss';

export interface IPostDificultyProps {
    postRating: number;
}

export function PostDificulty({ postRating }: IPostDificultyProps) {
    const [rating, setRating] = useState<JSX.Element[]>([]);
    
    function renderRating(postRating: number) : JSX.Element[] {
        const components: JSX.Element[] = [];
    
        for(let i = 0; i < 3; i++) {
            if(i < postRating) {
                components.push(<i className="fa fa-star"></i>);
            } else {
                components.push(<i className="fa-regular fa-star"></i>);
            }
        }

        return components;
    }

    useEffect(() => {
        setRating(renderRating(postRating));
    }, [postRating]);
    
    return (
        <div className="post-dificulty">
            <i className="fa fa-award"></i>
            <ul>{ rating.map( element => element ) }</ul>
        </div>
    );
}