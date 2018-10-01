import React, { Component } from 'react'
import { Menu, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleLogout } from '../actions/authedUser'

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
        name === 'logout'
        ? this.props.logout()
        : this.setState({ activeItem: name })
    }

    render () {
        const { activeItem } = this.state
        const { loggedInUser, avatar } = this.props
        const greeting = `Welcome ${loggedInUser}`

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
                        <Menu.Item content={greeting}/>
                        <Image avatar circular src={avatar} inline verticalAlign='bottom'/>
                        <Menu.Item
                        name='logout'
                        active={activeItem === 'logout'}
                        as={Link} to='/'
                        onClick={this.handleItemClick}/>
                    </Menu.Menu>
                </Menu>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        logout: () => dispatch(handleLogout())
    }
}

export default connect(undefined,mapDispatchToProps)(MenuBar)