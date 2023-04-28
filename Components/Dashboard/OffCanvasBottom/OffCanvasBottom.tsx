import { getGeneralData, setShow } from "@/Store/Slices/General";
import { useDispatch, useSelector } from "react-redux";

const OffCanvasBottom = () => {
  const { show } = useSelector(getGeneralData);
  const dispatch = useDispatch();

  return (
    <>
      <div
        className={`offcanvas offcanvas-bottom ${true ? "show" : ""}`}
        tabIndex={-1}
        id="offcanvasBottom"
        aria-labelledby="offcanvasBottomLabel"
        aria-modal="true"
        role="dialog"
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasBottomLabel" className="offcanvas-title">
            Offcanvas Bottom
          </h5>
          <button
            onClick={() => dispatch(setShow(false))}
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <p>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have scrambled parts of Cicero`s De Finibus Bonorum et
            Malorum for use in a type specimen book.
          </p>
          <button type="button" className="btn btn-primary me-2">
            Continue
          </button>
          <button
            onClick={() => dispatch(setShow(false))}
            type="button"
            className="btn btn-label-secondary"
            data-bs-dismiss="offcanvas"
          >
            Cancel
          </button>
        </div>
      </div>
      {true ? <div className={`offcanvas-backdrop fade ${true ? "show" : ""}`}></div> : ''}
    </>
  );
};

export default OffCanvasBottom;
