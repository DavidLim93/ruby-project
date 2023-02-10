import React, {useState} from "react";

function Checkbox() {

    const [isChecked, setIsChecked] = useState(false)

    function handleChange (e) {
        setIsChecked(!isChecked)
    }

    return (
        <div className="checkbox-wrapper">
        <label>
            Complete? 
            <input 
            type="checkbox"
            checked={isChecked}
            onChange={handleChange}
            />
        </label>
      </div>
    )

}

export default Checkbox;