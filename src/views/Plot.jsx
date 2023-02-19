import React, { useState, useRef, useEffect } from "react";
import { LineChart } from "./LineChart";
import { Link, useParams } from "react-router-dom";

export const Plot = () => {
  const { id } = useParams();
  const [readings, setReadings] = useState({});
  const [loading, setLoading] = useState(true);
  const mounted = useRef(true);

  const getTimeDifference = (timesArray) => {
    // assuming array is latest to oldest
    var collect = [];
    for (var i = 1; i < timesArray.length; i++) {
      collect.push(timesArray[i] - timesArray[i - 1]);
    }
    return collect;
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://uatprpwuzi.execute-api.me-central-1.amazonaws.com/dev/samples/${id}`
      );
      const data = await response.json();
      if (data.length) {
        // let content = Array.from(data).reverse();
        let reading = [];
        Object.keys(data[0]).map((item) => (reading[item] = []));
        data.map((item) =>
          Object.keys(data[0]).map((key) => reading[key].push(item[key]))
        );
        setReadings(reading);
      }
      setLoading(false);
    };
    if (mounted.current) {
      fetchData();
    }
    return () => {
      mounted.current = false;
    };
  }, []);

  return (
    <section style={{ padding: "3rem" }}>
      <div
        className="d-flex flex-column special"
        id="content-wrapper data-vis-wrapper"
      >
        <div className="row ml-3" style={{ margin: "16px 0" }}>
          <div className="col-1">
            <Link style={{ float: "right" }} to="/">
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
                    style={{ fill: "#858796" }}
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
            <h3>Visualizing Data for {id}</h3>
          </div>
        </div>

        <hr />
        {!loading && readings ? (
          Object.keys(readings).map((item) => {
            return !["timestamp", "id", "studyid"].includes(item) ? (
              <LineChart
                labels={readings.timestamp}
                data={readings[item]}
                heading={item}
                style={{ height: "390px", width: "100%" }}
              />
            ) : null;
          })
        ) : (
          <>Loading...</>
        )}
      </div>
    </section>
  );
};
