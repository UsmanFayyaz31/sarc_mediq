import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Card, CardBody, Table } from "reactstrap";
import { VISIT_API } from "../../components/services/constants";
import { getRequest } from "../../components/services/server";
import { sessionExpireChecker } from "../../helpers";

const Home = () => {
  const history = useHistory();
  const [visits, setVisits] = useState([]);

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

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Visits</h2>
      <Card style={{ width: "98%", margin: "auto" }}>
        <CardBody>
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
        </CardBody>
      </Card>
    </div>
  );
};

export default Home;
