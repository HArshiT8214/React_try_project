import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center top-12 inset-x-4 px-2 py-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
          <button onClick={()=>setColor("red")} className="outline-none px-4 rounded-full text-black shadow-lg " style={{ backgroundColor: "red" }}>Red</button>
          <button onClick={()=>setColor("blue")} className="outline-none px-4 rounded-full text-white shadow-lg " style={{ backgroundColor: "Blue" }}>Blue</button>
          <button onClick={()=>setColor("green")} className="outline-none px-4 rounded-full text-black shadow-lg " style={{ backgroundColor: "green" }}>Green</button>
          <button onClick={()=>setColor("pink")} className="outline-none px-4 rounded-full text-black shadow-lg " style={{ backgroundColor: "pink" }}>Pink</button>
          <button onClick={()=>setColor("cyan")} className="outline-none px-4 rounded-full text-black shadow-lg " style={{ backgroundColor: "cyan" }}>Cyan</button>
        </div>
      </div>
    </div>
  )
}

export default App
