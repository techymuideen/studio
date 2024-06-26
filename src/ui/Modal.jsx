import ReactDOM from "react-dom";

const Modal = (props) => {
  const Backdrop = () => {
    return (
      <div
        className="fixed left-0 top-0 z-20 h-[100vh] w-[100%] bg-[#0008] backdrop-blur-sm"
        onClick={props.onClose}
      ></div>
    );
  };

  const ModalOverlay = () => {
    return (
      <div
        data-aos="zoom-in-down"
        data-aos-duration="200"
        className="modal-shadow fixed left-[8%] top-[10vh] z-30 w-[85%] rounded-2xl bg-[#fff] md:left-[27%] md:w-[45%] lg:left-[30%]  lg:w-[45%] dark:bg-black "
      >
        <div className={props.className}>{props.children}</div>
      </div>
    );
  };

  const portalElement = document.getElementById("overlays");

  return (
    <div>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay />, portalElement)}
    </div>
  );
};

export default Modal;
