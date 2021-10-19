import * as React from 'react';
import "./style.scss";
import ReactMarkdown from 'react-markdown';

type Props = {
    post: Post
}

const PostComponent: React.FC<Props> = ({ post }: Props) => {
    return (
        <div className="post">
            <ReactMarkdown>
            # This is just a Template
            
            this is just a template to work on MD interpreter
            </ReactMarkdown>
        </div>
    )
}


export default PostComponent;