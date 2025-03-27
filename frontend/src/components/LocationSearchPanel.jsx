import { IoLocationSharp } from "react-icons/io5";

function locationSearchPanel({ setvehiclePanelOpen, setpanelOpen }) {
  const location = [
    "69-D, sudama nagar, indore, madhya pradesh",
    "80-b, sudama nagar, indore, madhya pradesh",
    "201, takli kalan, khandwa, madhya pradesh",
    "302, dongargoan, khandwa, madhya pradesh",
  ];
  return (
    <div className="flex flex-col gap-2">
      {location.map((loc, index) => {
        return (
          <div
            onClick={() => {
              setvehiclePanelOpen(true);
              setpanelOpen(false);
            }}
            key={index}
            className="flex items-center border-2 border-gray-200 bg-gray-100 rounded-xl px-2 py-4 justify-start gap-5"
          >
            <h2 className="bg-white p-3 text-lg rounded-full">
              <IoLocationSharp />
            </h2>
            <h4 className="text-sm font-semibold">{loc}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default locationSearchPanel;
