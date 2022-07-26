import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { Card, CardBody, Table, Alert, Button } from "reactstrap";
import {
  VISIT_API,
  VISIT_FILE_UPLOAD_API,
} from "../../components/services/constants";
import {
  getRequest,
  multiPartPostRequest,
  postRequest,
} from "../../components/services/server";
import { sessionExpireChecker } from "../../helpers";
import LoginSignup from "../authentication/LoginSignup";

const Home = () => {
  const history = useHistory();
  const inputFile = useRef(null);

  const [visits, setVisits] = useState([]);
  const [fileError, setFileError] = useState("");
  const [fileName, setFileName] = useState("");
  const [fileUploadResponse, setFileUploadResponse] = useState(null);

  useEffect(() => {
    getRequest(VISIT_API)
      .then((result) => {
        console.log("Debugging", result);
        if (result.status === 200) setVisits(result.data);
      })
      .catch((error) => {
        console.log("error", error);
        sessionExpireChecker(error.status, history);
      });
  }, []);

  const uploadFile = () => {
    let file = false;
    setFileError("");

    if (fileName === null) {
      setFileError("Please upload an csv file.");
      file = true;
    } else if (!fileName.includes("csv")) {
      setFileError("Please choose an appropriate csv file type.");
      file = true;
    }

    let data = new FormData();
    data.append("file", inputFile.current.files[0]);

    if (!file) {
      multiPartPostRequest(VISIT_FILE_UPLOAD_API, data)
        .then((res) => {
          console.log("Debugging", res);
          if (res.status === 200) {
            setFileUploadResponse(res.data);
          } else if (res.status === 201) {
            setFileUploadResponse(res.data);
          }
        })
        .catch((error) => {
          console.log("error", error);
          sessionExpireChecker(error.status, history);
        });
    }
  };

  const logOut = () => {
    localStorage.removeItem("authUser");
    localStorage.removeItem("t");
    history.push(LoginSignup);
  };

  return (
    <div>
      <br />
      <div style={{ width: "98%", margin: "auto", textAlign: "end" }}>
        <Button onClick={logOut}>Log Out</Button>
      </div>
      <br />
      <Card style={{ width: "98%", margin: "auto" }}>
        <CardBody>
          <h2 style={{ textAlign: "center" }}>
            <u>Upload File</u>
          </h2>
          <p style={{ display: "inline-block", marginRight: "8px" }}>
            Please select a File:
          </p>
          <input
            ref={inputFile}
            type="file"
            onChange={(event) => {
              let fileName = event.target.files[0].name;
              setFileError("");

              if (fileName === null) {
                setFileError("Please upload an csv file.");
              } else if (!fileName.includes("csv")) {
                setFileError("Please choose an appropriate csv file type.");
              }
              setFileName(fileName);
            }}
          />
          <p className="form-error">{fileError}</p>
          <button onClick={uploadFile}>Upload File</button>

          <Alert
            className="mt-3"
            color="success"
            isOpen={fileUploadResponse ? true : false}
          >
            {fileUploadResponse}
          </Alert>
        </CardBody>
      </Card>

      <br />

      <Card style={{ width: "98%", margin: "auto" }}>
        <CardBody>
          <h2 style={{ textAlign: "center" }}>
            <u>Visits</u>
          </h2>
          {visits.length === 0 ? (
            <p style={{ textAlign: "center" }}>No records found!</p>
          ) : (
            <Table className="visit-table">
              <thead>
                <tr>
                  <th>Patient First Name</th>
                  <th>Patient Last Name</th>
                  <th>Date Of Birth</th>
                  <th>Visit Date</th>
                  <th>Visit Reason</th>
                </tr>
              </thead>
              <tbody>
                {visits.length > 0 &&
                  visits.map((visit, idx) => {
                    return (
                      <tr key={idx}>
                        <td>{visit.patient.first_name}</td>
                        <td>{visit.patient.last_name}</td>
                        <td>{visit.patient.date_of_birth}</td>
                        {/* <td>{visit.visit_date}</td> */}
                        <td>
                          {new Date(visit.visit_date).toLocaleDateString(
                            "en-CA",
                            {
                              timeZone: "UTC",
                            }
                          )}
                        </td>
                        <td>{visit.visit_reason}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </Table>
          )}
        </CardBody>
      </Card>
    </div>
  );
};

export default Home;
