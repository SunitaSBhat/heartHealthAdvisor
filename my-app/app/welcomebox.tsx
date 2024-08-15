import React from 'react'
import "./welcomebox.css";
export default function welcomebox() {
  return (
    <div>
        <div className="welcome">
            <h2>Welcome to the Next.js Ai ChatBot</h2>
            <p>This is an open source AI chatbot app template built with Next.js, the Vercel AI SDK, and Vercel KV. </p>
              <p>It uses React Server Components to combine text with generative UI as output of the LLM. The UI state is synced through the SDK so the model is aware of your interactions as they happen.</p>
        </div>
    </div>
  )
}
