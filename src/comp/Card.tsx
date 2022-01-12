import React, {useState } from "react"
import {inf} from "./inf"



interface Props {inf: inf}


const Card = ({ inf }: Props) => {


  const [comm, setComm] = useState<string>("")

  const [comms, setComms] = useState<string[]> ([ ...inf.comments])
  const Commchange = (e: React.ChangeEvent<HTMLInputElement>) =>{const target = e.target
    setComm(target.value)}

  const addComment = () =>{setComms([...comms, comm])

  }


  const [attend, setattend] = useState<boolean> (false)


   const handleAttend=( e: React.ChangeEvent<HTMLInputElement> ) => {
     const target= e.target

     setattend(target.checked)}


  return (
    <section className="card comp">


      <h3 className="cardtitle">{inf.title}</h3>


      <p>{inf.date}</p>
      <p>{inf.description}</p>
      {comms.map((comm, index) => (
        <p key={index}>{comm}</p>
      ))}


      <label htmlFor= "checkbox">Attend: </label>
      <input data-testid="attender" className="cardattend" type= "checkbox" onChange = {handleAttend} />
      <p className="cardrating"> Rating: {inf.rating}</p>

      <button onClick = {addComment}>Comment</button>
      <input className="cardcomment" onChange = {Commchange} placeholder="Add a comment"></input>
    


    </section>
  )
}

export default Card
