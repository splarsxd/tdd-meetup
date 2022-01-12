import {mount} from "enzyme"
import App from "./App"
import {render} from "@testing-library/react"

test("renders without error", () => {
  //smoke test

  render(<App />)
  

})



it ("lists the matching search", () => {
  const wrap = mount( <App /> )

  const input = wrap.find("header input")
  const testSearchString = "test"
  
  input.simulate ("change",{target: {value: testSearchString}} )

  const card = wrap.find("main.card-grid .card")
  const title = card.find("h3")

  title.forEach((titled) => {

    
    const real = title.text ()
    
  expect(real.toLowerCase()).toMatch(testSearchString.toLowerCase())})})
