import { useEffect, useState } from "react";
import reportAPI from "../../api/report";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Panel } from "primereact/panel";

const Summary = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [cardData, setCardData] = useState({});

  const [startdate, setStartDate] = useState("");
  const [enddate, setEndDate] = useState("");
  const [filter, setFilter] = useState(false);

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleFilterClick = async () => {
    const payloadObj = { from_date: null, end_date: null };
    if (startdate) payloadObj.from_date = new Date(startdate).toISOString();
    if (enddate) payloadObj.end_date = new Date(enddate).toISOString();
    try {
      console.log(payloadObj)
      // const response = await reportAPI.getFilteredSummary(payloadObj);
      // setData(response.data.data);
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await reportAPI.getSummary();
        setCardData(response.data);
        setData(response.data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <div className="col bg-white" style={{ marginTop: "100px" }}>
      <div id="mapview">
        <div id="clickbutton" title="Mark Point" className="btn btn-md btn-primary" style={{ display: "none" }} role="button">
          Click here to Start Editing
        </div>
        {/* <button id="download-csv-btn">Download CSV</button> */}
        {/* <div>Date: <span id="date" />{" "}</div> */}
        <div className="card">
          <div style={{ backgroundColor: "#094E7F", padding: "10px", color: "white" }}>
            <div id="report-heading-main" className="d-flex p-4">
              <div className="flex-grow-1 title fw-bold text-center">
                <h2 id="report-heading-text">State Summary Report</h2>
              </div>
              <div className="d-flex position-relative gap-2">
                <Button label="Download Html" className="btn btn-light" outlined id="download-report" />
                <Button label=" Download Pdf" className="btn btn-light" outlined id="download-pdf-report" />
              </div>
            </div>
          </div>
          <div id="report-heading">
            <div className="col ">
              <Panel className="border-0">
                <div id="main-report-date-filter" className="date-filter d-flex justify-content-center align-items-center gap-2 mb-4">
                  <div>
                    <label htmlFor="">Start Date</label>
                    <input type="date" value={startdate} onChange={handleStartDateChange} />
                  </div>
                  <div>
                    <label htmlFor="">End Date</label>
                    <input type="date" value={enddate} onChange={handleEndDateChange} />
                  </div>
                  <div>
                    <Button className="rounded" onClick={handleFilterClick}>
                      Filter
                    </Button>
                  </div>
                </div>
                <div className="row cards d-flex justify-content-center gap-2 mx-auto">
                  <div className="col carddata" style={{ backgroundColor: "rgb(3, 228, 116)" }}>
                    <div className="d-flex">
                      <div className="col float-start">Verified</div>
                      <div className="col float-end verified" style={{ display: "contents" }}>
                        {cardData?.verifiedYesCount}
                      </div>
                    </div>
                  </div>
                  <div className="col carddata" style={{ backgroundColor: "rgb(251, 242, 119)" }}>
                    <div className="d-flex">
                      <div className="col float-start">Not Verified</div>
                      <div className="col float-end not-verified" style={{ display: "contents" }}>
                        {cardData?.verifiedNoCount}
                      </div>
                    </div>
                  </div>
                  <div className="col carddata" style={{ backgroundColor: "rgb(119, 233, 251)" }}>
                    <div className="d-flex">
                      <div className="col float-start">Demolished</div>
                      <div className="col float-end demolished" style={{ display: "contents" }}>
                        {cardData?.demolishedCount}
                      </div>
                    </div>
                  </div>
                  <div className="col carddata" style={{ backgroundColor: "rgb(181, 119, 251)" }}>
                    <div className="d-flex">
                      <div className="col float-start">Total Count</div>
                      <div className="col float-end total-count" style={{ display: "contents" }}>
                        {cardData?.totallocations}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="add_roles">
                  <br />
                  <div className="col">
                    <h6 className="text-center" style={{ fontSize: 20 }}>
                      All District Report
                    </h6>
                  </div>
                  <br />

                  <DataTable value={data} loading={loading} columnResizeMode="expand" resizableColumns showGridlines tableStyle={{ minWidth: "50rem" }}>
                    <Column field="index" header="S.NO" body={(rowData, props) => <span>{props.rowIndex + 1}</span>}></Column>
                    <Column field="distrct_name" header="District Name"></Column>
                    <Column field="UnVerified" header="Not Verified"></Column>
                    <Column field="Verified" header="Verified(Change)"></Column>
                    <Column field="Demolished" header="Demolished"></Column>
                    <Column field="total" header="Total"></Column>
                  </DataTable>

                  <div className="report d-none">
                    <button type="button" id="ReportDistrictWise" className="button  btn-sm">
                      Report District Wise
                    </button>
                    <button type="button" id="ReportTehsilWise" className="button  btn-sm">
                      Report Tehsil Wise
                    </button>
                    <button type="button" id="ReportVillageWise" className="button  btn-sm">
                      Report Village Wise
                    </button>
                    <button type="button" id="ReportControlledAreaWise" className="button  btn-sm">
                      Report Controlled Area Wise
                    </button>
                  </div>
                </div>
              </Panel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

//  used earlier
const reportFilter = () => {
  return (
    <div className="CA_select report-section" id="CA_select">
      <div>
        <div className="close-model-btn">
          <i style={{ fontSize: 32 }} className="fa">
            
          </i>
        </div>
        <div>
          <div className="CA_sel">
            <div className="col mb-3 justify-content-center">
              <select className="form-select district-select" aria-label="Default select example" id="ca-wise-district-select">
                <option value="" selected="">
                  Select District
                </option>
              </select>
            </div>
            <div className="col mb-3 justify-content-center">
              <select className="form-select" aria-label="Default select example" id="ca-wise-tehsil-select">
                <option value="" selected="">
                  Select Tehsil
                </option>
              </select>
            </div>
            <div className="col mb-3 justify-content-center">
              <select className="form-select" aria-label="Default select example" id="ca-wise-village-select">
                <option value="" selected="">
                  Select Village
                </option>
              </select>
            </div>
            <div className="col mb-3 justify-content-center">
              <select className="form-select" aria-label="Default select example" id="ca-wise-ca-select">
                <option value="" selected="">
                  Select Controlled Area
                </option>
              </select>
            </div>
          </div>
          <div className="date mb-3">
            <label>
              Start Date <br />
              <input type="date" name="Start Date" id="ca-start-date" defaultValue="" />
            </label>
            <label>
              End Date <br />
              <input type="date" name="End Date" data-value={7} id="ca-end-date" defaultValue="" />
            </label>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button id="viewReportButton3" className="button4">
              View Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
