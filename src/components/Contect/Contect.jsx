import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";

const Contect = () => {
  const ContextList = []; //only for ui




  return (
    <>
      <section className="SearchBox">
        <div className=" flex gap-1  mt-2 ">
          <div className="flex flex-grow  relative  ">
            <FiSearch
              className="absolute text-white top-2  left-2"
              size={"1.4rem"}
            />
            <input
              className="bg-transparent border flex-grow rounded-lg h-10 text-white pl-8 outline-none"
              type="text"
            />
          </div>
          <AiFillPlusCircle
            className="text-white cursor-pointer"
            size={"2.5rem"}
          />
        </div>
      </section>

      <section className="contectList">
        {ContextList.length <= 0 && (
          <div className="flex gap-2 justify-center items-center h-[70vh] text-white text-xl">
            <div>
              <img src="/HandsContact.png" alt="profileLogo" />
            </div>
            <div>No Contact Found...</div>
          </div>
        )}
      </section>
    </>
  );
};

export default Contect;
