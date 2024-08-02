import React from 'react'
import GetImageUrl from './GetImageUrl';     


function Profile({name,image,profession,Award,Discoverd}) {
  return (
    <>
 <div>
      
      <section className="profile m-auto bg-primary-subtle w-75 text-center h-100">
        <h2>{name}</h2>
        <img
          className="avatar"
          src={GetImageUrl(image)}
          alt="Maria Skłodowska-Curie"
          width={70}
          height={70}
        />
        <ul>
          <li className='p-2'>
            <b>Profession: {profession}</b> 
          </li>
          <li>
            <b>Awards: {Award} </b> 
         
          </li>
          <li className='p-4'>
            <b>Discovered:{Discoverd} </b>
          
          </li>
        </ul>
      </section>
      
    </div>
    </>
  )
}

export default Profile