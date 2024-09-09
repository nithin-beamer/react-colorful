import { HexColorPicker } from "react-colorful";

const Popover = ({color, onChange}) => {
    return(
        <div className="popover">
            <HexColorPicker color={color} onChange= {onChange} />
        </div>
    )
}

export default Popover