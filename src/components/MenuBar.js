import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class MenuBar extends Component {

    state = {
        activeItem: 'home'
    }

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name })
    }

    render () {
        const { activeItem } = this.state
        return (
            <div>
                <Menu pointing secondary>
                    <Menu.Item name='home'
                        active={activeItem === 'home'}
                        onClick={this.handleItemClick}
                        as={Link} to='/'/>
                    <Menu.Item
                        name='newQuestion'
                        active={activeItem === 'newQuestion'}
                        onClick={this.handleItemClick}
                        as={Link} to='/add'/>
                    <Menu.Item
                        name='leaderBoard'
                        active={activeItem === 'leaderBoard'}
                        onClick={this.handleItemClick}
                        as={Link} to='/leaderboard'/>
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