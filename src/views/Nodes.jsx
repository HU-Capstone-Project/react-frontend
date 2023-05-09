import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";
import { MapContainer, TileLayer, Marker, Popup, SVGOverlay, Polyline  } from "react-leaflet";
import bg from "../../src/img/bg.png";
import data_bg from "../../src/img/data-graphics.png";

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const Nodes = (props) => {
  const [nodes, setNodes] = useState([]);
  const [currNodes, setCurrNodes] = useState([]);
  const [surveyors, setSurveyors] = useState([]);
  const [surveyor, setSurveyor] = useState("all");
  const [loading, setLoading] = useState(true);
  const mounted = useRef(true);

  const slideIn = useSpring({
    from: { opacity: 0, transform: "translate3d(0, -100%, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    delay: 1000,
  });

  useEffect(() => {
    const fetchData = async () => {
      {
        const response = await fetch(
          "https://uatprpwuzi.execute-api.me-central-1.amazonaws.com/dev/profiles/"
        );
        const data = await response.json();
        data.sort((a, b) => {
          return new Date(b.time_received) - new Date(a.time_received);
        });
        setNodes(data);
        setCurrNodes(data);
      }
      {
        const response = await fetch(
          "https://uatprpwuzi.execute-api.me-central-1.amazonaws.com/dev/surveyors/"
        );
        const data = await response.json();
        setSurveyors([{ id: -1, name: "all" }].concat(data));
      }
      setLoading(false);
    };

    if (mounted.current) fetchData();
    return () => {
      mounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (surveyor === "all") setCurrNodes(nodes);
    else setCurrNodes(nodes.filter((item) => item.name === surveyor));
  }, [surveyor]);

  return (
    <>
      <animated.div style={slideIn}>
        <img
          src={bg}
          style={{ width: "100%", position: "absolute", zIndex: "-1" }}
        />
        <div
          className="about"
          style={{ alignItems: "center", display: "flex" }}
        >
          <div
            className="desc"
            style={{
              color: "white",
              padding: "10rem 5rem",
              fontSize: "1.2rem",
            }}
          >
            <h3 style={{ fontWeight: "600" }}>Data Portal</h3>
            <p>
              Welcome to the Road Health Monitoring Dashboard, designed to help
              you monitor studies performed for road health monitoring. The
              purpose of this dashboard is to provide you with a comprehensive
              view of the studies and their associated data performed in this
              project, so that you can gain insights and make informed decisions
              in road assessments.
            </p>
            <ul>
              <li>
                Use the "Select Surveyor" dropdown to filter studies by the
                surveyor who performed them. If you want to see all studies,
                select "all".
              </li>
              <li>
                Start and End coordinates are provided to distinguish road
                segments along with the time the study was performed.
              </li>
              <li>
                The cards for the studies are sorted with the date this study
                was performed.
              </li>
              <li>Click on a study to view its details and associated data.</li>
            </ul>
          </div>
          <img src={data_bg} style={{ margin: "3rem", width: "15rem" }} />
        </div>
      </animated.div>
      <div className="container-fluid p-5">
        <div
          className="d-sm-flex justify-content-between align-items-center mb-4 row"
          style={{ marginTop: "5em" }}
        >
          <div className="col-md-8 col-xl-6 pl-5">
            <h2 style={{ color: "#061a40dd", fontWeight: "600" }}>
              Studies Performed:{" "}
            </h2>
          </div>
          <div className="col-md-4 col-xl-3">
            <h3 style={{ color: "#061a40dd", textAlign: "right" }}>
              Select Surveyor:
            </h3>
          </div>
          <div className="col-md-4 col-xl-3 pr-5">
            <select
              style={{ color: "#061a40dd" }}
              className="form-control form-control-sm custom-select custom-select-sm"
              onChange={(e) => setSurveyor(e.target.value)}
            >
              {surveyors.map((item) => (
                <option key={item.id} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="row" style={{ margin: "2em 6em" }}>
          {!loading && nodes ? (
            currNodes.map(
              ({
                name,
                time_received,
                start_pos_lat,
                start_pos_long,
                end_pos_lat,
                end_pos_long,
                id,
                key,
              }) => {
                return (
                  <div
                    key={id}
                    className="col-md-6 col-xl-4"
                    style={{ margin: "1.25em 0" }}
                  >
                    <Link style={{ textDecoration: "none" }} to={`/${key}`}>
                      <div
                        className={`card shadow py-2`}
                        style={{
                          borderLeftColor: "#D81159",
                          borderLeftWidth: "0.35rem",
                          borderLeftStyle: "solid",
                          fontSize: "1.2rem",
                        }}
                      >
                        <div className="card-body">
                          <div className="row align-items-center no-gutters">
                            <div className="col mr-2">
                              <div className={`text-info text-sm mb-1`}>
                                <span
                                  className={`font-weight-bold text-dark text-sm`}
                                >
                                  {"Surveyor: "}
                                </span>
                                <span
                                  style={{ color: "#D81159dd" }}
                                  className="font-weight-bold"
                                >
                                  {name}
                                </span>
                              </div>
                              <div className="text-dark text-sm">
                                <span className="font-weight-bold">
                                  {"Received: "}
                                </span>
                                <span>
                                  {new Date(time_received).toLocaleString(
                                    "en-PK"
                                  )}
                                </span>
                              </div>
                              <div className="text-dark text-sm">
                                <span className="font-weight-bold">
                                  {"Start: "}
                                </span>
                                <span>{`${start_pos_lat}°, ${start_pos_long}°`}</span>
                              </div>
                              <div className="text-dark text-sm">
                                <span className="font-weight-bold">
                                  {"End: "}
                                </span>
                                {end_pos_lat ? (
                                  <span>{`${end_pos_lat}°, ${end_pos_long}°`}</span>
                                ) : (
                                  <span>Not Ended Yet</span>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              }
            )
          ) : (
            <>Loading...</>
          )}
        </div>
        <div
          className="d-sm-flex justify-content-between align-items-center mb-4 row"
          style={{ marginTop: "5em" }}
        >
          <div className="col-md-8 col-xl-6 pl-5">
            <h2 style={{ color: "#061a40dd", fontWeight: "600" }}>
              Map View: 
            </h2>
          </div>
        </div>
        <div className="row justify-content-center" style={{ margin: "2em 7em" }}>
          <div className="col-md-9" style={{height: "600px", padding: 0}}>
            {!loading && nodes ? (
              <MapContainer
                center={[24.89, 67.02]}
                zoom={12}
                scrollWheelZoom={true}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png" />

                {currNodes
                  .filter((node) => node.end_pos_lat && node.end_pos_long)
                  .map(({ name,
                    time_received,
                    start_pos_lat,
                    start_pos_long,
                    end_pos_lat,
                    end_pos_long,
                    key, }) => (
                    <>
                    <Polyline positions={[
                                      [start_pos_lat, start_pos_long],
                                      [end_pos_lat, end_pos_long],
                                    ]} color="#D81159" />
                    <Marker position={[start_pos_lat, start_pos_long]}>
                      <Popup>
                      <Link style={{ textDecoration: "none" }} to={`/${key}`}>
                      <div
                        className={`card shadow py-2`}
                        style={{
                          borderLeftColor: "#D81159",
                          borderLeftWidth: "0.35rem",
                          borderLeftStyle: "solid",
                        }}
                      >
                        <div className="card-body">
                          <div className="row align-items-center no-gutters">
                            <div className="col mr-2">
                              <div className={`text-info text-sm mb-1`}>
                                <span
                                  className={`font-weight-bold text-dark text-sm`}
                                >
                                  {"Surveyor: "}
                                </span>
                                <span
                                  style={{ color: "#D81159dd" }}
                                  className="font-weight-bold"
                                >
                                  {name}
                                </span>
                              </div>
                              <div className="text-dark text-sm">
                                <span className="font-weight-bold">
                                  {"Received: "}
                                </span>
                                <span>
                                  {new Date(time_received).toLocaleString(
                                    "en-PK"
                                  )}
                                </span>
                              </div>
                              <div className="text-dark text-sm">
                                <span className="font-weight-bold">
                                  {"Start Coordinates: "}
                                </span>
                                <span>{`${start_pos_lat}°, ${start_pos_long}°`}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                      </Popup>
                    </Marker>
                    <Marker position={[end_pos_lat, end_pos_long]}>
                    <Popup>
                    <Link style={{ textDecoration: "none" }} to={`/${key}`}>
                      <div
                        className={`card shadow py-2`}
                        style={{
                          borderLeftColor: "#D81159",
                          borderLeftWidth: "0.35rem",
                          borderLeftStyle: "solid",
                        }}
                      >
                        <div className="card-body">
                          <div className="row align-items-center no-gutters">
                            <div className="col mr-2">
                              <div className={`text-info text-sm mb-1`}>
                                <span
                                  className={`font-weight-bold text-dark text-sm`}
                                >
                                  {"Surveyor: "}
                                </span>
                                <span
                                  style={{ color: "#D81159dd" }}
                                  className="font-weight-bold"
                                >
                                  {name}
                                </span>
                              </div>
                              <div className="text-dark text-sm">
                                <span className="font-weight-bold">
                                  {"Received: "}
                                </span>
                                <span>
                                  {new Date(time_received).toLocaleString(
                                    "en-PK"
                                  )}
                                </span>
                              </div>
                              <div className="text-dark text-sm">
                                <span className="font-weight-bold">
                                  {"End Coordinates: "}
                                </span>
                                <span>{`${end_pos_lat}°, ${end_pos_long}°`}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                    </Popup>
                  </Marker>
                    </>
                  ))}
              </MapContainer>
            ) : (
              <>Loading...</>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Nodes;
