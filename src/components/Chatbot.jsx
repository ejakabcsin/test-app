import React, { useState, useRef, useEffect } from "react";
import responses from "../data/responses.json";
import "../styles/Chatbot.css"; // Import css, json files

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { sender: "Bot", text: "Hi! How can I help you today?" } //initial state
  ]);
  const [input, setInput] = useState(""); //state vars that check on the input and open/close state of chat window
  const [isOpen, setIsOpen] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return; //trim text to ONLY include the current input (had issues with previous messages being read)

    const userMessage = { sender: "User", text: input }; //set userMessage to input, assign sender to user
    const botResponse = getBotResponse(input); //send input to getBotResponse

    // setMessages((prev) => [...prev, userMessage, botResponse]);
    // setInput("");

    setMessages((prev) => [...prev, userMessage]); //array that stores previous messages, then sets input to empty string
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [...prev, botResponse]); //array then stores previous bot response, waits 1s, then displays the response to the user
    }, 1000); // 1000ms delay
  };

  const getBotResponse = (msg) => {
    const text = msg.toLowerCase().trim();
    for (let entry of responses) { //check json for any matching key words
      if (entry.keywords.some((keyword) => text.includes(keyword))) {
        return { sender: "Bot", text: entry.response }; //if it finds one, respond with appropriate answer
      }
    }
    return { sender: "Bot", text: "Sorry, I didn’t understand that." }; //essentially the "else" condition
  };

  return (
    // Chat button toggle
    <div className="chatbot-container">
      <button className="chatbot-toggle" onClick={() => setIsOpen(!isOpen)}> 
        {isOpen ? "Close Chat" : "Open Chat"}
      </button>

      {isOpen && ( //checks if chat box is open, then goes through and renders each message in a div
        <div className="chatbot-box">
          <div className="chatbot-messages">
            {messages.map((msg, idx) => ( 
              <div
                key={idx}
                className={`chatbot-message ${msg.sender === "Bot" ? "Bot" : "User"}`} //checks if user or bot sent message (CSS changes based on sender)
              >
                <p>
                  <strong>{msg.sender}:</strong> {msg.text}
                </p>
              </div>
            ))}
          </div>
          <div className="chatbot-input-area">
            <input
              type="text"
              className="chatbot-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault(); //ensures only one message is sent. Had previous issues where two messages would go through at once
                  handleSend();
                }
              }}
            />
            <button className="chatbot-send" onClick={handleSend}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
