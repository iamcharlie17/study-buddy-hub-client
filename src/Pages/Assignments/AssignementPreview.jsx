import { useLoaderData } from "react-router-dom";

const AssignementPreview = () => {
  const data = useLoaderData();
  console.log(data.link);

  const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
  if (!urlRegex.test(data.link))
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="pt-24 text-4xl text-red-500 font-bold">Invalid Link</h1>
      </div>
    );

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
