import { ReactNode, useEffect, useState } from "react";
import axios from 'axios';
import { PostContent } from "../blog/PostContent/PostContent";
import { PostMeta } from "../blog/PostMeta/PostMeta";

export function PostPageMock({ children }: { children: ReactNode }) {

    const [post, setPost] = useState<{
        content: { rendered: string }
        title: { rendered: string }
        date: string
        _embedded: {
            "wp:featuredmedia": {
                link: string;
            }[];
            "author"?: {
                name: string;
            }[];
        };
    } | null>(null);

    const handleGetPost = () => {
        const api = axios.create();

        api.get('https://localhost/wordpress/wp-json/wp/v2/posts?_embed=wp:featuredmedia,author')
            .then(response => setPost(response.data[0]));
    }

    useEffect(() => handleGetPost(), []);


    if (!post) return <></>;

    return (
        <div className="w-100" style={{ height: '100%' }}>
            <div className="container">
                <div className="row">
                    <div className="col-4" style={styles.fixedColumn}>
                        <div className="wrapper" style={styles.wrapper}>
                            <PostMeta
                                postAuthor={ post._embedded.author![0].name }
                                postCategories={[
                                    { name: 'PHP', href: '#' },
                                    { name: 'SQL Server', href: '#' }
                                ]}
                                postLastUpdate={ post.date }
                                postRating={3}
                                postReadingTime={10}
                            />
                            {children}
                        </div>
                    </div>
                    <div className="col-8">
                        <PostContent
                            postThumbnailUrl={post._embedded["wp:featuredmedia"][0].link}
                            postPublishDate={post.date}
                            postTitle={post.title.rendered}
                            postContent={post.content.rendered}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    fixedColumn: {
        position: 'relative',
        backgroundColor: 'lightcyan',
        display: 'flex'
    },

    wrapper: {
        width: 'inherit',
        position: 'sticky',
        display: 'flex',
        flex: '1',
        flexDirection: 'column',
        alignItems: 'center',
        justifyItems: 'center',
        gap: 16
    }
};