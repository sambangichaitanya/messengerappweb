import React , { useState , useEffect ,useRef } from 'react'; 
import { FormControl ,InputLabel , Input } from '@mui/material';
import './App.css';
import Message from './Message';
import db from './firebase.js';
import firebase from 'firebase/compat/app';
import { query , collection , onSnapshot , orderBy, addDoc } from "firebase/firestore";
import FlipMove from 'react-flip-move';
import myImage from './messenger.jpg';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';

function App() {
  const [input,setInput] = useState("");
  //const [messages,setMessages] = useState(['hello','hi','are you the member of vip club']);
  const [messages,setMessages] = useState([])
  
  //const [messages,setMessages] = useState([{username:'Vip-1',message:'Vip-1 bolthey'}]);
  const [userName,setUserName] =  useState('');
  const input1 = "Hola VIP's";

  

  //const vip = useRef(false);
  
  useEffect(()=>{
    const q = query(collection(db,"messages"),orderBy("timestamp",'desc'));
      onSnapshot(q,(snapshot)=>{
        setMessages((snapshot.docs.map(doc=>({id:doc.id,message:doc.data()}))));
      })
  },[]);

  const vip1 = useRef(false);
  useEffect(() => {
      if (vip1.current) return;
      vip1.current = true;
      setUserName(window.prompt("Enter your name?"));
  },[])
  

  const sendMessage = (event)=>{
    event.preventDefault();
      //setMessages([...messages,input]);
      //setMessages([...messages,{username:userName,message:input}]);
      addDoc(collection(db,"messages"),{
        message:input,
        username:userName,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
    setInput('');
  }
  //console.log(input);
  //console.log(messages);
  return (
    <div className="App">
    <h1>Hello VIP's Welcome Let's 🚀🚀🚀🚀🚀</h1>
      <img src={myImage} alt="vip'sm-logo"></img>
      <h2>Welcome {userName}</h2>
      <form className='app_form'>
        <FormControl className='app_formcontrol'>
          <InputLabel>write a message</InputLabel>
          <Input className='app_input'  value={input} onChange={event=>setInput(event.target.value)} placeholder={input1}/>
          <IconButton className='app_iconbtn' disabled={!input} variant="contained"  color="secondary" type="submit" onClick={sendMessage}>
            <SendIcon/>
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {messages.map(({id,message})=>{
            //return <Message username={val.username} message={val.message}/>
            return <Message key={id} username = {userName} message = {message}/>
        })}
      </FlipMove>
    </div>
  );
}

export default App;
/*<form>
        <input />
        </form>*/