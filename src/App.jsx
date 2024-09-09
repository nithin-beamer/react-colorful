import { useState } from "react";
import Popover from "./components/Popover";
function App() {
  const [color, setColor] = useState("white");
  const [showPopover, setShowPopover] = useState(false);
  const handleButtonClick = () => {
    setShowPopover((prevShowPopover) => !prevShowPopover);
  };

  return (
    <section className="section" style={{ background: `${color}` }}>
      <div className="container">
        <div className="selector">
          <div
            className="color-container"
            style={{ background: `${color}` }}
          ></div>
          <button onClick={handleButtonClick}>
            {showPopover ? "Close" : "Select"}
          </button>
        </div>
      </div>
      {showPopover && <Popover color={color} onChange={setColor} />}
      <h4>Color Picker</h4>
    </section>
  );
}

export default App;
