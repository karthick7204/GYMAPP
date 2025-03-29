import React from "react";
import { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { SCHEMES, WORKOUTS } from '../utils/swoldier'


function Header(props) {
  const { index, title, description } = props;
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center justify-center gap-2'>
        <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400'>{index}</p>
        <h4 className='text-xl sm:text-2xl md:text-3xl'>{title}</h4>
      </div>
      <p className='text-sm sm:text-base mx-auto'>{description}</p>
    </div>
  );
}
export default function Generator() {
  const [showModal , setModal] = useState(false);
  const [poison ,setpoison] = useState('individual')
  const [muscles , setMuscles] = useState([])
  const [goals ,setGoals] = useState('strength_power')
  //let showModal = false
  function toggleModal(){
    setModal(!showModal)
  }
  
  function updateMuscles(muscleGroup){
   //  35:15
  }

  return (
    <SectionWrapper
      header={"generate your workout"}
      title={["It's", "huge", "o'clock"]}
    >
        <Header
        index={"01"}
        title={"Pick your poison"}
        description={"Select the workout you wish to endure."}
      />
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
      {Object.keys(WORKOUTS).map((type,typeIndex)=>{
        return(
          <button
  onClick={() => {
    setpoison(type);
  }}
  className={
    'bg-slate-950 border py-3 duration-200 hover:border-blue-600 rounded-lg ' + 
    (type === poison ? ' border-blue-600' : ' border-blue-400')
  }
  key={typeIndex}
>
  <p className="capitalize">{type}</p>
</button>
        
        )
         
      })}
      </div>

      <Header
        index={"02"}
        title={'Lock on targets'}
        description={"Select the muscles judged for annihilation."}
      />
      <div className='bg-slate-950  border border-solid border-blue-400 rounded-lg flex flex-col'>
         <button onClick={toggleModal}className='relative py-3 flex items-center justify-center'>
          <p>Select muscle groups</p>
          <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-sort-down"></i>
         </button>
         {showModal && (
            <div className='flex flex-col px-3'>
              {(poison === 'individual' ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map((muscleGroup,musclesGroupIndex) => {
                 return(
                    <button onClick{} key={musclesGroupIndex}
                    className='hover:text-blue-400 duration-200'
                    >
                      <p className='uppercase'>{muscleGroup}</p>
                    </button>
                 )
              })}
              
</div> //23:17
         )}
      </div>
   
      <Header
        index={"03"}
        title={"Become Beast"}
        description={"Select your ultimate objective."}
      />
      <div className='grid grid-cols-3  gap-4'>
      {Object.keys(SCHEMES).map((SCHEME,SCHEMEIndex)=>{
        return(
          <button
          onClick={() => {
            setGoals(SCHEME);
          }}
          className={
            'bg-slate-950 border py-3 duration-200 hover:border-blue-600 rounded-lg ' + 
            (SCHEME === goals ? ' border-blue-600' : ' border-blue-400')
          }
          key={SCHEMEIndex}
        >
          <p className="capitalize">{SCHEME}</p>
        </button>
        
        )
         
      })}
      </div>
    </SectionWrapper>
  )
}
