const JobSection = ({ title, value }: { title: string; value: string }) => {
  return (
    <div className="">
      <h2 className="text-lg md:text-xl font-semibold capitalize mt-6 mb-2">
        {title}
      </h2>
      <p className="text-justify">{value}</p>
    </div>
  );
};

export default JobSection;
