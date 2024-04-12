import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import Moment from "react-moment";

const LaunchItem = ({
  launch: { flight_number, mission_name, launch_date_local, launch_success },
}) => {
  //   console.log("props:", flight_number);
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <h4>
            Mission:{" "}
            <span
              className={classNames({
                "text-success": launch_success,
                "text-danger": !launch_success,
              })}
            >
              {mission_name}
            </span>
          </h4>
          <p>
            Date: <Moment format="YYYY-MM-DD HH:mm">{launch_date_local}</Moment>
          </p>
        </div>
        <div className="col-md-3">
          <Link
            to={{
              pathname: `/launch/${flight_number}`,
              state: { flight_number },
            }}
            className="btn btn-secondary"
          >
            Launch Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LaunchItem;
