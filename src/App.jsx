import './App.css'
import Blackboard from './components/Blackboard'
import MusicPlayer from './components/Music'
import Navbar from './components/Navbar'
import PhotoUpload from './components/PhotoUpload'
import PomodoroTimer from './components/Pomodoro'
import PriorityWall from './components/PriorityWall'

function App() {

  return (
    <>
      <Navbar />
      <div className='wall'>
        <div className='left-side'>
          <PomodoroTimer />
          <PriorityWall />
          <MusicPlayer />
        </div>
        <div className='middle'>
          <Blackboard />
        </div>
        <div className='right-side'>
          <PhotoUpload />
        </div>
      </div>
    </>
  )
}

export default App
