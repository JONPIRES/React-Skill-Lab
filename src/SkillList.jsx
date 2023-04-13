import React from 'react'
import SkillListItem from "./SkillListItem"
import "./SkillList.css"

function SkillList(props) {
  return (
    <ul className='skill-list'>
        {props.skills.map((skill, idx) => {
         return <SkillListItem skill={skill.skill} level={skill.level} key={idx +skill} index={idx} /> 
        } )}
        

    </ul>
  )
}

export default SkillList