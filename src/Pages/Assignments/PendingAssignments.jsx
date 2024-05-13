import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import axios from "axios";
import { MdCancel } from "react-icons/md";

const PendingAssignments = () => {
  const { user } = useContext(AuthContext);
  //   console.log(user)

  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3200/assignment-submissions").then((res) => {
      setSubmissions(res.data);
    });
  }, []);
  //   console.log(submissions)

  const pendingAssignments = submissions.filter(
    (a) => (a.creator?.email === user?.email && a.obtainedMarks<=0)
  );
//   console.log(pendingAssignments);

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
              <>
                <tr>
                  <td>{p.title}</td>
                  <td>{p.marks}</td>
                  <td>{p.writer.name}</td>
                  <td>
                  <button
              className="bg-[#045281] px-4 py-2 text-white font-semibold rounded-sm"
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              Give Marks
            </button>
            <dialog
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box bg-[#0f80de] text-white -z-10">
                <form >
                  <div className="bg-[#045281] p-4 text-center rounded-lg mb-4">
                    <h1 className="text-2xl font-semibold ">Examinee Information</h1>
                    <div>
                        <h1>{p.writer?.name}</h1>
                        <h2>Assignment Link: {p.link}</h2>
                        <h3>Quick Note: {p.note}</h3>
                        <h4>Total Marks: {p.marks}</h4>
                    </div>
                  </div>
                  <input
                    type="text"
                    name="link"
                    id=""
                    className="w-full px-2 py-1 rounded-lg text-[#045281]"
                    placeholder="Give Marks "
                  />
                  <div>
                    <button
                      method="dialog"
                      className="bg-[#045281] px-4 py-2 text-white mt-2 font-semibold rounded-sm"
                    >
                      Submit Marks
                    </button>
                  </div>
                </form>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button>
                      <MdCancel size={35} />
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PendingAssignments;
