import Player from "./components/player";
import SideBar from "./components/sidebar";

export default function App() {
  return (
    <div className="h-screen bg-blck">
      <div className="h-[90%] flex">
        <SideBar />
      </div>
      <Player />
    </div>
  )
}