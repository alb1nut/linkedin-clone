import React from 'react'
import '../styles/Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import InputOption from './InputOption';
import Posts from './Posts';


const Feed = () => {
  return (
    <div className='feed'>
      {/* Post Container */}
      <div className="feed__inputContainer">
       <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button type='submit'>Send</button>
          </form>
       </div>
      <div className="feed__inputOptions">
        <InputOption Icon={ImageIcon} title='Photo' color='#70B5F9' />
        <InputOption Icon={SubscriptionsIcon} title='Video' color='#E7A33E' />
        <InputOption Icon={EventNoteIcon} title='Event' color='#C0CBCD' />
        <InputOption Icon={CalendarViewDayIcon} title='Write article' color='#7FC15E' />
      </div>
      </div>
      
    {/* Posts */}
    <Posts name='Albert Dovlo Nutifafa' description='This is a test'  message='Hello world jjhkjfh jsfdh fdhkajhr jdfhj dfjh dhfk hwj hjfdhj hjdfhie jfjko a.rh jhf hfier bkf bnbf kf dhh jfdfjfddflaffd gfhb ddfldfhheefd fhdgfhgfkdgfgah fa fgdfgdf hdf bflfddf hdfgfd hhgfdjf  ' photourl=''/>

    </div>
  )
}

export default Feed
