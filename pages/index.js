// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Welcome from "../components/welcome/welcome"
import Terminal from "../components/terminal/terminal"
export default function Home() {
  return (
    <div>
      <Welcome />
      <Terminal />
    </div>
  )
}
