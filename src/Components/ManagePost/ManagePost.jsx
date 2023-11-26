/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './ManagePost.css'

export default function ManagePost({val}) {
    
const  {id,body,title} = val

  return (
    <>  
        <div className="card" key={id}>
            <p><b>Title: </b>{title}</p>
            <p><b>Body: </b>{body}</p>
        </div>
    </>
  )
}
