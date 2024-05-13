import axios from "axios";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProviders";
import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";

const Assignment = ({ assignment }) => {
  // console.table(assignment)

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    _id,
    title,
    description,
    marks,
    difficulty,
    thumbnail,
    dueDate,
    creator,
  } = assignment;

  const handleDeleteAssignment = (id) => {
    if (user?.email !== creator?.email) {
      return Swal.fire({
        icon: "error",
        text: "Action Denied",
      });
    }

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:3200/delete-assignment/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              navigate("/assignments");
            }
          });
      }
    });
  };

  return (
    <div className="p-4 mx-2 space-y-4 md:p-8  rounded-lg shadow-lg border-[#0f80de]">
      <div
        style={{
          backgroundImage: `url(${thumbnail})`,
        }}
        className="h-64 md:h-72 bg-cover"
      ></div>
      <div className="md:flex justify-between items-center">
        <div>
          <h1 className="font-semibold text-2xl">{title}</h1>
          <div>
            <h1>{difficulty}</h1>
            <h1>Due: {dueDate}</h1>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <button className="text-xl bg-black text-red-600 p-2 rounded-lg" onClick={() => handleDeleteAssignment(_id)}><MdDelete/></button>
          <Link to={`/update-assignment/${_id}`}>
            <button className="text-xl bg-black text-green-600 p-2 rounded-lg"><MdModeEdit/></button>
          </Link>
        </div>
      </div>

      <Link to={`/assignment-details/${_id}`}>
        <button className="bg-[#045281] text-white px-4 py-2 rounded-lg font-semibold hover:scale-105 transition-transform">
          View Assignment
        </button>
      </Link>
    </div>
  );
};

export default Assignment;
