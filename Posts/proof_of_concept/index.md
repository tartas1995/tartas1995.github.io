# This is just a Template

this is just a template to work on MD interpreter

```tsx
import * as React from 'react';
import Header from '../Header';
import List from '../List';
import Post from '../Post';
import "./style.scss";
import {  useSelector } from "react-redux"

type Props = {

}

const Main: React.FC<Props> = () => {
  const postIndex = useSelector((state: State) => state.opened)
  return (
    <div className="Main">
      <Header></Header>
      <List></List>
      { postIndex !== null ? <Post index={postIndex}></Post> : '' }
    </div>
  )
}

export default Main;
```

