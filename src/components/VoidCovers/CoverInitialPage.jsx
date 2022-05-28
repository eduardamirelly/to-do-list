import React from 'react'
import CoverInitialPageImage from '../../assets/illustrations/cover-initial-page.svg'

function CoverInitialPage() {
  return (
    <div className="flex items-center justify-center mt-16">
      <img src={CoverInitialPageImage} alt="cover-initial-page" />
    </div>
  )
}

export default CoverInitialPage