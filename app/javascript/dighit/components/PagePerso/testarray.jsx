import React, {useState} from 'react'

const TestArray = () => {

  const [test, setTest] = useState("")


  const onClick = (e) => {
    console.log(e)
  }

  return(
    <div>
      <p onToggle={() => onClick("test")}>test</p>
      <p onClick={() => onClick("trou")}>trou</p>
      <p onClick={() => onClick("duc")}>duc</p>
    </div>
  )
}


export default TestArray
