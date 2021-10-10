import * as React from 'react';
import Header from '../Header';
import List from '../List';
import "./style.scss";

type Props = {

}

const Main: React.FC<Props> = ({}) => {
  return (
    <div className="Main">
      <Header></Header>
      <List></List>
    </div>
  )
}

export default Main;