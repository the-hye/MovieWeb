import React from 'react';
import { Menu } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.MenuItemGroup;

function LeftMenu(props) {
    return (
        <Menu mode={props.mode}>
            <Menu.Item key="mail">
                <a href="/">HOME</a>
            </Menu.Item>

            <Menu.Item key="favorite">
                <a href="/favorite">Favorite</a>
            </Menu.Item>
        </Menu>


    )
}

export default LeftMenu;
