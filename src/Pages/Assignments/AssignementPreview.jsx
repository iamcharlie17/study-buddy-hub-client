import { useLoaderData } from "react-router-dom";

const AssignementPreview = () => {
  const data = useLoaderData();
  console.log(data.link);

 

  return (
    <div className="min-h-screen">
      <div className="pt-24">
        <iframe
          src={data.link}
          width="100%"
          height="500px"
          title="PDF Preview"
        ></iframe>
      </div>
    </div>
  );
};

export default AssignementPreview;
