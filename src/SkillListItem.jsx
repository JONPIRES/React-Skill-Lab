import React from 'react'
import "./SkillListItem.css"

const SkillListItem = ({skill, level}) => {
  return (
       <li className='listItem'>{skill} <span className='level'> Level: {level}</span> </li> 
    
  )
}

export default SkillListItem