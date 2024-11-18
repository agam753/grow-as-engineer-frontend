const JobSection = ({ title, value }: { title: string; value: string }) => {
  return (
    <div className="">
      <h2 className="text-xl font-semibold capitalize my-6 mb-2">{title}</h2>
      <p className="text-justify">
        {value} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
        alias nulla, ut quasi ea placeat quia quisquam vero culpa veritatis quod
        pariatur iusto ipsa possimus doloremque dolor, quibusdam cupiditate
        illo.
      </p>
    </div>
  );
};

export default JobSection;
