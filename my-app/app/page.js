'use client'
import {useChat} from "ai/react";
import "./page.css";
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./navbar.tsx";
import Welcomebox from "./welcomebox.tsx";
import Questions from "./questions.tsx";
import Chat from "./chatting.tsx";
export default function Home() {
  const {input, handleInputChange, handleSubmit, isLoading, messages} = useChat();
  console.log(messages);
  console.log(input);
  return (
    <main>
      <Navbar/>
      <Welcomebox/>
      <Questions/>
      <Chat/>
    </main>
  );
}
