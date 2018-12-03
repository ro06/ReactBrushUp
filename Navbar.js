import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

export default class MenuExampleInvertedSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted>
        
        <Menu inverted pointing secondary>
          <svg width="100" height="100">
            <circle cx="50" cy="50" r="40"
              stroke="green" stroke-width="4" fill="yellow" />
            Sorry, your browser does not support inline SVG.
          </svg>

          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
          <Link to='/'>Home</Link>
          </Menu.Item>
          <Menu.Item
            name='Team'
            active={activeItem === 'Roster'}
            onClick={this.handleItemClick}>
            <Link to='/roster'>Team</Link>
          </Menu.Item>
          <Menu.Item
            name='About'
            active={activeItem === 'About'}
            onClick={this.handleItemClick}>
            <Link to='/about'>About Us</Link>
          </Menu.Item>
          <Menu.Item
            name='Contact'
            active={activeItem === 'Contact'}
            onClick={this.handleItemClick}>
            <Link to='/contact'>Contact Us</Link>
          </Menu.Item>
        </Menu>
      </Segment>
    )
  }
}
