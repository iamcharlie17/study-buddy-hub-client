import axios from "axios";
import { useEffect, useState } from "react";
import Assignment from "./Assignment";

const Assignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [control, setControl] = useState(false)
  useEffect(() => {
    axios.get("http://localhost:3200/assignments").then(({ data }) => {
      setAssignments(data);
    });
  }, [control]);

  const handleControl = (value) =>{
    value && setControl(!control)
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
      <div className="grid lg:grid-cols-2 gap-8 my-8">
        {
            assignments.map(assignment => <Assignment handleControl={handleControl} key={assignment._id} assignment={assignment}/>)
        }
      </div>
    </div>
  );
};

export default Assignments;
