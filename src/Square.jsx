export default function Square({ id, value, handleClick }) {
  return (
    <button
      className="w-20 h-20 border-black border-solid border-2 flex justify-center items-center text-black text-2xl sm:text-5xl sm:w-24 sm:h-24"
      onClick={() => handleClick(id)}
    >
      {value}
    </button>
  );
}
