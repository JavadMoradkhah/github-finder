import SpinnerImg from './assets/spinner.gif';

function Spinner() {
  return (
    <div className="w-full mt-20">
      <img className="w-32 h-32 text-center mx-auto" src={SpinnerImg} alt="Loading..." />
    </div>
  );
}

export default Spinner;
