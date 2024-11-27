interface SideBarButtonProps {
    children?: React.ReactNode;
    text : string;
    onClick: (arg : string) => void;
}

function SideBarButton({ children, text, onClick }: SideBarButtonProps) {
  function handleClick() {
    onClick(text);
  }

  return (
    <button className="sidebar-bttn" onClick={handleClick}>
      {children}
      {text}
    </button>
  );
}

export default SideBarButton