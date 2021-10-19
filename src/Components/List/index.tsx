import * as React from 'react';
import "./style.scss";
import { setPostList } from '../../Store/actionCreators';
import loadPostList from '../../handler/loadPostList';
import { useDispatch, useSelector, connect } from "react-redux"

import ListItemComponent from '../ListItem'

type Props = {

}

const ListComponent: React.FC<Props> = () => {
  const dispatch = useDispatch()
  const list = useSelector((state: State) => state.list)
  React.useEffect(() => {
    loadPostList().then((list: List) => {
      setPostList(list)(dispatch)
    })
  },[])
  return (
    <div className="List">
      { list !== null ? list.map((post: Post, index: number) =>
        <ListItemComponent key={index} post={post} />) : '' }
    </div>
  )
}

export default ListComponent;