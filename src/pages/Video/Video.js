import React, { useContext, useState } from 'react'
import './Video.css'
import { PlayVideo } from '../../components/PlayVideo/PlayVideo'
import { Recommanded } from '../../components/Recommander/Recommanded'
import { useParams } from 'react-router-dom'
import { Feed } from '../../components/Feed/Feed'
import { ProfileWrapper } from '../../App'
export const Video = () => {
  const {videoId,categoryId}=useParams()
  return (
    
    <div className='play-container'>
      <PlayVideo videoId={videoId}/>
      <Recommanded categoryId={categoryId} />
    </div>
  )
}
