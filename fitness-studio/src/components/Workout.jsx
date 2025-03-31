import React from 'react'
import SectionWrapper from './SectionWrapper'
import ExerciseCard from './exerciseCard'

export default function Workout(props) {
 const {workout} = props
 
  return (
    <SectionWrapper id={'workout'} header={"welcome to"} title={['The', 'FOCUS', 'zone']}>
      <div className='flex flex-col gap-4'>
         {workout.map((exercise,i)=>{
          return(
            <ExerciseCard i={i} exercise={exercise} key={i}/>
          )
         })}
      </div>
    </SectionWrapper>
  )
}//44:41
