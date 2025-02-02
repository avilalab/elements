import { Card } from "../../Card/Card";
import { PostDificulty } from "../PostDificulty/PostDificulty";

import './PostCard.scss';

interface IPostCardProps {
    postTitle?: string;
    postCategory?: string;
    postExcerpt?: string;
    postAuthor?: string;
    postReadTime?: number;
    postRating?: number;
    postCategoryBackgroundColor?: string;
    postCategoryColor?: string;
    onClickPost?: () => void;
    onClickAuthorPost?: () => void;
    onClickCategoryPost?: () => void;
}

export function PostCard({
    postCategory,
    postAuthor,
    postExcerpt,
    postReadTime,
    postTitle,
    postRating,
    postCategoryBackgroundColor,
    postCategoryColor,
    onClickAuthorPost,
    onClickCategoryPost,
    onClickPost
}: IPostCardProps) {
    return (
        <Card
            className="post-card"
            cardHeader={(
                <>
                    <span onClick={onClickCategoryPost} className="post-card-category">
                        <div className="background" style={{ backgroundColor: postCategoryBackgroundColor }}></div>
                        <div className="label" style={{ color: postCategoryColor }}>{ postCategory }</div>
                    </span>
                    {postRating ? <PostDificulty postRating={ postRating } /> : '' }
                </>
            )}
            cardFooter={(
                <>
                    { postAuthor ? <span onClick={onClickAuthorPost} className="post-card-author"><i className="fa-regular fa-user-circle mx-2"></i>{ postAuthor }</span> : '' }
                    { postReadTime ? <span className="post-card-read-time"><i className="fa-regular fa-clock mx-2"></i>{ postReadTime } min</span> : '' }
                </>
            )}
            title={postTitle}
            subtitle={{ html: postExcerpt }}
            textCenter
            onClick={onClickPost}
        />
    );
}