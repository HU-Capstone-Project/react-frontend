import React, { useState, useRef, useEffect } from "react";
import { LineChart } from "./LineChart";
import { Link, useParams } from "react-router-dom";

export const Plot = () => {
  const { id } = useParams();
  const [readings, setReadings] = useState({});
  const [node, setNode] = useState({});
  const [loading, setLoading] = useState(true);
  const mounted = useRef(true);

  useEffect(() => {
    const fetchData = async () => {
      {
        const response = await fetch(
          "https://uatprpwuzi.execute-api.me-central-1.amazonaws.com/dev/profiles/"
        );
        const data = await response.json();
        setNode(data.filter((item) => item.key === id)[0]);
      }
      const response = await fetch(
        `https://uatprpwuzi.execute-api.me-central-1.amazonaws.com/dev/samples/${id}`
      );
      const data = await response.json();
      if (data.length) {
        let reading = [];
        Object.keys(data[0]).map((item) => (reading[item] = []));
        data.map((item) =>
          Object.keys(data[0]).map((key) => reading[key].push(item[key]))
        );
        setReadings(reading);
        console.log(reading);
      }
      setLoading(false);
    };
    if (mounted.current) {
      fetchData();
    }
    return () => {
      mounted.current = false;
    };
  }, [id]);

  return (
    <section style={{ padding: "3rem", marginTop: "5%" }}>
      <div
        className="d-flex flex-column special"
        id="content-wrapper data-vis-wrapper"
      >
        <div className="row ml-3" style={{ margin: "16px 0" }}>
          <div className="col-1">
            <Link style={{ float: "right" }} to="/dashboard">
              <button
                style={{ backgroundColor: "white", border: "0" }}
                className="MuiButtonBase-root MuiButton-root MuiButton-text"
                tabIndex="0"
                type="button"
              >
                <span>
                  <svg
                    width="32px"
                    height="36px"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ fill: "#061a40dd" }}
                  >
                    <defs></defs>

                    <g data-name="arrow left" id="arrow_left">
                      <path
                        className="cls-1"
                        d="M22,29.73a1,1,0,0,1-.71-.29L9.93,18.12a3,3,0,0,1,0-4.24L21.24,2.56A1,1,0,1,1,22.66,4L11.34,15.29a1,1,0,0,0,0,1.42L22.66,28a1,1,0,0,1,0,1.42A1,1,0,0,1,22,29.73Z"
                      />
                    </g>
                  </svg>
                </span>
              </button>
            </Link>
          </div>
          <div className="col-7">
            <h3 style={{color: "#061a40dd"}}>Back to Dashboard</h3>
          </div>
        </div>

        <hr />
        {!loading && node ? (
          <div className="row justify-content-center">
            <div className="col-md-10 col-xl-8 p-4">
              <div className="card shadow">
                <div className="card-header py-3">
                  <h3
                    className="m-0 font-weight-bold"
                    style={{ color: "#061a40dd" }}
                  >
                    Study Information
                  </h3>
                </div>
                <div className="card-body">
                  <div><strong>ID: </strong>{id}</div>
                  <div><strong>Collected by: </strong>{node.name}</div>
                  <div><strong>Collected on: </strong>{node.time_received}</div>
                  <div><strong>Start Position: </strong>{node.start_pos_lat}°, {node.start_pos_long}°</div>
                  <div><strong>End Position: </strong>{node.end_pos_lat}°, {node.end_pos_long}°</div>
                  <div><strong>IRI: </strong>{node.IRI}</div>
                  <div><strong>Number of Bumps: </strong>{node.bumps}</div>
                  <div><strong>Number of Potholes: </strong>{node.potholes}</div>
                  <div><strong>Data Points: </strong>{readings.timestamp ? readings.timestamp.length : 0}</div>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        <div className="d-sm-flex justify-content-between align-items-center mb-4 row p-5">
          <div className="col-md-12 col-xl-12 pl-5">
            <h2 style={{ color: "#061a40dd", fontWeight: "600" }}>
              Visualization of Raw Data Plotted Against Time:
            </h2>
          </div>
          {!loading && readings ? (
            Object.keys(readings).map((item) => {
              return !["timestamp", "id", "studyid"].includes(item) ? (
                <div className="col-md-12 col-xl-6 p-4" key={item}>
                  <div
                    className="card-body"
                    style={{
                      borderRadius: "10px",
                      boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <LineChart
                      labels={readings.timestamp}
                      data={readings[item]}
                      heading={item}
                      style={{ height: "390px", width: "100%" }}
                    />
                  </div>
                </div>
              ) : null;
            })
          ) : (
            <>Loading...</>
          )}
        </div>
      </div>
    </section>
  );
};
