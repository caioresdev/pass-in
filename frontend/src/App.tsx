import { AttendeeList } from "./components/attendee-list"
import { Header } from "./components/header"
import './index.css'
export function App() {
  return (
    <div className="max-w-[1216px] bg-red-500 mx-auto py-5" >
      <Header/>
      <AttendeeList/>
    </div>
  )
}


