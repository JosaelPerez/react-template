import "./App.css"
import Component from "@lib/components/Component"
import ComponentList from "@lib/components/ComponentList"

function App() {
  return (
    <>
      <Component field2={true} />
      <ComponentList />
    </>
  )
}

export default App
