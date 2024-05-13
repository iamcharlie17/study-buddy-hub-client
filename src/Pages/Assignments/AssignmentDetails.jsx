import { useLoaderData, useNavigate } from "react-router-dom";
import { MdCancel } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import axios from "axios";

const AssignmentDetails = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const assignment = useLoaderData();
  const { title, description, marks, difficulty, thumbnail, dueDate, creator } =
    assignment;

  let obtainedMarks = -1;
  let feedback = "";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const link = form.link.value;
    const note = form.note.value;
    const submissionInfo = {
      title,
      description,
      marks,
      difficulty,
      dueDate,
      obtainedMarks,
      link,
      note,
      feedback,
      creator,
      writer: {
        name: user?.displayName,
        email: user?.email,
      },
    };

    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    if (!urlRegex.test(link)){
      Swal.fire({
        icon: 'error',
        text: "You can not submit an Invalid Link!!"
       })
       navigate('/assignments')
       return
    }
      

    if (user?.email === creator.email) {
      Swal.fire({
        icon: "error",
        text: "You can not submit your own assignment",
      });

      return navigate("/assignments");
    }

    axios
      .post("http://localhost:3200/assignment-submission", submissionInfo)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            icon: "success",
            text: "Assignment Submission Successfull",
          });
          navigate("/my-assignments");
        }
      });

    form.reset();
    console.log(submissionInfo);
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
          <div>
            {/* <button
              onClick={handleSubmit}
              className="bg-[#045281] px-4 py-2 text-white font-semibold rounded-sm"
            >
              Take Assignment
            </button> */}
            <button
              className="bg-[#045281] px-4 py-2 text-white font-semibold rounded-sm"
              onClick={() => {
                document.getElementById("my_modal_5").showModal();
              }}
            >
              Take Assignment
            </button>
            <dialog
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box bg-[#0f80de] text-white -z-10">
                <form onSubmit={handleSubmit}>
                  <label htmlFor="link">Assignment Link</label>
                  <br />
                  <input
                    type="text"
                    name="link"
                    id=""
                    className="w-full px-2 py-1 rounded-lg text-[#045281]"
                    placeholder="Your assignment link "
                  />
                  <textarea
                    name="note"
                    id=""
                    cols="30"
                    rows="10"
                    className="mt-4 rounded-lg w-full px-2 py-1 text-[#045281]"
                    placeholder="Quick Note"
                  ></textarea>
                  <div>
                    <button
                      method="dialog"
                      className="bg-[#045281] px-4 py-2 text-white mt-2 font-semibold rounded-sm"
                    >
                      Submit
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentDetails;
