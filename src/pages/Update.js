import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react"

const Update = () => {
  const { id } = useParams()

  return (
    <div className="page update">
      <h2>Update - {id}</h2>
    </div>
  )
}

export default Update