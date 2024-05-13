import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const MyAssignments = () => {
  const { user } = useContext(AuthContext);

  const [assignments, setAssignments] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3200/assignments").then(({ data }) => {
      setAssignments(data);
    });
  }, []);
//   console.log(assignments.filter((a) => a.creator.email === user.email));

  return (
    <div className="min-h-screen">
      <h1 className="pt-20 font-semibold text-4xl text-center text-[#045281]">
        My Assignments
      </h1>
      <hr  className="mt-2"/>
    </div>
  );
};

export default MyAssignments;
