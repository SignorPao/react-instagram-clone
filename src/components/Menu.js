import '../styles/Menu.scss';
import { ReactComponent as Home } from '../images/home.svg';
import { ReactComponent as Chat } from '../images/chat.svg';
import { ReactComponent as Add } from '../images/add.svg';
import { ReactComponent as Find } from '../images/find.svg';
import { ReactComponent as Activity } from '../images/activity.svg';
import image from '../images/profile.jpg';
import ProfileIcon from './ProfileIcon';

function Menu() {
  return (
    <div className="menu">
      <Home className='icon' />
      <Chat className='icon' />
      <Add className='icon' />
      <Find className='icon' />
      <Activity className='icon' />
      <ProfileIcon 
        iconSize="small" 
        image={image} 
        // storyBorder={true}
      />
    </div>
  )
}

export default Menu;
