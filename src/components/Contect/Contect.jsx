import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { PiUserCircleThin } from "react-icons/pi";
import { TbEditCircle } from "react-icons/tb";
import { MdDeleteForever } from "react-icons/md";

const Contect = () => {
  const ContextList = [
    {
      name: "John Doe",
      email: "johndoe@example.com",
      age: 30,
    },
  ];

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

      <section className="contactList">
        {ContextList.length > 0 && (
          <div className="contextLists mt-5">
            <div className="bg-[#FFEAAE] h-[64px] flex justify-between w-[360px] rounded-lg items-center">
              <div className="flex gap-2">
                <PiUserCircleThin
                  color={"F6820C"}
                  size={"48px"}
                  className="ml-1"
                />
                <div className="">
                  <h2 className="font-medium">Lucky Hudda</h2>
                  <div>sdfsdsgs@gmaiil.com</div>
                </div>
              </div>
              <div className="flex justify-between items-center gap-1 mr-1">
                <div>
                  <TbEditCircle size={"32px"} />
                </div>
                <div>
                  <MdDeleteForever size={"32px"} color="red" />
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Contect;
