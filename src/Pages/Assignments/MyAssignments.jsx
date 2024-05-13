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

  const MyAssignments = assignments.filter(
    (a) => a.creator?.email === user?.email
  );

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
              <th>Description</th>
              <th>Marks</th>
              <th>Due Date</th>
            </tr>
          </thead>
          <tbody>
            {MyAssignments.map((a) => (
              <>
                <tr>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-20 h-20">
                          <img
                            src={a.thumbnail}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{a.title}</div>
                      </div>
                    </div>
                  </td>
                  <td title={a.description}>
                   {a.description.slice(0,30)}...
                  </td>
                  <td>{a.marks}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">{a.dueDate}</button>
                  </th>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAssignments;
