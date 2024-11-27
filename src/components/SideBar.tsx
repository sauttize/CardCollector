import SideBarButton from './SideBarButton'
import { TbCards } from 'solid-icons/tb'
import './styles/SideBar.css'

interface SideBarProps {
  onButtonClick: (arg : string) => void;
}

function SideBar({ onButtonClick }: SideBarProps) {
  return (
    <div className="sidebar dark-mode">
      <TbCards />
      <SideBarButton onClick={onButtonClick} text='Open'></SideBarButton>
      <SideBarButton onClick={onButtonClick} text='Collection'/>
      <SideBarButton onClick={onButtonClick} text='Store'/>
    </div>
  )
}

export default SideBar