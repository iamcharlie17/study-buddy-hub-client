import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import axios from "axios";
import Submission from "./Submission"

const MyAssignments = () => {
  const { user } = useContext(AuthContext);
  // console.log(user)

  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3200/assignment-submissions").then((res) => {
      setSubmissions(res.data);
    });
  }, []);

  // console.log(submissions)
  const mySubmissions = submissions.filter(
    (s) => s.writer?.email === user?.email
  );
  // console.log(mySubmissions)

  return (
    <div className="min-h-screen">
      <h1 className="pt-20 font-semibold text-4xl text-center text-[#045281]">
        My Assignments
      </h1>
      <hr className="mt-2" />

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Title</th>
              <th>Status</th>
              <th>Due Date</th>
              <th>Marks</th>
              <th>Obtianed Marks</th>
            </tr>
          </thead>
          <tbody>
            {
              mySubmissions.map(submission =>  <Submission submission={submission} key={submission._id}/>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAssignments;

{/* <tr>
  <td>
    <div className="flex items-center gap-3">
      <div>
        <div className="font-bold">
          {idx + 1}. {a.title}
        </div>
      </div>
    </div>
  </td>
  <td>{a.obtainedMarks && <h1 className="text-yellow-500">Pending</h1>}</td>
  <td>{a.dueDate}</td>
  <th>
    <button className="btn btn-ghost btn-xs">{a.marks}</button>
  </th>
</tr>; */}
