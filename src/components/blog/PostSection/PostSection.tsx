import { Card } from '../../Card/Card';
import './PostSection.scss';

export interface PostSectionProps {
    active?: number;
    bordered?: boolean;
    title?: string;
    topics?: { title: string; anchor: string; }[];
}

export function PostSection({
    active = 0,
    bordered,
    title,
    topics,
}: PostSectionProps) {
    return (
        <Card
            className="post-section-widget"
            bordered={ bordered }
        >
            <ul className="nav">
                { topics ? topics.map( (topic, index) => (
                    <li key={ topic.anchor } className={`${ active === index ? 'active' : '' }`}><a href={ `#${topic.anchor}` }>{ topic.title }</a></li>
                ) ) : '' }
            </ul>
        </Card>
    );
}