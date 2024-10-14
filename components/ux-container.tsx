const KnowLedgeContainer = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => {
  return (
    <div className=" rounded-lg shadow-md p-6 transition duration-300 ease-in-out hover:shadow-lg hover:transform hover:-translate-y-1">
      <img
        className="w-16 h-16 mb-4"
        alt={`${title} icon`}
        src={`/collaborate/${icon}.svg`}
      />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default KnowLedgeContainer;
