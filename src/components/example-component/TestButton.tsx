export type TestButtonProps = {
  backgroundColor?: string;
  label?: string;
};

const TestButton: React.FC<TestButtonProps> = ({ label = "Hello world" }) => {
  return (
    <button className="flex justify-start align-middle p-5 mw-20 mh-5 font-bold rounded-lg bg-cyan-300 hover:bg-cyan-500 ">
      {label}
    </button>
  );
};

export default TestButton;
