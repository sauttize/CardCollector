interface SideBarButtonProps {
    text : string;
    onClick: (arg : string) => void;
}

function SideBarButton({ text, onClick }: SideBarButtonProps) {
  function handleClick() {
    onClick(text);
  }

  return (
    <button className="sidebar-bttn" onClick={handleClick}>
      {text}
    </button>
  );
}

export default SideBarButton