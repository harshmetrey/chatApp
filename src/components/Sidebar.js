
import { FiChevronDown, FiGrid, FiMessageCircle, FiUser, FiBell, FiCalendar, FiSettings, FiPower } from "react-icons/fi";

import UserAvatar from '../assets/images/user-avatar.svg'

export function Sidebar() {
    return (
        <div className="ca-sidebar__container">
            <div className="ca-sidebar-userDetails">
                <img className="user-avatar__image" alt="user-avatar" src={UserAvatar} />
            </div>
            <span className="user-name__text">Henry Jabbawockiez <FiChevronDown /></span>
            <div className="ca-sidebar-navlinks">
                <div className="ca-navItems">
                    <li className="align-icon"> <FiGrid spacing/> home</li>
                    <li className="active"> <FiMessageCircle/> chat
                    </li>
                    <li className="align-icon"> <FiUser /> contact</li>
                    <li className="align-icon"> <FiBell /> notifications</li>
                    <li className="align-icon"> <FiCalendar /> calendar</li>
                    <li className="align-icon"> <FiSettings /> settings</li>
                </div>
                <div className="ca-sidebar-logout-wrapper">
                <div className="ca-sidebar-logout"> <FiPower /> logout</div>
                </div>

            </div>
        </div>
    )
}