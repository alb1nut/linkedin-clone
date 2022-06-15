import React, { useEffect, useState } from 'react'
import '../styles/Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import InputOption from './InputOption';
import Posts from './Posts';
import { db } from '../firebase/firebase';
import firebase from 'firebase';

const Feed = () => {
  const [posts ,setPosts] =useState([]);
  const [input ,setInput] =useState('')

  useEffect(()=>{

    // Connect to posts db => db.collection('posts')
    // Snapshot to get realtime listener connection to the db => onSnapShot()
    // anytime there are changes it will give us a realtime snapshot =>snapshot ={}
    db.collection('posts').orderBy('timestamp' ,'desc').onSnapshot(snapShot =>{
        // anytime there is an update we update mypost state
        // in every collection there are docs
        // map through each doc and return a object
        setPosts(snapShot.docs.map(doc =>(
            {
                id:doc.id,
                data: doc.data(),
            }
        )))

    })

  },[])

  const sendPost =(e) =>{
    e.preventDefault();
    // push post input to firebase post collection database
    // add=>to add he object to the database
    db.collection('posts').add({
        name :'Albert Nutifafa',
        description: 'A Test Clone',
        message: input,
        photourl:'',
        timestamp: firebase.firestore.FieldValue.servertimestamp()
    })
     
    setInput('')

  }

  return (
    <div className='feed'>
      {/* Post Container */}
      <div className="feed__inputContainer">
       <div className="feed__input">
          <CreateIcon />
          <form>
            <input value={input} onChange={e =>setInput(e.target.value)} type="text" />
            <button onClick={sendPost} type='submit'>Send</button>
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
    {posts.map(({id ,data:{name ,description ,message ,photourl}})=> 
    (
        <Posts
        key={id}
        name={name}
        description={description}
        message={message}
        photourl={photourl}
        />
        )
        )}
        {/* <Posts name='Albert Dovlo Nutifafa' description='This is a test'  message='Hello world jjhkjfh jsfdh fdhkajhr jdfhj dfjh dhfk hwj hjfdhj hjdfhie jfjko a.rh jhf hfier bkf bnbf kf dhh jfdfjfddflaffd gfhb ddfldfhheefd fhdgfhgfkdgfgah fa fgdfgdf hdf bflfddf hdfgfd hhgfdjf  ' photourl=''/> */}

    </div>
  )
}

export default Feed
