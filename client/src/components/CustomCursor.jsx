import { useEffect, useRef } from "react";

function CustomCursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    let x = 0,
      y = 0,
      targetX = 0,
      targetY = 0;
    const ease = 0.2; // trailing ease for outer ring

    const onMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      // inner dot follows the mouse directly
      dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
    };

    const onEnter = () => {
      cursor.style.opacity = "1";
      dot.style.opacity = "1";
    };
    const onLeave = () => {
      cursor.style.opacity = "0";
      dot.style.opacity = "0";
    };

    const animate = () => {
      x += (targetX - x) * ease;
      y += (targetY - y) * ease;
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseenter", onEnter);
    window.addEventListener("mouseleave", onLeave);
    animate();

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={dotRef} className="custom-cursor-dot" />
    </>
  );
}

export default CustomCursor;
