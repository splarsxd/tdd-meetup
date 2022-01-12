import {inf} from "./inf"
import {screen, render} from "@testing-library/react"
import Card from "./Card"
import {mount} from "enzyme"


describe("Card comp", () =>{
  it("renders without errors", () => {
    //smoke test

    const testData: inf = {
      id: 1,
      comments: [],
      rating: 1,
      description: "Monkey fights over banana",
      attending: false,
      title: "Monkey fighting",
      date: "2021-06-02",
    }

     render( <Card inf={testData }/>)
  })


  //black box test
  it("renders title and date for meetup",() =>{

    const testData: inf = {
      id: 2,
      comments: [],
      rating: 5,
      description: "Together we develop our future",
      attending: false,
      title: "Rocket Science",
      date: "2021-09-11",
    }
     render( <Card inf={testData }/>)
    screen.getByText (testData.title,{exact: false})
    screen.getByText (testData.date,{exact: false})})


  it("renders comment with initial text", () => {
    const testData: inf = {
      id: 2,
      comments: [],
      rating: 5,
      description: "Together we develop our future",
      attending: false,
      title: "Rocket Science",
      date: "2021-09-11",
    }
    const wrapper =mount(<Card inf={testData} />)

    const input = wrapper.find(".cardcomment")
    expect(input.exists()).toBe(true)
    expect(input.prop("placeholder")).toMatch("Add a comment")})

  
  it("renders attendance checker as an initial falsy", () => {
    const testData: inf = {
      id: 2,
      comments: [],
      rating: 5,
      description: "Together we develop our future",
      attending: false,
      title: "Rocket Science",
      date: "2021-09-11",
    }


    const wrapper= mount(<Card inf={testData}/>)
    const checkbox = wrapper.find(".cardattend")

    console.log(checkbox.html())
    expect(checkbox.props().checked).toBeFalsy()})})
 
     

     
 