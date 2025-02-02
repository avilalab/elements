import { Card } from '../../Card/Card';
import './PostSection.scss';

export interface PostSectionProps {
    active?: number;
    topics?: { title: string; anchor: string; }[];
}

export function PostSection({
    topics,
    active = 0
}: PostSectionProps) {
    return (
        <Card
            className="post-section-widget"
            bordered={ false }
        >
            <ul className="nav">
                { topics ? topics.map( (topic, index) => (
                    <li className={`${ active === index ? 'active' : '' }`}><a href={ topic.anchor }>{ topic.title }</a></li>
                ) ) : '' }
            </ul>
        </Card>
    );
}