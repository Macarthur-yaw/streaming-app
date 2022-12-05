import { useState } from "react";
import "../Assets/Main.css";
function PopUp(){
const [first, setfirst] = useState(false)

return (
<div className="form">
<form>
    <div>
    <input type="text" />
    <input type="password"/></div>
    <div>
<button >Sign in</button>
</div>
</form>

</div>
);
}

export default PopUp;