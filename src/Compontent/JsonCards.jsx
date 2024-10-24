import {Link,NavLink} from "react-router-dom";
import Desc from '../Pages/Desc'
const JsonCards = ({title, body_content,id}) => {
  return (
    <div className='my-4 bg-slate-600 p-4 rounded-md text-white'>
      
        <div className="flex items-center justify-between">
        <h1 className="my-3 text-2xl font-semibold">{title}</h1>
        <h5 className="text-2xl font-bold text-red-700">{id}</h5>
        </div>
        <p className=" text-base text-green-500">{body_content}</p>
        <Link to='Desc'>
          <button className="bg-blue-400 p-4">
            fams
          </button>
        </Link>
        
    
    </div>
  )
}

export default JsonCards
