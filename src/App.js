import "./App.css";

function App() {
  return (
       <div className="h-screen bg-white dark:bg-black flex items-center justify-center">
      <div className="shadow-xl flex flex-col space-y-6 items-center justify-center p-16 dark:bg-gray-900">
        <span className="dark:text-white text-black font-bold text-xl">
          Let's build dark mode with react.
        </span>
        <button
          type="button"
          className="p-4 rounded bg-black dark:bg-white text-white dark:text-black font-semibold"
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
}

export default App;
