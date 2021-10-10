import * as React from 'react';
import "./style.scss";

type Props = {

}

const Header: React.FC<Props> = ({}) => {
  return (
    <div className="Header">
        <h1>Tartas1995</h1>
        <ul>
            <li>
                <a href="https://github.com/tartas1995" target="_blank">
                    <img src="./assets/image/github.png" />
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Header;