import { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import reportAPI from "../../api/report";
import { RadioButton } from "primereact/radiobutton";
const Change = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [filterData, setFilterData] = useState({ districts: [] });
  const [selectedOption, setSelectedOption] = useState("");

  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const f1 = await reportAPI.getAllDistrict();
        console.log(f1.data.data);
        setFilterData({ districts: f1.data.data });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const params = new URLSearchParams();
        params.append("pageSize", 10);
        params.append("pageNumber", 1);
        params.append("page", 1);
        const response = await reportAPI.getFilteredChanges(params);
        setData(response.data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="col bg-white" style={{ marginTop: "120px" }}>
      <div className="d-flex gap-4 flex-wrap align-items-center my-3">
        <div className="col-2" id="district">
          <Dropdown
            className="w-100"
            loading={loading}
            value={selectedItem}
            onChange={(e) => setSelectedItem(e.value)}
            options={filterData?.districts}
            optionLabel="n_d_name"
            optionValue="n_d_code"
            placeholder="Select District"
          />
        </div>
        <div className="col-2" id="tehsil">
          <Dropdown
            className="w-100"
            loading={loading}
            value={selectedItem}
            onChange={(e) => setSelectedItem(e.value)}
            options={filterData?.districts}
            optionLabel="n_d_name"
            optionValue="n_d_code"
            placeholder="Select Tehsil"
          />
        </div>
        <div className="col-2" id="village">
          <Dropdown
            className="w-100"
            loading={loading}
            value={selectedItem}
            onChange={(e) => setSelectedItem(e.value)}
            options={filterData?.districts}
            optionLabel="n_d_name"
            optionValue="n_d_code"
            placeholder="Select Village"
          />
        </div>
        <div className="col-2" id="developmentplan">
          <Dropdown
            className="w-100"
            loading={loading}
            value={selectedItem}
            onChange={(e) => setSelectedItem(e.value)}
            options={filterData?.districts}
            optionLabel="n_d_name"
            optionValue="n_d_code"
            placeholder="Dev Plan"
          />
        </div>
        <div className="col-2" id="controlledArea">
          <Dropdown
            className="w-100"
            loading={loading}
            value={selectedItem}
            onChange={(e) => setSelectedItem(e.value)}
            options={filterData?.districts}
            optionLabel="n_d_name"
            optionValue="n_d_code"
            placeholder="Select CA"
          />
        </div>
        <div className="col-2" id="verifiedBy">
          <Dropdown
            className="w-100"
            loading={loading}
            value={selectedItem}
            onChange={(e) => setSelectedItem(e.value)}
            options={filterData?.districts}
            optionLabel="n_d_name"
            optionValue="n_d_code"
            placeholder="Location Mark By"
          />
        </div>
        <div className="col-2" id="verification">
          <Dropdown
            className="w-100"
            loading={loading}
            value={selectedItem}
            onChange={(e) => setSelectedItem(e.value)}
            options={filterData?.districts}
            optionLabel="n_d_name"
            optionValue="n_d_code"
            placeholder="Select Verification Type"
          />
        </div>
        <div className="col-2" id="feedback">
          <Dropdown
            className="w-100"
            loading={loading}
            value={selectedItem}
            onChange={(e) => setSelectedItem(e.value)}
            options={filterData?.districts}
            optionLabel="n_d_name"
            optionValue="n_d_code"
            placeholder="Action Upon Detection"
          />
        </div>
        <div className="col-2" id="authStatus">
          <Dropdown
            className="w-100"
            loading={loading}
            value={selectedItem}
            onChange={(e) => setSelectedItem(e.value)}
            options={[
              { name: "Authorized", code: 1 },
              { name: "Unauthorized", code: 2 },
            ]}
            optionLabel="name"
            optionValue="code"
            placeholder="Auth Status"
          />
        </div>
        <div className="col-2" id="authReason">
          <Dropdown
            className="w-100"
            loading={loading}
            value={selectedItem}
            onChange={(e) => setSelectedItem(e.value)}
            options={filterData?.districts}
            optionLabel="n_d_name"
            optionValue="n_d_code"
            placeholder="Auth Reason"
          />
        </div>
        <div className="d-flex flex-wrap align-items-center gap-4">
          <div className="d-flex flex-wrap gap-2  align-items-center">
            <div className="">
              <h6 className="mb-0 text-white px-2 py-1 rounded" style={{ backgroundColor: "#2895f0" }}>
                Check By
              </h6>
            </div>

            <div className="btn-group flex-wrap gap-1" data-toggle="buttons">
              <div class="d-flex align-items-center gap-1">
                <RadioButton inputId="custom" name="custom" value="custom" onChange={(e) => setSelectedOption(e.value)} checked={selectedOption === "custom"} />
                <label htmlFor="custom" className="ml-2">
                  Custom
                </label>
              </div>
              <div class="d-flex align-items-center gap-1">
                <RadioButton inputId="custom" name="days-radio" value="cycle" onChange={(e) => setSelectedOption(e.value)} checked={selectedOption === "cycle"} />
                <label htmlFor="custom" className="ml-2">
                  Cycle
                </label>
              </div>
            </div>

            {selectedOption === "custom" ? (
              <div className="pr-1 mb-0" id="customeDateInput">
                <div className="input-group">
                  <input type="date" id="startDate" name="startDate" />
                  <input type="date" id="endDate" name={3} className="ml-1" />
                </div>
              </div>
            ) : null}
            {selectedOption === "cycle" ? (
              <div className="pr-1 mb-0" id="cycleLabelInput">
                <div className="input-group">
                  <select id="year">
                    <option value="" disabled="" selected="" hidden="">
                      Year
                    </option>
                  </select>
                  <select id="phase" style={{ width: 100 }}>
                    <option value={-1}>Phase</option>
                  </select>
                </div>
              </div>
            ) : null}
          </div>

          <div>
            <Button type="button" className="rounded" label="Clear Filter" outlined onClick={() => setSelectedOption("")} />
          </div>
          <div>
            <Button className="rounded" label="Filter" />
          </div>
        </div>
      </div>

      <DataTable value={data} loading={loading} columnResizeMode="expand" resizableColumns showGridlines tableStyle={{ minWidth: "50rem" }}>
        <Column field="index" header="S.NO" body={(rowData, props) => <span>{props.rowIndex + 1}</span>} />
        <Column field="UID" header="GCD ID" />
        <Column field="n_d_name" header="District" />
        <Column field="n_t_name" header="Revenue Estate" />
        <Column field="n_v_code" header="Hadbast No" />
        <Column field="n_murr_no" header="Mustil No" />
        <Column field="n_khas_no" header="Khasra Number/Land Schedule" />
        <Column field="ca_name" header="Controlled Area" body={({ ca_name }) => ca_name || "NA"} />
        <Column field="DP_name" header="Development Plan" body={({ DP_name }) => DP_name || "NA"} />
        <Column field="ua_name" header="Urban Area" />
        <Column field="tcp_area_gis" header="Change Area" />
        <Column field="startDateImage" header="Image 1" />
        <Column field="endDateImage" header="Image 2" />
        <Column field="detectedChange" header="Change Detected(Construction/Demolition/Others)" />
        <Column field="endDate" header="Detection Date" />
        <Column field="verified" header="Verified/Not Verified" />
        <Column field="verifiedBy" header="Verified By" />
        <Column field="verificationDate" header="Verification Date" />
        <Column field="auth_status" header="Authorized/Unauthorized" body={({ auth_status }) => auth_status || "NA"} />
        <Column field="auth_reason" header="If authorized,Remarks(CLU,Licensed/HSVP/Colony,etc)" body={({ auth_reason }) => auth_reason || "NA"} />
        <Column field="owner_detail" header="Owner Detail" body={({ owner_detail }) => owner_detail || "NA"} />
        <Column field="unauth_reason" header="Colony/Individual Construction" body={({ unauth_reason }) => unauth_reason || "NA"} />
        <Column header="Action Upon Detection(Demolished/Approved etc.)" body={() => "NA"} />
        <Column header="Demolition Status(Implemented/Not implemented)" body={() => "NA"} />
        <Column header="Demolition Date" body={() => "NA"} />
        <Column header="Point Report" body={() => <Button className="rounded" label="Point Report" size="small" />} />
        <Column header="Point History" body={() => <Button className="rounded" label="Point History" size="small" />} />
      </DataTable>
    </div>
  );
};

export default Change;
