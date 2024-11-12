
import PlayerList from "./PlayerList";
import './index.css'; // Assuming Tailwind CSS is properly configured

const App = () => {
  return (
    <div className="bg-[#101820] text-white p-6">
      <h1 className="text-4xl font-extrabold text-center text-[#f5a623] mb-8">
        Real Madrid Players
      </h1>
      <PlayerList />
    </div>
  );
};

export default App;
