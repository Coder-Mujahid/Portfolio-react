
const CopyrightText = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center text-gray-500 text-sm py-4">
      <p className=" capitalize font-normal text-base">&copy; {currentYear} coder- mujahid. All Rights Reserved.</p>
    </footer>
  );
};

export default CopyrightText;
