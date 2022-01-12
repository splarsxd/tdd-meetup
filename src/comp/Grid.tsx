import { inf } from "./inf"
import Card from "./Card"



const json:  inf[] =[
  {
    id: 1,
    comments: ["This is a heavy critter, not recommended for the majority."],
    rating: 2,
    description: "A club all about fighting.",
    attending: false,
    title: "Fight Club",
    date: "2021-12-17",
  },
  
  {
    id: 2,
    comments: ["All the people were friendly and we all enjoyed watching movies."],
    rating: 5,
    description: "A club for movie nighters.",
    attending: false,
    title: "Movie Club",
    date: "2021-12-24",
  },

  {
    id: 3,
    comments: [],
    rating: 4,
    description: "A club for playing games.",
    attending: false,
    title: "Game Club",
    date: "2022-01-14",
  }]

interface Props{search: string}



const Grid =( {search}:Props) =>{
   const filteredData=json.filter(( inf) => inf.title.toLowerCase().includes(search.toLowerCase()))



  return (
    <main className="cardgrid comp">

       {filteredData.map(( inf) =>(
        <Card key={inf.id} inf={inf}/>
      ))}
       
  </main>
  )}


export default Grid  