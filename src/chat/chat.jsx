import React from 'react';

export function Chat() {
  return (
    <main className="container-fluid bg-secondary text-center">
            <div>
                <h2>Chat</h2>
                <p>Other user: Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
                <p>Myster user: Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
                <form>
                    <input className="input-group mb-3" type="text" placeholder="Type your message here" />
                    <button className="btn btn-primary" type="submit">Send</button>
                </form>
            </div>
        </main>
  );
}