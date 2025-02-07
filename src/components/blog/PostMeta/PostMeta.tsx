import { DateDifference } from "../../../helpers/DateHelper";
import { Card } from "../../Card/Card";
import { PostDificulty } from "../PostDificulty/PostDificulty";

import './PostMeta.scss';

export interface PostMetaProps {
    postCategories?: { name: string, href: string; }[];
    postLastUpdate?: string;
    postRating?: number;
    postAuthor?: string;
    postReadingTime?: number;
}

export function PostMeta({
    postCategories,
    postLastUpdate,
    postAuthor,
    postRating,
    postReadingTime
}: PostMetaProps) {
    return (
        <div className="post-meta">
            <h4 className="article-info-title"><i className="fa-solid fa-bolt"></i>Article Information</h4>
            <div className="article-info-container">
                <ul>
                    { postCategories ? (
                        <li>
                            <i className="fa fa-tag"></i>
                            <span>
                                <b>Category:</b>
                                    { postCategories.map( link => (
                                        <a href={ link.href } className="nav-item">{ link.name }</a>
                                    )) }
                            </span></li>
                    ) : '' }
                    { postLastUpdate ? (
                        <li className="">
                            <i className="fa fa-clock"></i><b>Updated:</b>{ postLastUpdate }
                        </li>
                    ) : '' }
                    <li className="">
                        <i className="fa fa-user"></i><b>Author:</b>{ postAuthor }
                    </li>

                    { postReadingTime ? (
                        <li className="">
                            <i className="fa fa-clock"></i><b>Reading time:</b>{ postReadingTime } minute(s)
                        </li>
                    ) : '' }

                    { postRating ? (
                        <li className="">
                            <PostDificulty postRating={postRating} />
                        </li>
                    ) : '' }
                </ul>
            </div>
        </div>
    );
}