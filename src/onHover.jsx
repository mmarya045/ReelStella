import { useState } from "react";

const [ishover, setIsHover] = useState(false);

function MouseEnter() {
    setIsHover(true);
}