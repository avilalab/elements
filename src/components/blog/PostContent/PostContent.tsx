import { Card } from "../../Card/Card";
import './PostContent.scss';

export interface PostContentProps {
    postTitle?: string;
    postPublishDate?: string;
    postThumbnailUrl?: string;
    postContent?: string;
}

export function PostContent({
    postPublishDate,
    postThumbnailUrl,
    postTitle,
    postContent
}: PostContentProps) {
    return (
        <Card width={800} bordered>
            <article className="post-wrapper">
                <div className="post-header">
                    <div className="post-info">
                        { postTitle ? <h1 className="post-title">{ postTitle }</h1> : '' }
                        { postPublishDate ? <div className="post-publish-date"><i className="fa fa-calendar"></i><b>Published:</b> { postPublishDate }</div> : '' }
                    </div>
                    { postThumbnailUrl ? <img className="elements-image-rounded elements-image-256" src={ postThumbnailUrl } alt="" /> : '' }
                </div>
                { postContent ? <div className="post-content" dangerouslySetInnerHTML={{ __html: postContent }}></div> : '' }
            </article>
        </Card>
    );
}