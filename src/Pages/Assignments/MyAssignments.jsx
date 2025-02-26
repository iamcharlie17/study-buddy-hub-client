import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import axios from "axios";
import Submission from "./Submission"

const MyAssignments = () => {
  const { user } = useContext(AuthContext);
  // console.log(user)
  const [loading, setLoading] = useState(true)
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    axios.get("https://study-buddy-hub-server-one.vercel.app/assignment-submissions", {withCredentials: true}).then((res) => {
      setSubmissions(res.data);
      setLoading(false)
    });
  }, []);

  if (loading)
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <span className="loading text-[#0f80de] w-24 loading-dots "></span>
      </div>
    );

  // console.log(submissions)
  const mySubmissions = submissions.filter(
    (s) => s.writer?.email === user?.email
  );
  // console.log(mySubmissions)

  if(mySubmissions.length<1){
    return <h1 className="text-4xl text-red-600 pt-24 text-center min-h-screen font-bold">No Submission</h1>
  }

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
              <th>Preview</th>
              <th>Title</th>
              <th>Status</th>
              <th>Due Date</th>
              <th>Marks</th>
              <th>Obtianed Marks</th>
              <th>Feedback</th>
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
