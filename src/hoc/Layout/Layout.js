import React, { Component } from 'react';

import classes from './layout.module.css';
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle';
import Drawer from '../../components/Navigation/Drawer/Drawer';


class Layout extends Component {
    state = {
        isOpenMenu: false,
    };

    onToggleMenuHandler = () => {
        this.setState({
            isOpenMenu: !this.state.isOpenMenu,
        })
    };

    onCloseMenuHandler = () => {
        this.setState({
            isOpenMenu: false,
        })
    };

    render() {
        return (
            <div className={classes.layout}>
                <><Drawer isOpen={this.state.isOpenMenu} onClose={this.onCloseMenuHandler} />
                <MenuToggle
                    onToggle={this.onToggleMenuHandler}
                    isOpen={this.state.isOpenMenu}
                /></>

                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
}

export default Layout;
