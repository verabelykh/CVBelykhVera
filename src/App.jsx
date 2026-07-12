import Frame2136141531 from './Frame2136141531.jsx'
import MobileFrame from './MobileFrame.jsx'

function App() {
  return (
    <>
      <div className="hidden md:block">
        <Frame2136141531 />
      </div>
      <div className="block md:hidden">
        <MobileFrame />
      </div>
    </>
  )
}

export default App
