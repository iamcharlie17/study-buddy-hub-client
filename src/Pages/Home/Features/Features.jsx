const Features = () => {
  return (
    <div className="my-8 space-y-4">
      <div>
        <h1 className="text-center text-4xl font-semibold">
          Features of{" "}
          <span className="font-bold md:text-6xl">
            Study<span className="text-yellow-400">Buddy</span>Hub
          </span>
        </h1>
      </div>
      <div className="grid  md:grid-cols-3 lg:grid-cols-5 gap-4 mx-8">
        <div className="border-2 rounded-lg md:p-4 p-8 shadow-lg  hover:scale-105">
          <h1 className="text-2xl font-semibold">
            Create <br /> Assignments
          </h1>
          <p>
            <small>
              Easily create new assignments with title, description, marks, due
              date, and difficulty level selection.
            </small>
          </p>
        </div>
        <div className="border-2 rounded-lg md:p-4 p-8 shadow-lg  hover:scale-105">
          <h1 className="text-2xl font-semibold">
            View <br /> Assignments
          </h1>
          <p>
            <small>
              Browse through a list of available assignments, showcasing
              essential details like title, marks, and difficulty level.
            </small>
          </p>
        </div>
        <div className="border-2 rounded-lg md:p-4 p-8 shadow-lg  hover:scale-105">
          <h1 className="text-2xl font-semibold">
            Update <br /> Assignments
          </h1>
          <p>
            <small>
              Modify existing assignments effortlessly, with pre-filled fields
              for quick edits.
            </small>
          </p>
        </div>
        <div className="border-2 rounded-lg md:p-4 p-8 shadow-lg  hover:scale-105">
          <h1 className="text-2xl font-semibold">
            Delete <br /> Assignments
          </h1>
          <p>
            <small>
              Remove assignments securely, with a confirmation modal to prevent
              accidental deletion.
            </small>
          </p>
        </div>
        <div className="border-2 rounded-lg md:p-4 p-8 shadow-lg  hover:scale-105">
          <h1 className="text-2xl font-semibold">
            Assignment <br /> Details
          </h1>
          <p>
            <small>
              Access comprehensive information about each assignment, including
              description, due date, and any additional instructions.
            </small>
          </p>
        </div>
        <div className="border-2 rounded-lg md:p-4 p-8 shadow-lg  hover:scale-105">
          <h1 className="text-2xl font-semibold">
            Assignment <br /> Status
          </h1>
          <p>
            <small>
              Keep track of the status of assignments, distinguishing between
              pending and completed submissions.
            </small>
          </p>
        </div>
        <div className="border-2 rounded-lg md:p-4 p-8 shadow-lg  hover:scale-105">
          <h1 className="text-2xl font-semibold">
            Submit <br /> Assignments
          </h1>
          <p>
            <small>
              Submit assignments conveniently by providing necessary links and
              notes for review.
            </small>
          </p>
        </div>
        <div className="border-2 rounded-lg md:p-4 p-8 shadow-lg  hover:scale-105">
          <h1 className="text-2xl font-semibold">
            Assignment <br /> Marking
          </h1>
          <p>
            <small>
              Efficiently review and mark submitted assignments, providing
              feedback and marks as needed.
            </small>
          </p>
        </div>
        <div className="border-2 rounded-lg md:p-4 p-8 shadow-lg  hover:scale-105">
          <h1 className="text-2xl font-semibold">
            My Submitted <br /> Assignments
          </h1>
          <p>
            <small>
              View personal submission history, including status, marks
              obtained, and any feedback received.
            </small>
          </p>
        </div>
        <div className="border-2 rounded-lg md:p-4 p-8 shadow-lg  hover:scale-105">
          <h1 className="text-2xl font-semibold">
            Pending <br /> Assignments
          </h1>
          <p>
            <small>
              Access a centralized list of pending assignments for review and
              grading, ensuring timely feedback to users.
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
