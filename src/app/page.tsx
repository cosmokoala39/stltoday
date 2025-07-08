import EditorsPick from '@/components/EditorsPick'
import LatestNews from '@/components/LatestNews'
import News from '@/components/News'
import NewsGrid from '@/components/NewsGrid'
import RecommendedSection from '@/components/RecommendedSection'
import React from 'react'

function page() {
  return (
    <div>
      <NewsGrid/>
      <RecommendedSection/>
      <LatestNews/>
      <EditorsPick/>
      <News/>
    </div>
  )
}

export default page