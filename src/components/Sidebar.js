import Sticky from 'react-sticky-el';
import Profile from './Profile';
import Suggestions from './Suggestions';
import Footer from './Footer';
import '../styles/Sidebar.scss';
import image from '../images/profile.jpg';

function Sidebar() {
  return (
    <Sticky topOffset={-80}>
      <div className="sidebar">
        <Profile 
          username="signorpao" 
          caption="Pavel Belousov"
          urlText="Switch Github"
          iconSize="big"
          image={image}
          storyBorder={true}
        />
        <Suggestions />
        <Footer />
      </div>
    </Sticky>
  )
}

export default Sidebar;
