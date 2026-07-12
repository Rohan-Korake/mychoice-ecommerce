const UtilityButton = ({ icon: Icon, width = "", onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`flex h-10 ${width} items-center justify-center rounded-xl border border-slate-300 transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-900`}
      >
        <Icon size={18} />
      </button>
    </>
  );
};

export default UtilityButton;
