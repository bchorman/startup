import React, { useState, useEffect } from 'react';

export function Chat() {
  const [username, setUsername] = useState(localStorage.getItem("username") || null);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    fetchMessages();
    const interval = setInterval(fetchMessages, 5000);
    return () => clearInterval(interval);
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await fetch("/api/messages", {
        method: "GET",
        credentials: "include",
      });
  
      if (response.ok) {
        const data = await response.json();
        setMessages(Array.isArray(data) ? data : []); // Ensure it's always an array
      }
    } catch (error) {
      console.error("Error fetching messages:", error);
      setMessages([]); // Fallback to an empty array
    }
  };
  

  const sendMessage = async (event) => {
    event.preventDefault();
    if (!inputText.trim()) return;

    const response = await fetch("/api/message", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: inputText }),
    });

    if (response.ok) {
      setInputText("");
      fetchMessages();
    } else {
      console.error("Failed to send message");
    }
  };

  return (
    <main className="container-fluid bg-secondary text-center">
      <div>
        <h2>Chat</h2>
        <div className="chat-box">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.user === username ? "self" : "other"}`}>
              <div className="message-username">{msg.user}</div>
              <div className="message-text">{msg.text}</div>
            </div>
          ))}
        </div>
        <form onSubmit={sendMessage}>
          <input
            className="input-group mb-3"
            type="text"
            placeholder="Enter message"
            value={inputText}
            onChange={(event) => setInputText(event.target.value)}
          />
          <button className="btn btn-primary" type="submit">Send</button>
        </form>
      </div>
    </main>
  );
}