import javaScript from "./images/JavaScript-logo.png";
import tailwind from "./images/tailwindcss-mark.79614a5f61617ba49a0891494521226b.svg";



export default function Technologies() {
  return (
    <div className="flex items-center flex-col">
      <div className="flex text-2xl">
        <h1>Technologies</h1>
      </div>
    <div className="flex flex-wrap justify-center bg-blue-200 shadow-lg shadow-blue-300 rounded-lg p-5 w-[80%]">
    <img
    className="object-scale-down w-48 p-5"
    src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
    />
    <img
    className="object-scale-down w-48 p-5"
    src="https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png"
    />
    <img
    src={tailwind}
    className="object-scale-down w-48 p-5"
    />
    <img
    src="https://upload.wikimedia.org/wikipedia/commons/f/fd/JQuery-Logo.svg"
    className="object-scale-down w-48 p-5"
    />
    <img
    src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
    className="object-scale-down w-48 p-5"
    />
    <img
    src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
    className="object-scale-down w-48 p-5"
    />
    <img
    src="https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg"
    className="object-scale-down w-48 p-5"
    />
    <img
    src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
    className="object-scale-down w-48 p-5"
    />
    <img
    src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
    className="object-scale-down w-48 p-5"
    />
  </div>
  </div>
  );
}

