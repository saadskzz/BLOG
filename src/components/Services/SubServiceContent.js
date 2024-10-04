import React from 'react'
import './subServicepage.css'
function SubServiceContent({subServiceTitle,subServicePara}) {
  return (
    <div>

    <p className='subservicetitle'>{subServiceTitle}</p>
    <p className='subservicepara'>{subServicePara}</p>
    </div>
  )
}

export default SubServiceContent