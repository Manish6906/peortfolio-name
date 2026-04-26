import React from 'react'
import Modern_Scalable from '../Components/Modern_Scalable'
import SkillAndMordenPage from './SkillAndMordenPage'
import Web_Project from '../Components/Web_Project'
import Recent__Work from '../Components/Recent__Work'
import RecruiterOne from '../Components/RecruiterOne'
import ViewAll from '../Components/ViewAll'
import Tool from '../Components/Tool'
import FullStack from '../Components/FullStack'
import Developers from '../Components/Developers'
import Explore from '../Components/Explore'
import ConceptToCreation from '../Components/ConceptToCreation'

function HomePage() {
  return (
   <>
   <div className='lato-regular'>
   <Modern_Scalable />
    <SkillAndMordenPage />
<Web_Project />
<Recent__Work />

{/* <RecruiterOne />
<RecruiterOne />
<RecruiterOne /> */}
<ViewAll />
<Tool />
<FullStack /> 
<Developers   />
<Explore />
<ConceptToCreation /> 
</div>
   </>
  )
}

export default HomePage
