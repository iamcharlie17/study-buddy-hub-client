import { useContext, useEffect, useState } from "react";
import formBg from "../../assets/images/form_bg.jpeg";
import { AuthContext } from "../../Providers/AuthProviders";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";

const UpdateAssignment = () => {
  const [assignment, setAssignment] = useState({});

  const id = useParams();
  // console.log(id)

  const { user } = useContext(AuthContext);

  const navigate = useNavigate();
  // console.log({user})
  // console.log(user.user)

  useEffect(() => {
    axios
      .get(`https://study-buddy-hub-server-one.vercel.app/assignment-details/${id.id}`)
      .then((res) => setAssignment(res.data));
  }, [id.id]);

  const {
    _id,
    title,
    description,
    marks,
    difficulty,
    thumbnail,
    dueDate,
    creator,
  } = assignment || {};

  const handleUpdateAssignment = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const marks = form.marks.value;
    const difficulty = form.difficulty.value;
    const thumbnail = form.thumbnail.value;
    const dueDate = form.dueDate.value;

    const updatedAssignmentInfo = {
      title,
      description,
      marks,
      difficulty,
      thumbnail,
      dueDate,
      creator: {
        name: creator?.name,
        email: creator?.email,
      },
    };

    Swal.fire({
      title: "Are you sure to update?",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, please update!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .put(
            `https://study-buddy-hub-server-one.vercel.app/update-assignment/${_id}`,
            updatedAssignmentInfo
          )
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              Swal.fire({
                text: "Successfully Update.",
                icon: "success",
              });
              navigate('/assignments')
            }
          });
      }
    });

    // console.log(updatedAssignmentInfo);
  };

  return (
    <div
      className="min-h-screen bg-fixed pt-16 relative "
      style={{ backgroundImage: `url(${formBg})` }}
    >
      <div className="md:flex flex-col justify-center min-h-screen">
        <div className="bg-slate-200 border-[1px] border-[#045281] m-2 py-6 rounded-lg bg-opacity-30">
          <div>
            <h1 className="text-center my-8 text-2xl md:text-5xl font-bold text-white uppercase">
              Update Assignment
            </h1>
          </div>
          <form
            onSubmit={handleUpdateAssignment}
            className="text-white font-semibold px-4 pb-16 md:px-16 md:grid grid-cols-4 gap-4"
          >
            <div className="w-full col-span-2">
              <label htmlFor="title">Assignment Title</label>
              <br />
              <input
                type="text"
                name="title"
                className="w-full py-1 text-[#045281] md:py-2 px-2 md:px-4  rounded-lg"
                placeholder="Assignment Tile"
                defaultValue={title}
                id=""
              />
            </div>
            <div className="w-full row-span-4 col-span-2">
              <label htmlFor="description">Assignment Description</label>
              <textarea
                name="description"
                className="w-full py-1 text-[#045281] md:py-2 px-2 md:px-4  rounded-lg"
                placeholder="Description"
                defaultValue={description}
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>

            <div className="w-full">
              <label htmlFor="title">Marks</label>
              <br />
              <input
                type="text"
                name="marks"
                className="w-full py-1 text-[#045281] md:py-2 px-2 md:px-4  rounded-lg"
                placeholder="Marks"
                defaultValue={marks}
                id=""
              />
            </div>

            <div className="w-full">
              <label htmlFor="difficulty">Difficulty</label>
              <br />
              <select
                name="difficulty"
                className=" py-1 w-full text-[#045281] md:py-2 px-2 md:px-4 rounded-lg font-bold"
                id=""
              >
                <option value={difficulty}>{difficulty}</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>

            <div className="w-full col-span-2">
              <label htmlFor="dueDate">Due Date</label>
              <br />
              <input
                type="date"
                name="dueDate"
                className="w-full py-1 text-[#045281] md:py-2 px-2 md:px-4  rounded-lg"
                defaultValue={dueDate}
                id=""
              />
            </div>
            <div className="w-full col-span-2">
              <label htmlFor="thumbnail">Thumbnail Image</label>
              <br />
              <input
                type="text"
                name="thumbnail"
                className="w-full py-1 text-[#045281] md:py-2 px-2 md:px-4  rounded-lg"
                placeholder="Thumbnail Image URL"
                defaultValue={thumbnail}
                id=""
              />
            </div>
            <div className="w-full flex justify-center col-span-4">
              <button className="bg-yellow-400 w-full mt-4 py-2 text-2xl rounded-lg font-bold text-[#0f80de]">
                Update Assignment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateAssignment;
