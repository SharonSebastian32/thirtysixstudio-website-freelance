import { useEffect, useRef } from "react";
import canvasImages from "./CanvasImages";
function Canvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = canvasImages[80];
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
    };
  });
  return (
    <canvas id="canvas" ref={canvasRef} className="w-[18rem] has-[18rem] ">
      {" "}
    </canvas>
  );
}

export default Canvas;
