import TopSection from '@/components/Business/TopSection'
import React from 'react'
import MiddleSection from '../../components/Business/MiddleSection'
import ShoppingSection from '@/components/Business/ShoppingSection'
import BottomSection from '@/components/Business/BottomSection'

function page() {
  return (
    <div>
      <TopSection/>
      <MiddleSection/>
      <ShoppingSection/>
      <BottomSection/>
    </div>
  )
}

export default page