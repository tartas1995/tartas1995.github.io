import * as React from 'react';
import "./style.scss";
import { useDispatch } from "react-redux"
import { openPost } from '../../Store/actionCreators';

type Props = {
    post: Post
    index: number
}

const ListItemComponent: React.FC<Props> = ({ post, index }: Props) => {
    const dispatch = useDispatch()
    const onClick = () => {
        openPost(index)(dispatch)
    }
    const getImage = (post: Post) => {
        return `Posts/${post.folder}/${post.imgPath}`
    }
    return (
        <div className="ListItem" onClick={onClick}>
            { post.imgPath !== null ? <div className="img" style={ {backgroundImage: `url(${getImage(post)})` }}/> : ''}
            <h1>{post.title}</h1>
            <p>{post.description}</p>
        </div>
    )
}


export default ListItemComponent;