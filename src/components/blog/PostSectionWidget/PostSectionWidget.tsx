import { Card } from '../../Card/Card';
import './PostSectionWidget.scss';

export interface IPostSectionWidgetProps {
    active?: number;
    topics?: { title: string; anchor: string; }[];
}

export function PostSectionWidget({
    topics,
    active = 0
}: IPostSectionWidgetProps) {
    return (
        <Card
            className="post-section-widget"
            width={380}
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