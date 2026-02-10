import { useRef } from "react";


const Useref2 = () => {
   const countRef = useRef (0);

   const handleClick = () => {
    countRef.current++;
    alert(`Clicked ${countRef.current} times`);
  };

return(
    <>
    <button onClick ={(handleClick)}>Click me </button>
    </>
)

}

export default Useref2;