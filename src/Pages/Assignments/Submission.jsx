import { Link } from "react-router-dom";

const Submission = ({ submission }) => {
  // console.log(submission.link);

  return (
    <tr>
      <td>
        <Link to={`/assignment-preview/${submission._id}`}>
          <button>Preview</button>
        </Link>
      </td>
      <td>
        <div className="flex items-center gap-3">
          <div>
            <div className="font-bold">{submission.title}</div>
          </div>
        </div>
      </td>
      {submission.obtainedMarks >= 0 ? (
        <td className="text-green-500">Conpleted</td>
      ) : (
        <td className="text-yellow-500">Pending</td>
      )}
      <td>{submission.dueDate}</td>
      <th>
        <button className="btn btn-ghost btn-xs">{submission.marks}</button>
      </th>
      {submission.obtainedMarks >= 0 ? (
        <td>{submission.obtainedMarks}</td>
      ) : (
        <td className="text-red-500">Still Pending</td>
      )}
      <td>{submission.feedback}</td>
    </tr>
  );
};

export default Submission;
