import * as React from 'react';
import "./style.scss";
import { setPostList } from '../../Store/actionCreators';
import loadPostList from '../../handler/loadPostList';
import { useDispatch, useSelector } from "react-redux"

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
  const componentList = []
  for (let i = list.length -1 ; i >= 0; i--) {
    componentList.push(<ListItemComponent key={i} index={i} post={list[i]} />)
  }
  return (
    <div className="List">
      { list !== null ? componentList : '' }
    </div>
  )
}

export default ListComponent;