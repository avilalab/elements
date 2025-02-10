import { ReactNode } from "react";

interface Card {
    title?: string;
    subtitle?: string | { html?: string; };
    text?: string;
    textCenter?: boolean;
    id?: string;
    className?: string;
    links?: { label: string; href: string; }[];
    cardHeader?: JSX.Element;
    cardFooter?: JSX.Element;
    bordered?: boolean;
    children?: ReactNode;
    onClick?: () => void;
}

export function Card({
    cardFooter,
    cardHeader,
    children,
    title,
    subtitle,
    text,
    links,
    textCenter,
    id,
    className,
    bordered = true,
    onClick
}: Card) {
    return (
        <div id={ id } className={`card ${className}${ textCenter ? ' text-center' : '' }${ !bordered ? ' card-no-border' : '' }`}>
            { cardHeader ? <div onClick={onClick} className="card-header">{ cardHeader }</div> : ( <></> ) }
            <div onClick={onClick} className="card-body">
                    { title ? <h5 className="card-title">{ title }</h5> : '' }
                    { subtitle ? (typeof subtitle === 'string' ? <h6 className="card-subtitle">{ subtitle }</h6> : ( subtitle.html ? <h6 className="card-subtitle" dangerouslySetInnerHTML={{ __html: subtitle.html }}></h6> : '' )) : '' }
                    { text ? <p className="card-text">{ text }</p> : '' }
                    { links?.map( link  => <a className='card-link' href={ link.href }>{ link.label }</a>) }
                    { children }
                </div>
            { cardFooter ? <div className="card-footer">{ cardFooter }</div> : ( <></> ) }
        </div>
    );
}