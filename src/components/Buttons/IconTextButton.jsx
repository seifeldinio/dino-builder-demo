const IconTextButton = (props) => {
  const { text } = props;
  const { icon } = props;
  const { iconSize } = props;
  const { mr } = props;
  const { onClick } = props;

  return (
    // <div className='flex h-[20px] w-[80px] bg-blue rounded-md items-center'>

    <button
      onClick={onClick}
      class=" text-blue hover:text-darkblue  rounded-md inline-flex items-center transition-color duration-200"
    >
      <img
        src={icon}
        className={`${mr} h-[${iconSize}] w-[${iconSize}]`}
        alt=""
      />

      <span className="text-[14px]">{text}</span>
    </button>

    // </div>
  );
};

export default IconTextButton;
