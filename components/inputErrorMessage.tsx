const InputErrorMessage = ({ message }: { message: string }) => {
  return <p className="text-red-500 font-light text-sm px-2 py-1">{message}</p>;
};
export default InputErrorMessage;
