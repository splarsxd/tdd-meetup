import {shallow} from "enzyme"
import Header from "./Header"
import {render} from "@testing-library/react"

describe("header comp", () =>{
  it("renders without error", () =>{
    //smoke test

    render(<Header searcher="" setter={() =>{}}/>)
  })



  it("renders input with initial text", () => {
    //white box testing

     const wrapper = shallow(<Header searcher="" setter={() => {}} />)

    expect(wrapper.exists ("input")).toBe(true)

    expect(wrapper.find("input").prop("placeholder")).toMatch ("Search meetup..")
  })


  it("renders input with empty initials", () => {
    const wrapper = shallow(<Header searcher="" setter={() => {}} />)
    const input = wrapper.find("input")
    expect(input.exists()).toBe(true)
    
    const value= input.render().val()
    expect(value).toBe("")
  })
})
