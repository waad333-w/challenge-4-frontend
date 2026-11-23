import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router'

function SayedHamedDetails() {
  //[] insted of {}

  //remove null
  const [ sayedHamed, setSayedHamed ] = useState([])

  const { id } = useParams()
  const navigate = useNavigate()

  async function getSayedHamed(){
    const response = await axios.get(`${import.meta.env.VITE_BACK_END_SERVER_URL}/sayed-hameds/${id}`)
    setSayedHamed(response.data)
  }

  async function deleteSayedHamed(){
    const respone = await axios.delete(`${import.meta.env.VITE_BACK_END_SERVER_URL}/sayed-hameds/${id}`)
    navigate('/sayed-hameds')
  }

  useEffect(()=>{
      getSayedHamed()
      //, id
  },[id])


  return (
    <div>
        <h1>Sayed-Hamed Details</h1>

  
          <>
          <img className='sayed-hamed-img' src={sayedHamed.sayedHamedImage} alt={sayedHamed.name}/>
            <h2>{sayedHamed.name}</h2>
{/*             removed sayedhamedId
 */}            <button onClick={deleteSayedHamed}>Delete Sayed-Hamed</button>
            <Link to={`/sayed-hameds/${id}/edit`}>Edit Sayed-Hamed</Link>
          </>
  
    </div>
  )
}

export default SayedHamedDetails
