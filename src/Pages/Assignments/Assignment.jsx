import { Link } from "react-router-dom";

const Assignment = ({ assignment }) => {
  // console.table(assignment)

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
        <div>
          <Link to={`/assignment-details/${_id}`}>
            <button className="bg-[#045281] text-white px-4 py-2 rounded-lg font-semibold hover:scale-105 transition-transform">
              View Assignment
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Assignment;
