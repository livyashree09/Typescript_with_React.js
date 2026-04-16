

const CallbackChild = ({ sendDataToParent }: { sendDataToParent: (data: string) => void }) => {
    
    const sendData = () =>{
      
        const data = "Hello from child component";
        sendDataToParent(data);
    }

    return(
<>
   <h1>ChildComponent</h1>
   <button onClick = {sendData}>Send Data to Parent</button>

</>
    )
};
export default CallbackChild;