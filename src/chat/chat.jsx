import React, { useState, useEffect } from 'react';

export function Chat() {
  const [username, setUsername] = useState(localStorage.getItem("username") || null);

  const [message, setMessage] = useState([
    { username: "Other user", message: "Lorem ipsum odor amet, consectetuer adipiscing elit." },
    { username: "Mystery user", message: "Lorem ipsum odor amet, consectetuer adipiscing elit." }
  ]);

  const [inputText, setInputText] = useState("");

  const users = ["Other user", "Mystery user"];
  const messages = ["Lorem ipsum odor amet, consectetuer adipiscing elit.", "Lorem ipsum odor amet, consectetuer adipiscing elit."];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * users.length);
      setMessage([...message, { username: users[randomIndex], message: messages[randomIndex] }]);
    }, 15000);

    return () => clearInterval(interval);
  }
  , []);

  const sendMessage = (event) => {
    event.preventDefault();
    setMessage([...message, { username: username, message: inputText }]);
    setInputText("");
  };

  return (
    <main className="container-fluid bg-secondary text-center">
            <div>
                <h2>Chat</h2>
                <div className="chat-box">
                    {message.map((msg, index) => (
                        <div key={index} className={`message ${msg.username === username ? "self" : "other"}`}>
                            <div className="message-username">{msg.username}</div>
                            <div className="message-text">{msg.message}</div>
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