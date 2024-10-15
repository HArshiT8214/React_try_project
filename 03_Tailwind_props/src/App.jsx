import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


function App() {

  return (
    <>
      <h1 className="bg-green-300 text-black rounded-xl mb-4">hello using tailwind </h1>
      <Card username="first1" btnText='hello'/>
      <Card username="try@1" btnText='cilck'/>
      <Card username="try@2"/>
      
    </>
  )
}

export default App
