import logo from "@assets/media/vectors/react.svg"

type Props = {
  field?: string
  field2: boolean
}

function Component({ field = "defaultValue", field2 }: Props) {
  return (
    <>
      <div className="m-4 flex gap-4">
        <img src={logo} alt="React Logo" />
        <h1>
          <span className="font-bold">React</span> - {field}
        </h1>
        {field2 && <span>Conditional element</span>}
      </div>
    </>
  )
}

export default Component
