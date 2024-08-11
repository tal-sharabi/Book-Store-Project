import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const BackButton = ({ destination = '/' }) => {
  return (
    <div className="flex"> {/* Corrected the className */}
      <Link
        to={destination}
        className='bg-sky-800 text-white px-4 py-1 rounded-lg w-fit flex items-center'
      >
        <BsArrowLeft className="text-2xl" />
      </Link>
    </div>
  );
}

export default BackButton;
