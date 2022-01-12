import {useState } from "react"
import "./App.css"
import Header from "./comp/Header"
import Grid from "./comp/Grid"

function App() {


  const [ search,setter ]
   = useState<string> ("")


  return (

    <div className="component">


      <Header searcher={ search } setter={ setter }/>
       <Grid search={ search }/>

    </div>
  )

}


export default App




