// import React from 'react'

// const BusinessDetails = () => {
//   return (
//     <div>
//       <h2>Business Details</h2>
//       <p>Address: Example Address</p>
//       <p>Contact: example@example.com</p>
//     </div>
//   )
// }

// export default BusinessDetails


import React, { useState, useEffect } from 'react'
import { getBusinessDetails } from '../../api'

const BusinessDetails = () => {
  const [details, setDetails] = useState({ address: '', contact: '' })

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await getBusinessDetails()
      setDetails(response.data)
    }
    fetchDetails()
  }, [])

  return (
    <div>
      <h2>Business Details</h2>
      <p>Address: {details.address}</p>
      <p>Contact: {details.contact}</p>
    </div>
  )
}

export default BusinessDetails
