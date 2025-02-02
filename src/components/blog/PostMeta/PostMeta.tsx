import { DateDifference } from "../../../helpers/DateHelper";
import { Card } from "../../Card/Card";
import { PostDificulty } from "../PostDificulty/PostDificulty";

import './PostMeta.scss';

export interface PostMetaProps {
    postCategories: { name: string, href: string; }[];
    postLastUpdate: number;
    postRating: number;
    postAuthor: string;
    postReadingTime: number;
}

export function PostMeta({
    postCategories,
    postLastUpdate,
    postAuthor,
    postRating,
    postReadingTime
}: PostMetaProps) {
    return (
        <Card className="post-meta-widget">
            <ul className="list-group list-group-flush">
                <li className="list-group-item post-meta-categories">
                    <i className="fa fa-tag"></i>
                    <b>Category:</b>
                    <ul className="nav">
                        { postCategories.map( link => (
                            <a href={ link.href } className="nav-item">{ link.name }</a>
                        )) }
                    </ul>
                </li>
                <li className="list-group-item">
                    <i className="fa fa-clock"></i><b>Updated:</b>{ DateDifference(postLastUpdate) }
                </li>
                <li className="list-group-item">
                    <i className="fa fa-user"></i><b>Author:</b>{ postAuthor }
                </li>
                <li className="list-group-item">
                    <i className="fa fa-clock"></i><b>Reading time:</b>{ postReadingTime } minute(s)
                </li>
                <li className="list-group-item">
                    <PostDificulty postRating={postRating} />
                </li>
            </ul>
        </Card>
    );
}