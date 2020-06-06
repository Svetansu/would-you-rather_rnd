import React, { Component } from 'react'
import { connect } from 'react-redux'
import Avatar from '@material-ui/core/Avatar';
import { NavLink } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'

class Navbar extends Component {
    handleLogout = () => {
        const { dispatch } = this.props
        dispatch(setAuthedUser(null))
    }
    render() {
        const { authedUser, authedUserAvatar } = this.props
        return (
            <nav>
                <ul>
                    <li>
                        <NavLink to='/' exact activeClassName='active'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/add' exact activeClassName='active'>
                            New Question
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/leaderboard' exact activeClassName='active'>
                            Leaderboard
                        </NavLink>
                    </li>
                </ul>
                <span className="user-details">
                    <button onClick={this.handleLogout} className="but">
                        SIGN OUT
                    </button>
                    <span>{authedUser}</span>
                </span>
                <Avatar alt={authedUser+' profile picture'} src={authedUserAvatar} />
            </nav>
        )
    }
}

export default connect()(Navbar)