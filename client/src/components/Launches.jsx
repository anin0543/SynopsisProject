import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import LaunchItem from "./LaunchItem";
import MissionKey from "./MissionKey";
import { withRouter, Link } from "react-router-dom";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

export class Launches extends Component {
  newRecord = () => {
    this.props.history.push("newrecord");
  };
  render() {
    return (
      <Fragment>
        <h1 className="display-4 my-3">Launches</h1>
        <button onClick={() => this.newRecord()} className="register-button">
          New Record
        </button>
        <MissionKey />
        <Query query={LAUNCHES_QUERY}> {({ loading, error, data }) => {
            if (loading) return <h4>Loading...</h4>;
            if (error) console.log(error);

            return (
              <Fragment>
                {data.launches.map((launch) => (
                  <LaunchItem key={launch.flight_number} launch={launch} />
                ))}
              </Fragment>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}

export default Launches;
