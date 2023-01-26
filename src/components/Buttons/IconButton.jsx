const IconButton = (props) => {
  const { icon } = props;
  // const { iconSize } = props;
  // const { ml } = props;
  const { onClick } = props;

  return (
    // <div className='flex h-[20px] w-[80px] bg-blue rounded-md items-center'>

    <button
      onClick={onClick}
      class="bg-blue hover:bg-darkblue text-white  py-2 px-2 rounded-md inline-flex items-center transition-color duration-200"
    >
      {icon}
      {/* <img
        src={icon}
        className={`${ml} h-[${iconSize}] w-[${iconSize}]`}
        alt=""
      /> */}
    </button>

    // </div>
  );
};

export default IconButton;
