import { useLoaderData, useParams } from "react-router-dom";

const AssignmentDetails = () => {
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

  return (
    <div className="min-h-screen flex flex-col justify-center">
      <div className="flex gap-8 pt-20">
        <div className="w-1/2">
          <img src={thumbnail} alt="" />
        </div>
        <div className="w-1/2 space-y-4">
          <h1 className="text-4xl font-semibold">{title}</h1>
          <p>
            <small>{description}</small>
          </p>
          <div className="flex justify-between items-center">
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
          <div className="flex justify-around">
            <button className="bg-[#045281] px-4 py-2 text-white font-semibold rounded-sm">Delete</button>
            <button className="bg-[#045281] px-4 py-2 text-white font-semibold rounded-sm">Update</button>
            <button className="bg-[#045281] px-4 py-2 text-white font-semibold rounded-sm">Take Assignment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentDetails;
