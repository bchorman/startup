import React, { useState, useEffect } from 'react';

export function Chat({ webSocket }) {
  const [name, setName] = useState('');

  // useEffect(() => {
  //   fetchMessages();
  //   const interval = setInterval(fetchMessages, 5000);
  //   return () => clearInterval(interval);
  // }, []);

  // const fetchMessages = async () => {
  //   try {
  //     const response = await fetch("/api/messages", {
  //       method: "GET",
  //       credentials: "include",
  //     });
  
  //     if (response.ok) {
  //       const data = await response.json();
  //       setMessages(Array.isArray(data) ? data : []); // Ensure it's always an array
  //     }
  //   } catch (error) {
  //     console.error("Error fetching messages:", error);
  //     setMessages([]); // Fallback to an empty array
  //   }
  // };
  

  // const sendMessage = async (event) => {
  //   event.preventDefault();
  //   if (!inputText.trim()) return;

  //   const response = await fetch("/api/message", {
  //     method: "POST",
  //     credentials: "include",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ text: inputText }),
  //   });

  //   if (response.ok) {
  //     setInputText("");
  //     fetchMessages();
  //   } else {
  //     console.error("Failed to send message");
  //   }
  // };

  return (
    <main className="container-fluid bg-secondary text-center">
      <div>
        <h2>Chat</h2>
        <div className="chat-box">
          <Name updateName={setName} />
          <Message name={name} webSocket={webSocket} />
          <Conversation webSocket={webSocket} />
        </div>
      </div>
    </main>
  );
}

function Name({ updateName}) {
  return (
    <main>
      <div className='name'>
        <fieldset id='name-controls'>
          <legend>My Name</legend>
          <input onChange={(e) => updateName(e.target.value)} id='my-name' type='text' />
        </fieldset>
      </div>
    </main>
  );
}

function Message({ name, webSocket }) {
  const [message, setMessage] = useState('');

  function doneMessage(e) {
    if (e.key === 'Enter') {
      sendMsg();
    }
  }

  function sendMsg() {
    webSocket.sendMessage(name, message);
    setMessage('');
  }

  const disabled = name === '' || !webSocket.connected;

  return (
    <main>
      <fieldset id='chat-controls'>
        <legend>Chat</legend>
        <input disabled={disabled} onKeyDown={(e) => doneMessage(e)} value={message} onChange={(e) => setMessage(e.target.value)} type='text' />
        <button disabled={disabled || !message} onClick={sendMsg}>
          Send
        </button>
      </fieldset>
    </main>
  );
}

function Conversation({ webSocket }) {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    webSocket.addObserver((chat) => {
      setChats((prevMessages) => [...prevMessages, chat]);
    });
  }, [webSocket]);

  const chatEls = chats.map((chat, index) => (
    <div key={index}>
      <span className={chat.event}>{chat.from}</span> {chat.msg}
    </div>
  ));

  return (
    <main>
      <div id='chat-text'>{chatEls}</div>
    </main>
  );
}

export class ChatClient {
  observers = [];
  connected = false;

  constructor() {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);

    this.socket.onopen = (event) => {
      this.notifyObservers('system', 'websocket', 'connected');
      this.connected = true;
    };

    this.socket.onmessage = async (event) => {
      const text = await event.data.text();
      const chat = JSON.parse(text);
      this.notifyObservers('received', chat.name, chat.msg);
    };
  }

  sendMessage(name, msg) {
    this.notifyObservers('sent', 'me', msg);
    this.socket.send(JSON.stringify({ name, msg}));
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  notifyObservers(event, from, msg) {
    this.observers.forEach((h) => h({ event, from, msg}));
  }
}