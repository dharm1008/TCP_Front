import { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { formatDate, getStatus, getAuthStatusById } from "../../utility/report";
import reportAPI from "../../api/report";

const PointHistory = ({ visible, setVisible }) => {
  const { UID } = visible;
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await reportAPI.getUIDHistory({ UID });
        const responseData = response.data;
        setData(responseData.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [UID]);

  return (
    <Dialog visible={visible.show} style={{ width: "50vw" }} onHide={() => setVisible({ show: false, UID: null })}>
      <div className="container point-box mb-3 h-100">
        <div className="row d-block" style={{ padding: "1rem" }} id="pdf-box">
          <div class="col mb-1 text-center text-dark">
            <h3>Point History Report</h3>
          </div>
          <br />
          <div class="col mb-1">
            <h3 className="text-center fs-5 text-dark" id="get_uid">
              UID : {UID}
            </h3>
          </div>
          <div className="row cards" id="pdf-box">
            <div className="col">
              <div className="card">
                <div className="row mb-3">
                  <div className="">
                    {data.length > 0 ? (
                      data.map((item, index) => (
                        <div key={index} className="point-flow">
                          <div className="row">
                            <div className="col">
                              <strong>Status Code: - </strong>
                              <span>{getStatus(item.statusCode)}</span>
                            </div>
                            <div className="col">
                              <strong>Verified By: - </strong>
                              <span>{item.username}</span>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <strong>Designation ID: - </strong>
                              <span>{item.designation_id}</span>
                            </div>
                            <div className="col">
                              <strong>Date: - </strong>
                              <span>{formatDate(new Date(item.action_date))}</span>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <strong>Authorized/Unauthorized Status: - </strong>
                              <span>{getAuthStatusById(item.auth_status) || "NA"}</span>
                            </div>
                            <div className="col">
                              <strong>Authorized/Unauthorized Reason: - </strong>
                              <span>{item.auth_reason || "NA"}</span>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <strong>Authorized/Unauthorized Remarks: - </strong>
                              <span>{item.auth_remarks || "NA"}</span>
                            </div>
                          </div>
                          <br />
                          <div className="row row-cols-lg-4">
                            {[item.verifyImg1, item.verifyImg2, item.verifyImg3, item.verifyImg4].map((img, imgIndex) => (
                              <div key={imgIndex} className="col">
                                <span>
                                  <img className="point-img " src={`data:image;base64,${img}`} alt={`point-img ${imgIndex + 1}`} />
                                </span>
                                <p>
                                  <strong>Image {imgIndex + 1}</strong>
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))
                    ) : (
                      <h5 className="text-center">No History Available</h5>
                    )}
                  </div>
                </div>
              </div>
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

export default PointHistory;
