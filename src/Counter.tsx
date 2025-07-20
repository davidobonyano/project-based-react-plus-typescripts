import { useState } from "react"

export const Counter:React.FC = () => {

    const [likes, setLikes] = useState<number>(0)

    
    const handleCount = () =>{
        setLikes((l) => l + 1)
    }

  return (
    <div>
        <div>{likes}</div>
        <button onClick={handleCount}>LIKES</button>
        <button onClick={() => setLikes((l) => l > 0 ? l  - 1: 0)}>disLIKES</button>
        <button onClick={() => setLikes(0)}>reser</button>
    </div>
  )
}
