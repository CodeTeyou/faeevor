export default function Shapes() {

    const shapeCount = Math.floor(Math.random() * 20);
    const shapeList = [];
    for (let i = 0; i <= shapeCount; i++) {
      const xValue =  Math.floor(Math.random() * 100)
      const yValue = Math.floor(Math.random() * 100)
      const size = Math.floor(Math.random() * 150)
      shapeList.push({
        id: i,
        className: `bg-violet absolute rounded-full overflow-hidden`,
        style: {
          width: `${size}px`,
          height: `${size}px`,
          top: `${yValue}vh`,
          right: `${xValue}vw`
        }
      })
    }


  return (
    <>
    <div className="w-screen h-screen overflow-hidden">
      {shapeList.map((shape) => (
        <div key={shape.id} className={shape.className} style={shape.style} />
      ))}
    </div>

    </>
  );
}