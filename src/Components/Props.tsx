type childProps = {
    name:string;
    age:number;
}

const Props = 
 ({name,age }:childProps)=>{
    return(
        <div>
            <h1>{name} is {age} years old</h1>
        </div>
    )
 }


export default Props;