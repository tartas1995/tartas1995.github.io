import * as React from 'react';
import "./style.scss";
import ReactMarkdown from 'react-markdown';
import { useDispatch, useSelector } from "react-redux"
import { closePost, updatePost } from '../../Store/actionCreators';
import loadPost from '../../handler/loadPost';

type Props = {
    index: number
}

const PostComponent: React.FC<Props> = ({ index }: Props) => {
    const dispatch = useDispatch()
    const onClick = () => {
        closePost()(dispatch)
    }
    const post = useSelector((state: State) => state.list[index])
    React.useEffect(() => {
        loadPost(post).then((post: Post) => {
            updatePost(index, post)(dispatch)
        })
    },[])
    return (
        <div className="wrapper">
            <div className="close" onClick={onClick}></div>
            <div className="post">
                <ReactMarkdown>
                    {post.body}
                </ReactMarkdown>
            </div>
        </div>
    )
}


export default PostComponent;