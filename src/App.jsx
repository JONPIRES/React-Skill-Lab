// import logo from './logo.svg';
import { useState } from "react"
import SkillList from "./SkillList"
import NewSkillForm from "./NewSkillForm"
import "./App.css"

// const skills = [
//   {name:"HTML", level:5},
//   {name:"CSS", level:3},
//   {name:"Javascript", level:4},
//   {name:"Python", level:2}
// ]

function App() {
  const [skills,setSkills] = useState([
    {skill:"HTML", level:5},
    {skill:"CSS", level:3},
    {skill:"Javascript", level:4},
    {skill:"Python", level:2}
  ])

  function handleSkill(newSkill){
    setSkills(skills => [...skills,newSkill])
  }
  return (
    <div className="App">
        <h1>React Dev Skills</h1>
        <SkillList skills={skills}/>
        <br />
        <NewSkillForm handleSkill={handleSkill} />

    </div>
  );
}

export default App;
