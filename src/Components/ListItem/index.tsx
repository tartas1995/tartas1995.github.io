import * as React from 'react';
import "./style.scss";
import { useDispatch } from "react-redux"
import { openPost } from '../../Store/actionCreators';

type Props = {
    post: Post
}

const ListItemComponent: React.FC<Props> = ({ post }: Props) => {
    const dispatch = useDispatch()
    const onClick = () => {
        openPost(post)(dispatch)
    }
    return (
        <div className="ListItem" onClick={onClick}>
            { post.imgPath !== null ? <img src={post.imgPath}/> : ''}
            <h1>{post.title}</h1>
            <p>{post.description}</p>
        </div>
    )
}


export default ListItemComponent;