

import Props from './Props';

const ParentProps =()=>{
    return(
        <div>
            <h1 className="flex items-center justify-center font-bold  text-yellow-500">Hi I am Parent Component</h1>
            <Props name="John" age={30} />
        </div>
    )
}

export default ParentProps; 