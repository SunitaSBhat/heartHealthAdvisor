import React from 'react'
import "./navbar.css";
import { useRouter } from 'next/navigation';
export default function () {
  const router = useRouter();

  const handleClick = () => {
    // Navigate to the Create Page
    router.push('/create');
  };
  return (
    <div className="navbar">
        <ul id="login">
            <li id="n">N</li>
            <li id="slash">/</li>
            <li onClick={handleClick}>Login</li>
        </ul>
        <ul>
            <li id="github">
            <img src="github.webp"></img>
                <p id="git">Github</p>
            </li>
            <li id="deploy">
              <img src="verceil.png"></img>
                <p id="deployi">Deploy To Vercel</p>
            </li>
        </ul>
    </div>
  )
}
