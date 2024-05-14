import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import axios from "axios";
import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Link } from "react-router-dom";

const PendingAssignments = () => {
  let [isOpen, setIsOpen] = useState(false);


  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  const { user } = useContext(AuthContext);
  //   console.log(user)

  const [submissions, setSubmissions] = useState([]);
  //   const [control, setControl] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3200/assignment-submissions", {withCredentials: true}).then((res) => {
      setSubmissions(res.data);
    });
  }, []);
  //   console.log(submissions)

  const pendingAssignments = submissions.filter(
    (a) => a.creator?.email === user?.email && a.obtainedMarks < 0
  );

  if (pendingAssignments.length < 1) {
    return (
      <h1 className="text-4xl text-red-600 pt-24 text-center min-h-screen font-bold">
        No Pending Assignments
      </h1>
    );
  }

  return (
    <div className="min-h-screen">
      <h1 className="pt-20 text-center text-[#045281] font-bold text-5xl">
        Pending Assignments
      </h1>
      <hr className="mt-2" />
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Assignment Title</th>
              <th>Assignment Marks</th>
              <th>Examinee Name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {pendingAssignments.map((p) => (
              <tr key={p._id}>
                <td>{p.title}</td>
                <td>{p.marks}</td>
                <td>{p.writer?.name}</td>
                <td key={p._id}>
                  <Link to={`/assignment-marks/${p._id}`}>
                    <button className="bg-[#045281] px-4 py-2 text-white font-semibold rounded-sm">Give Mark</button>
                  </Link>
                 
                  {/* <Link to={`/assignment-marks/${p._id}`}>
                      <button className="bg-[#045281] px-4 py-2 text-white font-semibold rounded-sm">
                        Give Marks
                      </button>
                    </Link> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PendingAssignments;
