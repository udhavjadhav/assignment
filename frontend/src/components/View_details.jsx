import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const View_details = () => {
  const [view_details, setViewDetails] = useState([])

  const { id } = useParams()
  useEffect(() => {
      fetch(`https://localhost:3001/${id}`)
          .then(res => res.json())
          .then(json => setViewDetails(json))
  }, [])


  return (
    <div>
      {
        view_details && view_details.map((e,i)=>{
          return(
            <div>
              {e.name}
            </div>
          )
        })
      }
    </div>
  )
}

export default View_details