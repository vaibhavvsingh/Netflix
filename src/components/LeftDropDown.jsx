function LeftDropDown({ dropdown }) {
  const arr = [
    "Account",
    "Help Centre",
    "Sign out of Netflix",
    "Home",
    "My List",
    "Thrillers",
    "Hindi Movies & TV",
    "Children & Family",
  ];
  return (
    <div
      className={
        "fixed flex flex-col gap-2 p-3 w-[200px] transition-all h-[100vh] bg-slate-950 font-semibold text-white z-40 " +
        (dropdown ? "left-[0px]" : "left-[-200px]")
      }
    >
      {arr.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
}

export default LeftDropDown;
