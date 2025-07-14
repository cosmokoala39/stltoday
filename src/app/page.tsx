import EditorsPick from '@/components/EditorsPick'
import LatestNews from '@/components/Politics'
import News from '@/components/News'
import NewsGrid from '@/components/NewsGrid'
import RecommendedSection from '@/components/RecommendedSection'
import React from 'react'




function page() {
  return (
    <div>
      <NewsGrid category="business"/>
      <RecommendedSection category='health'/>
      <LatestNews category='politics'/>
      <EditorsPick category='technology'/>
      <News/>
    </div>
  )
}

export default page