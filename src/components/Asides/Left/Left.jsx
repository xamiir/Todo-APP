import Categories from "./Categories/Categories";

const Left = (props) => {
  return (
    //   Left Side
    <aside
      id="left"
      className="w-20 lg:w-28 xl:w-80 flex-none shadow-lg shadow-gray-200 rounded-tr-lg bg-white font-nunito hidden sm:block max-h-screen overflow-y-auto"
    >
      <div
        id="logo"
        className="flex items-center justify-center shadow-md shadow-gray-100 "
      >
        <div className=" my-5 mx-3 flex justify-center items-center">
          <img
            src="/images/todo-logo.png"
            className="lg:w-14 lg:h-auto m-0 p-0 rounded-full shadow-gray-200 shadow-xl flex justify-center items-center"
            alt=""
          />
        </div>
        <div id="logo-text" className="hidden xl:block">
          <h1 className="text-2xl font-bold tracking-wider"> Todo App</h1>
          <p className="text-sm text-gray-500">
            Save Your Tasks  
          </p>
        </div>
      </div>

      <Categories data={props.data} />
    </aside>
  );
};

export default Left;
