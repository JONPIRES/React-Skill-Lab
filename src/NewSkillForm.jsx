import React from 'react'
import "./NewSkillForm.css"

const NewSkillForm = () => {
  return (
    <>
        <form className='skill-form' action="">
            <label htmlFor="">Skill</label>
            <input type="text" />
            <label htmlFor="">Level</label>
            <select name="" id="">
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
            </select>
            <button>Add Skill</button>
        </form>
    </>
  )
}

export default NewSkillForm