export default function DarkModeToggle() {
    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');
    }
  
    return (
        <button onClick={toggleDarkMode}></button>
    )
}
