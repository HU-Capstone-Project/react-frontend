import React, { useState, useRef, useEffect } from "react";
import { LineChart } from "./LineChart";
import { DateTimeComponent } from "./DateTimeComponent";

// initialize to default values, currently - 30 minutes to -60 minutes
var t2 = "";
var t1 = "";

function getTargetNodeST(slug, nodes) {
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].slug == slug) return nodes[i].sample_rate;
  }
  return -1;
}

export const Plot = ({ match }) => {
  const [readings, setReadings] = useState({
    battery_level: [],
    temperature: [],
    flow_rate: [],
    flow_count: [],
    total_flow: [],
    time_sampled: [],
    time_received: [],
    signal_strength: [],
  });
  const [occurrences, setOccurences] = useState({
    time: [],
    count: [],
  });
  const [times, setTimes] = useState([t1, t2]);
  const mounted = useRef(true);
  const [sampleTime, setSampleTime] = useState(30);
  let node_loaded = false;

  const [node, setNode] = useState({});

  const [showOwner, setShowOwner] = useState(false);

  const showHomeOwnerView = () => {
    setShowOwner(!showOwner);
  };

  const fetchData = async () => {
    let data = await getReadingsFromTimes(
      match.params.slug,
      times[0],
      times[1]
    );
    let content = Array.from(data.data).reverse();
    let reading = {
      battery_level: [],
      temperature: [],
      flow_rate: [],
      flow_count: [],
      total_flow: [],
      time_sampled: [],
      time_received: [],
      signal_strength: [],
    };
    content.map((item) =>
      Object.keys(reading).map((key) => reading[key].push(item[key]))
    );

    setReadings(reading);
    const newTimeSampled = [];

    reading.time_received.forEach((time_sampled) => {
      newTimeSampled.push(time_sampled.slice(0, -11));
    });
    const occurrences = newTimeSampled.reduce(function (acc, curr) {
      return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
    }, {});
    // console.log(newTimeSampled);
    // console.log(occurrences);
    // setOccurences(occurrences);
    // setOccurences()

    let fixedTime = [];
    Object.keys(occurrences).forEach((time) => {
      let t = new Date(time);
      const date = ("0" + t.getDate()).slice(-2);
      const month = ("0" + (t.getMonth() + 1)).slice(-2);
      const year = t.getFullYear();
      let hours = ("0" + t.getHours()).slice(-2);
      let minutes = ("0" + t.getMinutes()).slice(-2);
      var ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12;
      const seconds = ("0" + t.getSeconds()).slice(-2);
      const fixedDate = `${month}/${date}/${year}, ${hours}:${minutes}:${seconds} ${ampm}`;
      fixedTime.push(fixedDate);
    });
    let occurrencesData = {
      count: Object.values(occurrences),
      time: fixedTime,
    };

    // console.log(occurrences);
    // console.log(new Date(1642449571 * 1000));
    setOccurences(occurrencesData);
  };

  // const fetchNodeDetails = () => {
  //   let data = getNodes();
  //   if (data) {
  //     let currentNode = data.filter((node) => node.slug === match.params.slug);
  //     console.log(currentNode);
  //     console.log(currentNode[0]);
  //     setNode(currentNode[0]);
  //     console.log(node);
  //   }
  // };

  useEffect(async () => {
    if (mounted.current) {
      if (!node_loaded) {
        let st = await getNodes();

        setSampleTime(getTargetNodeST(match.params.slug, st));
        node_loaded = true;
        let currentNode = st.filter((node) => node.slug === match.params.slug);
        console.log(currentNode[0]);
        setNode(currentNode[0]);
        console.log(node);
        console.log(times);
      }

      fetchData();
      // fetchNodeDetails();
      // console.log(reading.time_sampled.length);
    }
    return () => (mounted.current = false);
  }, times);

  const updateData = async () => {
    console.log([
      new Date(document.getElementById("time1").value).valueOf() / 1000,
      new Date(document.getElementById("time2").value).valueOf() / 1000,
    ]);
    setTimes([
      new Date(document.getElementById("time1").value).valueOf() / 1000,
      new Date(document.getElementById("time2").value).valueOf() / 1000,
    ]);
  };

  const today = new Date();
  const date = ("0" + today.getDate()).slice(-2);
  const month = ("0" + (today.getMonth() + 1)).slice(-2);
  const year = today.getFullYear();
  let hours = ("0" + today.getHours()).slice(-2);
  let minutes = ("0" + today.getMinutes()).slice(-2);
  var ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  const seconds = ("0" + today.getSeconds()).slice(-2);
  const fixedDate = `${month}/${date}/${year}, ${hours}:${minutes}:${seconds} ${ampm}`;
  const now = fixedDate;

  return (
    <div
      className="d-flex flex-column special"
      id="content-wrapper data-vis-wrapper"
    >
      <div className="row ml-3">
        <div className="col-7">
          <h3>Visualizing Data for {match.params.slug}</h3>
        </div>
        <div className="col-5">
          <button
            type="button"
            className="btn btn-primary ml-2 float-right"
            onClick={(e) => {
              window.location.href = "/data/node/";
            }}
          >
            Back to Nodes
          </button>
          <button
            type="button"
            className="btn btn-primary mr-2 float-right"
            onClick={() => showHomeOwnerView()}
          >
            {!showOwner ? "Home Owner View" : "Reasearcher View"}
          </button>
        </div>
      </div>

      {!showOwner ? (
        <>
          <div
            className="form-row mt-3"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <div className="col-4">
              <h4>From:</h4>
              <DateTimeComponent idt="time1" />
            </div>

            <div className="col-4">
              <h4>To:</h4>
              <DateTimeComponent idt="time2" value={now} />
            </div>

            <div className="col-2">
              <button
                type="submit"
                className="btn btn-primary mt-4.5"
                onClick={() => updateData()}
              >
                Load Data
              </button>
            </div>
          </div>
          <div
            className="mt-3"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <button className="btn w-25 btn-danger" onClick={() => fetchData()}>
              Latest
            </button>
            <button
              className="btn w-25 btn-danger ml-3"
              onClick={() => {
                const d = new Date();
                var startDate =
                  d.getMonth() + 1 + "/" + d.getDate() + "/" + d.getFullYear();
                var endDate =
                  d.getMonth() +
                  1 +
                  "/" +
                  (d.getDate() + 1) +
                  "/" +
                  d.getFullYear();
                const convertedStartDate = new Date(startDate).valueOf() / 1000;
                const convertedEndDate = new Date(endDate).valueOf() / 1000;
                setTimes([convertedStartDate, convertedEndDate]);
                fetchData();
              }}
            >
              Today's Record
            </button>
          </div>
          <div className="row ml-5 mt-5">
            Expected readings: {(times[1] - times[0]) / sampleTime}, Received
            readings: {readings.time_sampled.length}
          </div>

          {/*<MixedChart givenInit={times[0]} givenLast={times[1]} sampleTimes={readings.time_sampled.slice(1,)} sample_rate={sampleTime} y={getTimeDifference(readings.time_sampled)} heading={`T2 - T1`} />*/}
          <hr />
          <LineChart
            labels={readings.time_sampled}
            data={readings.flow_count}
            heading={`Flow Count`}
          />
          {/*<MixedChart givenInit={times[0]} givenLast={times[1]} sampleTimes={readings.time_sampled} sample_rate={sampleTime} y={readings.flow_count} heading={`Flow Count`} />*/}
          <hr />
          <LineChart
            labels={readings.time_sampled}
            data={readings.total_flow}
            heading={`Total Flow (L)`}
          />
          {/*<MixedChart givenInit={times[0]} givenLast={times[1]} sampleTimes={readings.time_sampled} sample_rate={sampleTime} y={readings.total_flow} heading={`Total Flow (L)`} />*/}
          <hr />
          <LineChart
            labels={readings.time_sampled}
            data={readings.flow_rate}
            ymin={0}
            ymax={60}
            heading={`Flow Rate (L/min)`}
            min={0}
            max={60}
          />
          {/*<MixedChart givenInit={times[0]} givenLast={times[1]} sampleTimes={readings.time_sampled} sample_rate={sampleTime} y={readings.flow_rate} heading={`Flow Rate (L/min)`} ymin={0} ymax={60} min={0} max={60} />*/}
          <hr />
          <LineChart
            labels={readings.time_sampled}
            data={readings.temperature}
            heading={`Temperature (C°)`}
          />

          <LineChart
            labels={readings.time_sampled}
            data={readings.battery_level}
            ymin={0}
            ymax={5}
            heading={`Battery Level (Volts)`}
            min={3.3}
            max={4.5}
          />
          <hr />
          <LineChart
            labels={readings.time_sampled.slice(1)}
            data={getTimeDifference(readings.time_sampled)}
            heading={`T2 - T1`}
          />
          <LineChart
            style={{ height: "390px", width: "100%" }}
            labels={occurrences.time}
            count={occurrences.count}
          />
          <LineChart
            style={{ height: "390px", width: "100%" }}
            labels={readings.time_sampled}
            count={readings.signal_strength}
          />
        </>
      ) : (
        <>
          <div className="m-5">
            <div
              className={`card shadow border-left-${
                node.status === "in-active" ? "warning" : "info"
              } py-2`}
            >
              <div className="card-body">
                <div className="row align-items-center no-gutters">
                  <div className="col mr-2">
                    <div
                      className={`text-${
                        node.status === "in-active" ? "warning" : "info"
                      } font-weight-bold text-sm mb-1`}
                    >
                      <span>{node.name}</span>
                    </div>
                    <div className="text-dark text-sm">
                      <span className="font-weight-bold">
                        {"Total Flow (L): "}
                      </span>
                      <span>{node.total_flow}</span>
                    </div>
                    <div className="text-dark text-sm">
                      <span className="font-weight-bold">
                        {"Data Points Collected: "}
                      </span>
                      <span>{node.count}</span>
                    </div>
                    <div className="text-dark text-sm">
                      <span className="font-weight-bold">{"Status: "}</span>
                      <span>{node.status}</span>
                    </div>
                  </div>
                  <div className="col-auto">
                    <i
                      className={`fas fa-${
                        node.status === "in-active" ? "tools" : "home"
                      } fa-lg text-gray-300`}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {/*<MixedChart givenInit={times[0]} givenLast={times[1]} sampleTimes={readings.time_sampled} sample_rate={sampleTime} y={readings.temperature} heading={`Temperature (C°)`} />*/}
      {/*<hr />
      <MixedChart givenInit={1} givenLast={110} sampleTimes={[10,20,30,40,80,90,100]} sample_rate={10} y={[4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3]}/>*/}
    </div>
  );
};
