interface SideBarButtonProps {
    children?: React.ReactNode;
}

function SideBarButton({ children }: SideBarButtonProps) {
  return (
    <button className="sidebar-bttn">{children}</button>
  )
}

export default SideBarButton