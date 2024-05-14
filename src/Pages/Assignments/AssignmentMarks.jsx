import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";



const AssignmentMarks = () => {

  const data = useLoaderData()
  // console.log(data)
  const navigate = useNavigate()

  const {_id, title, writer, marks, link} = data;

  const handleGiveMark = (e) =>{
    e.preventDefault()
    const form = e.target;
    const marks = form.marks.value;
    const feedback = form.feedback.value;
    const marksInfo = {
      marks,
      feedback
    }
    console.log(marksInfo)
    console.log(_id)

    axios.put(`https://study-buddy-hub-server-one.vercel.app/assignment-marks/${_id}`, marksInfo)
    .then(res => {
      if(res.data.modifiedCount >0){
        Swal.fire({
          icon: 'success',
          text: 'Marks Given Successfully'
        })
        navigate('/pending-assignments')
      }
    })
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="text-center">
        <div>
          <h1>Assignment Title: <span className="md:text-2xl font-semibold">{title}</span></h1>
          <h2>Examinee: {writer.name}</h2>
          <h3>Total Marks: {marks}</h3>
        </div>
        <div>
          <h1>Assignment Link: {link}</h1>
        </div>

        <form onSubmit={handleGiveMark} className="bg-[#0f80de] p-4 md:p-16 rounded-lg">
         
          <input type="number" name="marks" id="" className="w-full p-2  text-[#045281]" placeholder="Give Marks" />
          <textarea name="feedback" id="" className="w-full mt-4 p-2 text-[#045281]" cols="50" rows="5" placeholder="Give a feedback"></textarea>
          <button className="bg-[#045281] px-4 py-2 text-white font-semibold rounded-sm">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AssignmentMarks;
