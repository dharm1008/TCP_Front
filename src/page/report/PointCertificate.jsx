import { useEffect, useState } from "react";
import reportAPI from "../../api/report";
import { Dialog } from "primereact/dialog";
import { getAuthStatusById } from "../../utility/report";
import { Button } from "primereact/button";

const PointCertificate = ({ visible, setVisible }) => {
  const [data, setData] = useState({});
  useEffect(() => {
    (async () => {
      try {
        const params = new URLSearchParams();
        params.append("search", visible.UID);
        params.append("pageSize", "10");
        params.append("pageNumber", 1);
        const response = await reportAPI.getFilteredChanges(params.toString());
        setData(response.data.data[0]);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <Dialog visible={visible.show} style={{ width: "50vw" }} onHide={() => setVisible({ show: false, UID: null })}>
      <div className="container mb-3 h-100" style={{ maxWidth: 800 }} id="pdf-box">
        <div className="row point-box d-block" style={{ padding: "1rem" }}>
          <div className="col mb-1 text-dark text-center">
            <h3>Haryana Government</h3>
          </div>
          <div className="col mb-1 text-dark text-center">
            <h5>Town and Country Planning Department, Haryana</h5>
          </div>
          <div className="col mb-1 text-dark text-center">
            <h5 className="text-center" id="report_heading">
              {data?.endDate && data?.endDate !== "-1" ? (
                <>
                  Change Detection Report <br />{" "}
                  <span class="fs-6">
                    ( From {new Date(data?.startDate).toLocaleDateString()} To {new Date(data?.endDate).toLocaleDateString()} )
                  </span>
                </>
              ) : (
                `Change Detection Report`
              )}
            </h5>
          </div>
          <br />
          <div className="row d-flex mb-3">
            <div className="col-6 float-start">
              <strong>GCD ID : </strong>
              <span id="UID">{data?.UID}</span>
            </div>
            <div className="col-6 text-end">
              <strong>Print Date : </strong>
              <span id="date">{new Date().toLocaleDateString()}</span>
            </div>
          </div>
          <div className="row d-flex mb-3 justify-content-between">
            <div className="col">
              <strong>District : </strong>
              <span id="n_d_name">{data?.n_d_name}</span>
            </div>
            <div className="col">
              <strong>Revenue Estate : </strong>
              <span id="n_t_name">{data?.n_t_name}</span>
            </div>
            <div className="col text-end">
              <strong>Village : </strong>
              <span id="n_v_name">{data?.n_v_name}</span>
            </div>
          </div>
          <div className="row d-flex mb-3">
            <div className="col">
              <strong>Hadbast No : </strong>
              <span id="n_v_code">{data?.n_v_code}</span>
            </div>
            <div className="col">
              <strong>Mustil No : </strong>
              <span id="n_murr_no">{data?.n_murr_no}</span>
            </div>
            <div className="col">
              <strong>Khasra Number/ Land Schedule : </strong>
              <span id="n_khas_no">{data?.n_khas_no}</span>
            </div>
          </div>
          <div className="row d-flex mb-3">
            <div className="col">
              <strong>Controlled Area : </strong>
              <span id="ca_name">{data?.ca_name}</span>
            </div>
            <div className="col">
              <strong>Development Plan : </strong>
              <span id="DP_name">{data?.ca_name}</span>
            </div>
            <div className="col">
              <strong> Urban Area :</strong>
              <span id="ua_name">NA</span>
            </div>
          </div>
          <div className="row d-flex mb-3">
            <div className="col">
              <strong>Change Area(Sqm) : </strong>
              <span id="tcp_area_gis">{data?.tcp_area_gis}</span>
            </div>
            <div className="col">
              <strong>Change Detected (Construction /Demolition/Others) : </strong>
              <span id="detectedChange">NA</span>
            </div>
          </div>
          <div className="row d-flex mb-3">
            <div className="col">
              <strong> Detection Date :</strong>
              <span id="endDateD">NA</span>
            </div>
            <div className="col">
              <strong>Verified/Not Verified : </strong>
              <span id="verified">{data?.verified}</span>
            </div>
          </div>
          <div className="row d-flex mb-3">
            <div className="col">
              <strong> Verified By :</strong>
              <span id="verifiedBy">NA</span>
            </div>
            <div className="col">
              <strong> Verification Date :</strong>
              <span id="verificationDate">NA</span>
            </div>
          </div>
          <div className="row d-flex mb-3">
            <div className="col">
              <strong>Authorized/Unauthorized : </strong>
              <span id="auth_status">{getAuthStatusById(data?.auth_status) || "NA"}</span>
            </div>
            <div className="col">
              <strong>If Authorized Remarks (CLU,Licensed/HSVP/Colony,etc.) :</strong>
              <span id="auth_reason">{data?.auth_reason}</span>
            </div>
          </div>
          <div className="row d-flex mb-3">
            <div className="col">
              <strong> Owner Details :</strong>
              <span id="owner_detail">NA</span>
            </div>
            <div className="col">
              <strong>Colony/Individual Construction : </strong>
              <span id="unauth_reason">NA</span>
            </div>
          </div>
          <div className="row d-flex mb-3">
            <div className="col">
              <strong> Action Upon Detection(Demolished/Approved etc.) :</strong>
              <span id="ActionUponDetection">NA</span>
            </div>
            <div className="col">
              <strong> Demolition Status(Implemented/Not Implemented) :</strong>
              <span id="dmolitionStatus">NA</span>
            </div>
          </div>
          <div className="row d-flex mb-3">
            <div className="col">
              <strong> Demolition Date :</strong>
              <span id="demolitionDate">NA</span>
            </div>
            <div className="col">
              <strong>Entry Date : </strong>
              <span id="entry_date">{data?.entry_date ? new Date(data?.entry_date).toLocaleDateString() : "NA"}</span>
            </div>
            <div className="col">
              <strong>Type of Change : </strong>
              <span id="changeType">{data?.changeType}</span>
            </div>
          </div>
          <div className="row d-flex mb-3">
            <div className="col">
              <strong>Action upon Detection : </strong>
              <span id="feedback">{data?.feedback}</span>
            </div>
            <div className="col">
              <strong>Latitude : </strong>
              <span id="latitude">{data?.latitude ? data?.latitude.toFixed(2) : "NA"}</span>
            </div>
            <div className="col">
              <strong>Longitude : </strong>
              <span id="longitude">{data?.longitude ? data?.longitude.toFixed(2) : "NA"}</span>
            </div>
            <div className="col">
              <strong>Year : </strong>
              <span id="year">{data?.year}</span>
            </div>
          </div>
          <div className="row box2 d-flex">
            <div className="col">
              <div className="row d-block">
                <div className="col">
                  <strong>Start Date : </strong>
                  <span id="startDate">{data?.startDate ? new Date(data?.startDate).toLocaleDateString() : "NA"}</span>
                </div>
                <div className="col" id="start_date_image">
                  <span>
                    <img className="point-img " src={`data:image;base64,${data?.start_date_image}`} alt={`point-img`} />
                  </span>
                </div>
                <div className="col">
                  Satellite Image <strong>Before </strong>
                </div>
              </div>
            </div>
            <div className="col d-block">
              <div className="row d-block">
                <div className="col">
                  <strong>End Date : </strong>
                  <span id="endDate">{data?.endDate ? new Date(data?.endDate).toLocaleDateString() : "NA"}</span>
                </div>
                <div className="col" id="end_date_image">
                  <span>
                    <img className="point-img " src={`data:image;base64,${data?.end_date_image}`} alt={`point-img`} />
                  </span>
                </div>
                <div className="col">
                  Satellite Image <strong>After </strong>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col fw-bold">
              <i>Disclaimer: This report is for the reference purpose only. It will be not considered as final report as per the TCP department.</i>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <Button label="Print" className="rounded" onClick={() => console.log("print")} />
      </div>
    </Dialog>
  );
};

export default PointCertificate;
