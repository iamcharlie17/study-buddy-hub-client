import axios from "axios";
import { useContext } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";

const AssignmentDetails = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const assignment = useLoaderData();
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
    <div className="min-h-screen  lg:flex flex-col justify-center">
      <div className="flex mx-2 lg:flex-row flex-col gap-8 py-20">
        <div className="lg:w-1/2 ">
          <img src={thumbnail} alt="" />
        </div>
        <div className="lg:w-1/2 space-y-4">
          <h1 className="md:text-4xl text-xl font-semibold">{title}</h1>
          <p>
            <small>{description}</small>
          </p>
          <div className="flex flex-wrap justify-between items-center">
            <div>
              <h1>
                Difficulty: <span className="font-semibold">{difficulty}</span>
              </h1>
              <h1>
                Marks: <span className="font-semibold">{marks}</span>
              </h1>
              <h1>
                Due Date: <span className="font-semibold">{dueDate}</span>
              </h1>
            </div>
            <div>
              <h1 className="font-semibold text-xl">Creator Information </h1>
              <div>
                <h1>Name: {creator?.name}</h1>
                <h1>Email: {creator?.email}</h1>
              </div>
            </div>
          </div>
          {/* buttons */}
          <div className="flex gap-4 flex-wrap justify-around">
            <button
              onClick={() => handleDeleteAssignment(_id)}
              className="bg-red-500 px-4 py-2 text-white font-semibold rounded-sm"
            >
              Delete
            </button>
            <Link to={`/update-assignment/${_id}`}>
              <button className="bg-green-400 px-4 py-2 text-white font-semibold rounded-sm">
                Update
              </button>
            </Link>
            <button className="bg-[#045281] px-4 py-2 text-white font-semibold rounded-sm">
              Take Assignment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentDetails;
