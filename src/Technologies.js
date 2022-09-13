import tailwind from "./images/tailwindcss-mark.79614a5f61617ba49a0891494521226b.svg";

export default function Technologies() {
  return (
    <div id="technologies" className="flex items-center flex-col py-10">
      <div className="text-2xl p-5">
        <h1>Technologies</h1>
      </div>
      <div className="flex flex-wrap justify-center bg-blue-200 shadow-lg shadow-blue-300 rounded-lg p-10 w-[80%]">
        <div className="p-5">
          <img
            className="object-scale-down shadow-2xl shadow-blue-900 rounded-lg w-48 p-5"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            alt="react"
          />
        </div>
        <div className="p-5">
          <img
            className="object-scale-down shadow-2xl shadow-blue-900 rounded-lg w-48 p-5"
            src="https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png"
            alt="sql"
          />
        </div>
        <div className="p-5">
          <img
            src={tailwind}
            className="object-scale-down shadow-2xl shadow-blue-900 rounded-lg w-48 p-5"
            alt="tailwind"
          />
        </div>
        <div className="p-5">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fd/JQuery-Logo.svg"
            className="object-scale-down shadow-2xl shadow-blue-900 rounded-lg w-48 p-5"
            alt="jquery"
          />
        </div>
        <div className="p-5">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
            className="object-scale-down shadow-2xl shadow-blue-900 rounded-lg w-48 p-5"
            alt="css"
          />
        </div>
        <div className="p-5">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
            className="object-scale-down shadow-2xl shadow-blue-900 rounded-lg w-48 p-5"
            alt="node"
          />
        </div>
        <div className="p-5">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg"
            className="object-scale-down shadow-2xl shadow-blue-900 rounded-lg w-48 p-5"
            alt="ruby"
          />
        </div>
        <div className="p-5">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
            className="object-scale-down shadow-2xl shadow-blue-900 rounded-lg w-48 p-5"
            alt="bootstrap"
          />
        </div>
        <div className="p-5">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
            className="object-scale-down shadow-2xl shadow-blue-900 rounded-lg w-48 p-5"
            alt="html"
          />
        </div>
      </div>
    </div>
  );
}
