import axios from "axios";
import { useEffect, useState } from "react";
import Assignment from "./Assignment";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

const Assignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [control, setControl] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:3200/assignments").then(({ data }) => {
      setAssignments(data);
    });
  }, [control]);

  const handleControl = (value) => {
    value && setControl(!control);
  };

  const handleDifficulty = (difficulty) =>{
    axios.get(`http://localhost:3200/assignments/filter/${difficulty}`)
    .then(res => {
      // console.log(res.data)
      setAssignments(res.data)
    })
  }

  // console.log(assignments)

  return (
    <div className="min-h-screen">
      <div>
        <h1 className="pt-20 text-center text-[#045281] font-bold text-5xl">
          Assignments
        </h1>
        <hr className="text-xl text-[#045281] mt-2" />
      </div>
      <div className="text-end my-4">
        <Menu>
          <MenuButton className={"font-semibold text-2xl mr-4 bg-[#0f80de] text-white px-4 py-1 rounded-lg"}>Difficulty</MenuButton>
          <MenuItems anchor="bottom end" className={'px-8 py-1  text-white'}>
            <MenuItem>
              <button onClick={()=>handleDifficulty('Easy')} className={"font-semibold  border p-2 rounded-lg mx-2 bg-[#0f80de]"}>Easy</button>
            </MenuItem>
            <MenuItem>
              <button onClick={()=>handleDifficulty('Medium')} className={"font-semibold border p-2 rounded-lg mx-2 bg-[#0f80de]"}>Medium</button>
            </MenuItem>
            <MenuItem>
              <button onClick={()=>handleDifficulty('Hard')} className={"font-semibold border p-2 rounded-lg mx-2 bg-[#0f80de]"}>Hard</button>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
      <div className="grid lg:grid-cols-2 gap-8 my-8">
        {assignments.map((assignment) => (
          <Assignment
            handleControl={handleControl}
            key={assignment._id}
            assignment={assignment}
          />
        ))}
      </div>
    </div>
  );
};

export default Assignments;
