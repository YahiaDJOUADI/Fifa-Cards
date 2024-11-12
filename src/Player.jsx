export default (props) => {
    return (
      <div
        className={`group relative w-full h-80 bg-gradient-to-t from-[#101820] to-[#4c1d95] rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 ${
          props.name === "Cristiano Ronaldo" ? "border-4 border-[#f5a623] shadow-xl" : ""
        }`}
      >
        {/* Player Image */}
        <img
          src={props.imageUrl}
          alt={props.name}
          className={`w-full h-48 object-cover rounded-t-lg group-hover:opacity-80 ${
            props.name === "Cristiano Ronaldo" ? "transform scale-105" : ""
          }`}
        />
        
        {/* Player Info (positioned below the image) */}
        <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-60 p-4 text-white">
          <div className="text-center">
            <h2
              className={`text-2xl font-extrabold ${
                props.name === "Cristiano Ronaldo" ? "text-[#f5a623]" : "text-white"
              }`}
            >
              {props.name}
            </h2>
            
            {/* Club Name Section with Enhanced Readability */}
            <p
              className={`text-lg font-bold ${
                props.name === "Cristiano Ronaldo" ? "text-[#f5a623]" : "text-white"
              } bg-black bg-opacity-50 rounded-full px-2 py-1 my-2`}
            >
              {props.team}
            </p>
            
            <div className="mt-2 flex justify-center space-x-4">
              <div
                className={`text-sm ${
                  props.name === "Cristiano Ronaldo" ? "text-[#f5a623]" : "text-[#f5a623]"
                }`}
              >
                <span className="font-semibold"># {props.jerseyNumber}</span>
              </div>
              <div
                className={`text-sm ${
                  props.name === "Cristiano Ronaldo" ? "text-[#f5a623]" : "text-purple-700"
                }`}
              >
                <span className="font-semibold">{props.nationality}</span>
              </div>
            </div>
          </div>
  
          {/* Stats Section */}
          <div className="mt-6 text-white text-sm flex justify-between">
            <div>
              <p>Age: {props.age}</p>
              <p>Goals: {props.goals}</p>
              <p>Assists: {props.assists}</p>
            </div>
            <div className="text-center">
              <p className="font-semibold text-xl text-[#f5a623]">Rating</p>
              <p className="font-bold text-xl">{props.rating}</p>
            </div>
          </div>
        </div>
  
        {/* Display GOAT Badge in the Top-Left */}
        {props.name === "Cristiano Ronaldo" && (
          <div className="absolute top-2 left-2 bg-[#f5a623] text-black text-sm font-bold px-4 py-2 rounded-full shadow-lg">
            GOAT
          </div>
        )}
      </div>
    );
  };
  