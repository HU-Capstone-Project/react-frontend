import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const Nodes = (props) => {
  const [nodes, setNodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const mounted = useRef(true);

  useEffect(() => {
    const fetchNodes = async () => {
      const response = await fetch(
        "https://uatprpwuzi.execute-api.me-central-1.amazonaws.com/dev/profiles/"
      );
      const data = await response.json();
      setNodes(data);
      setLoading(false);
    };

    if (mounted.current) fetchNodes();
    return () => {mounted.current = false};
  }, []);

  return (
    <div className="container-fluid p-5">
      <div className="d-sm-flex justify-content-between align-items-center mb-4">
        <h3 className="text-dark mb-0">Studies Performed</h3>
      </div>
      <div className="row" style={{ marginTop: 20 }}>
        {!loading && nodes ? (
          nodes.map(
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
                <div key={id} className="col-md-6 col-xl-3 mb-4">
                  <Link style={{ textDecoration: "none" }} to={`/${key}`}>
                    <div className={`card shadow border-left-info py-2`}>
                      <div className="card-body">
                        <div className="row align-items-center no-gutters">
                          <div className="col mr-2">
                            <div className={`text-info text-sm mb-1`}>
                              <span className={`font-weight-bold`}>
                                {"Surveyor: "}
                              </span>
                              <span>{name}</span>
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
                              <span>{`${end_pos_lat}°, ${end_pos_long}°`}</span>
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
    </div>
  );
};

export default Nodes;
