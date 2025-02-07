import { useEffect, useState } from 'react';
import { Card } from '../../Card/Card';
import './PostSection.scss';

export interface PostSectionProps {
    active?: number;
    bordered?: boolean;
    title?: string;
}

export interface Anchor {
    element: Element;
    link: string;
    position: number;
    title: string;
}

export function PostSection({
    active = 0,
    bordered,
    title,
}: PostSectionProps) {

    const [anchors, setAnchors] = useState<Anchor[]>([]);
    const [current, setCurrent] = useState<string>('');

    useEffect(() => {
        const topics: Anchor[] = [];
        const data = document.querySelectorAll('.wp-block-heading');

        if(data.length > 0) {
            data.forEach( item => topics.push({
                title: item.textContent!,
                link: item.getAttribute('href')!,
                position: item.getBoundingClientRect().top,
                element: item
            }) );

            setAnchors(topics);
            setCurrent(topics[0].title!);
        }

    }, []);

    useEffect(() => {        
        window.addEventListener('scroll', changeAnchorActive);
        return () => window.removeEventListener('scroll', changeAnchorActive);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [anchors]);

    const changeAnchorActive = (e: any) => {
        const scrollPosition = window.scrollY + 105;
        let minDistance = 80;

        anchors.map( ancora => {
            let distance = Math.abs(ancora.position - scrollPosition);

            if (distance < minDistance) {
                setCurrent(ancora.title);
            }

            return 0;
        });
    }

    const HandleChangeAnchor = (anchor: Anchor) => {
        setCurrent(anchor.title);
        scrollTo(anchor.position);
    }

    const scrollTo = (y: number) => {
        window.scrollTo({
            top: y - 100,
            behavior: 'smooth'
        });
    } 
    return (
        <div className="table-of-contents">
            <h4 className="table-of-contents-title"><i className="fa-solid fa-bolt"></i>Table of Contents</h4>
            <div className="table-of-contents-container">
                <ul>
                    { anchors.map( ancora => (
                        <li 
                            key={ancora.title}
                            className={`${ current === ancora.title ? 'ativo' : '' }`}
                            onClick={e => HandleChangeAnchor(ancora)}
                        ><a href={ ancora.link }>{ ancora.title }</a></li>
                    )) }
                </ul>
            </div>
        </div>
    );
}