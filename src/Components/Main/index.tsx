import * as React from 'react';
import Header from '../Header';
import List from '../List';
import Post from '../Post';
import "./style.scss";
import {  useSelector } from "react-redux"

type Props = {

}

const Main: React.FC<Props> = () => {
  const post = useSelector((state: State) => state.post)
  return (
    <div className="Main">
      <Header></Header>
      <List></List>
      { post !== null ? <Post post={post}></Post> : '' }
    </div>
  )
}

export default Main;