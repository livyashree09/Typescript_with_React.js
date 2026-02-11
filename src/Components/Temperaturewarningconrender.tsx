

const Temperaturewarningconrender = () =>{

  const temperature = 40;
    return (
    <>
      <h2>Temperature: {temperature}°C</h2>
     {
     temperature > 40 ? "Hot" :
     temperature < 10 ?  "Cold":
     "warm"
     }
      
        
        </>
    )

}
export default  Temperaturewarningconrender;