import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class MenuBar extends Component {

    routes = [
        { key: 1, name: 'Home', path: '/'},
        { key: 2, name: 'New Question', path: '/add'},
        { key: 3, name: 'Leaderboard', path: '/leaderboard'}
    ]

    initActiveItem = () => {
        const { pathname } = window.location
        const initRoute = this.routes.find(route => route.path === pathname)
        return initRoute ? initRoute.name : ''
    }

    state = {
        activeItem: this.initActiveItem()
    }

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name })
    }

    render () {
        const { activeItem } = this.state

        return (
            <div>
                <Menu pointing secondary>
                    {this.routes.map(route =>
                    <Menu.Item key={route.key} name={route.name}
                    active={activeItem === route.name}
                    onClick={this.handleItemClick}
                    as={Link} to={route.path}/>
                    )}
                    <Menu.Menu position='right'>
                        <Menu.Item
                        name='logout'
                        active={activeItem === 'logout'}
                        onClick={this.handleItemClick}/>
                    </Menu.Menu>
                </Menu>
            </div>
        )
    }
}

export default MenuBar