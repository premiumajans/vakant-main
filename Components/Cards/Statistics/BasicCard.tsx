interface Props {
  title: string;
  value: string;
  progress: number;
  notification: string;
  badge: string;
  icon: string;
}

const BasicCard = ({
  badge,
  icon,
  notification,
  progress,
  title,
  value,
}: Props) => {
  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <div className="card-info">
                <p className="card-text">{title}</p>
                <div className="d-flex align-items-end mb-2">
                  <h4 className="card-title mb-0 me-2">{value}</h4>
                  {progress > 0 ?   <small className="text-success">(+{progress}%)</small> : <small className="text-danger">({progress}%)</small> }
                
                </div>
                <small>{notification}</small>
              </div>
              <div className="card-icon">
                <span className={"badge " + badge}>
                  <i className={"bx " + icon}></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasicCard;
