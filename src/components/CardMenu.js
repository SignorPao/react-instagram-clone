import { ReactComponent as Activity } from '../images/activity.svg';
import { ReactComponent as Comments } from '../images/comments.svg';
import { ReactComponent as Send } from '../images/send.svg';
import { ReactComponent as Bookmark } from '../images/bookmark.svg';
import '../styles/CardMenu.scss';

function CardMenu() {
  return (
    <div className="cardMenu">
      <div className="interactions">
        <Activity className='icon' />
        <Comments className='icon' />
        <Send className='icon' />
      </div>
      <Bookmark className='icon' />
    </div>
  )
}

export default CardMenu;
