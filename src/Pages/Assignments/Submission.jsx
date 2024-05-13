import { useState } from "react";

const Submission = ({ submission }) => {

    const [isPending, setIsPending] = useState(true)

    if(submission.obtainedMarks >= 0){
        setIsPending(!isPending)
    }

  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div>
            <div className="font-bold">{submission.title}</div>
          </div>
        </div>
      </td>
      <td>
        {
            isPending? <h1 className="text-yellow-500">Pending</h1> : <h1 className="text-green-500">Completed</h1>
        }
      </td>
      <td>{submission.dueDate}</td>
      <th>
        <button className="btn btn-ghost btn-xs">{submission.marks}</button>
      </th>
      <td>
        {
            isPending ? <h1>Still Pending</h1> : submission.obtainedMarks
        }
      </td>
      <td>
        {submission.feedback}
      </td>
    </tr>
  );
};

export default Submission;
