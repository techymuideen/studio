import ClickerB from "../../ui/ClickerB";
import Modal from "../../ui/Modal";
import Rainbow from "../../ui/Rainbow";
import Svg from "../../ui/Svg";
import { Link } from "react-router-dom";



const ModalB = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div className="pb-4">
        <div className="flex items-center gap-4 p-5 text-2xl font-medium text-[#000] dark:text-[#fff]">
          <Svg name="help" color="#E91E63" />
          <p>What I'm up to lately</p>
          <div
            onClick={props.onClose}
            className="ml-auto flex cursor-pointer items-center rounded-full bg-ash p-[12px] shadow-neum hover:shadow-deneum dark:bg-black dark:shadow-rounded-neum-dark dark:hover:bg-neum-bg-dark dark:hover:shadow-round-deneum-dark"
          >
            <Svg size="15" name="tools" color="currentcolor" />
          </div>
        </div>
        <div className="h-[3px]">
          <Rainbow />
        </div>
        <div className="h-[60vh] overflow-auto border-b  dark:border-[#fff2]">
          <div className="mx-4  ">
            {props.Clicks.map((click, index) => {
              return (
                <ClickerB
                  key={index}
                  icon={click.icon}
                  text={click.text}
                  content={click.content}
                  link={click.link}
                />
              );
            })}
          </div>
        </div>
        <div className="flex px-4">
          <Link
            onClick={props.onClose}
            to=""
            className="hover:bg-currentcolor ml-auto mt-2 flex items-center justify-center gap-2 rounded-lg  bg-ash px-4   py-2 text-base font-medium  uppercase text-[#4CAF50] shadow-neum transition-all duration-150 hover:bg-darkash  hover:shadow-deneum dark:bg-black  dark:shadow-neum-dark-2 dark:hover:bg-neum-bg-dark  dark:hover:shadow-neum-dark-3"
          >
            agree
          </Link>
        </div>
      </div>
    </Modal>
  );
};

export default ModalB;
