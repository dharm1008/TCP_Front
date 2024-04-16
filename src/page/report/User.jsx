import { useEffect, useState } from "react";
import reportAPI from "../../api/report";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Panel } from "primereact/panel";
import { Button } from "primereact/button";

const User = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const [startdate, setStartDate] = useState("");
  const [enddate, setEndDate] = useState("");
  const [filter, setFilter] = useState(false);

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleFilterClick = () => {
    setFilter(!filter);
  };

  useEffect(() => {
    (async () => {
      try {
        const params = new URLSearchParams();
        params.append("startdate", startdate);
        params.append("enddate", enddate);
        const response = await reportAPI.getUsers(params.toString());
        console.log(response.data);
        setData(response.data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [filter]);

  return (
    <>
      <div className="col bg-white" style={{ marginTop: "100px" }}>
        <div className="title fw-bold text-center" style={{ backgroundColor: "#094E7F", padding: "10px", marginTop: "100px", color: "white" }}>
          All User Report
        </div>
        <div>
          <Panel>
            <div id="main-report-date-filter" className="date-filter d-flex justify-content-center align-items-center gap-2">
              <div>
                <label htmlFor="">Start Date</label>
                <input type="date" value={startdate} onChange={handleStartDateChange} />
              </div>
              <div>
                <label htmlFor="">End Date</label>
                <input type="date" value={enddate} onChange={handleEndDateChange} />
              </div>
              <div className="">
                <Button className="rounded" onClick={handleFilterClick}>
                  Filter
                </Button>
              </div>
            </div>
          </Panel>
        </div>
      </div>
      <div className="card">
        <DataTable value={data} loading={loading} columnResizeMode="expand" resizableColumns showGridlines tableStyle={{ minWidth: "50rem" }}>
          <Column field="name" header="Name"></Column>
          <Column field="user_name" header="User Name"></Column>
          <Column field="name_count" header="Verified Count"></Column>
          <Column field="assigned_district" header="District"></Column>
        </DataTable>
      </div>
    </>
  );
};

export default User;
