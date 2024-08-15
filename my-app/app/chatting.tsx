"use client";
import React from 'react'
import "./chat.css";
import {useChat, Message} from "ai/react";


// import useState so that we can update the response we get from the API
import { useState } from "react";
// import axios so we can easily send the user's input to our server
import axios from "axios";
export default function chatting() {
    // We store and update the responses we get from the API with this state
// I've added a default value to the 'response' state that we should see 
// when the page initially loads
  const [response, setResponse] = useState<string>("Hi there! How can I assist you?");
  // We also store the input we get from the user in the 'value' state and
  // update it everytime the user types into the input field we have added below
    const [value, setValue] = useState<string>("");
  
  // We use this function in the newly added 'input' in the return statement.
  // Each time the user types into the input, this function ensures that the
  // 'value' state is updated
  // We also add a type to the event that we pass in
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
      setValue(e.target.value);
  
  // This function runs when the user presses the button we have added below
  // This function takes the contents of 'value' (the input from the user) 
  // and then sends this value to our server, which then sends a new request
  // to the API
  // The function then waits for the new response and updates the 'response'
  // value which we then display on the page
  const handleSubmit = async () => {
    try {

      const response = await axios.post("/api/chat/route", { question: value });
      console.log("ahi");
      const content= response.data.choices[0].message.content;
      setResponse(content);
      console.log(content);
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };
  
  
    return (
      <form className="chatting" onSubmit={handleSubmit}>
        <p>Chatbot: {response}</p>
        <div className="chat">
          <img src="addFile.webp" alt="Add File" />
          <input
            type="text"
            placeholder="Send a message"
            value={value}
            onChange={onChange}
          />
           <div>
      
      </div>
          <img src="enter.webp" alt="Send Message" onClick={handleSubmit}/>
        </div>
        <p>Open source AI chatbot built with Next.js and Vercel AI SDK.</p>
      </form>
    );
    
  
}
