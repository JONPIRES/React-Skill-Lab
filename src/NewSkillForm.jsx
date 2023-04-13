import React, {useState} from 'react'
import "./NewSkillForm.css"

// this State has to reflect the same key values from the NewSkillForm which are "name" and "level"
const NewSkillForm = (props) => {
    const [newSkill, setNewSkill] = useState({
        skill : "" ,
        level: "3"
    })

    function handleInput(e){
        setNewSkill({
            ...newSkill,
            [e.target.name]: e.target.value,

        })
    }

    function handleAddNew(e){
        e.preventDefault()
        props.handleSkill(newSkill)

    }

  return (
    <>
    {/* The values in the inputs have to reflect the same keys from the newSkill State above along with the option values. */}
        <form onSubmit={handleAddNew} className='skill-form' >
            <label htmlFor="">Skill</label>
            <input onChange={handleInput} type="text" name='skill' value={newSkill.skill} />
            <label htmlFor="">Level</label>
            <select onChange={handleInput} name="level" value={newSkill.level} id="">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <button type='submit'>Add Skill</button>
        </form>
    </>
  )
}

export default NewSkillForm