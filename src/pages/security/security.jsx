import React from "react";

const Security = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="container">
          <div className="row content">
            <div className="col-sm-12 text-left">
              <div className="card my-4">
                <h5 className="card-header bg-primary text-white">
                  Advanced login security settings
                </h5>

                <div className="card-body">
                  <form method="post">
                    Detect IP Address Change Sensitivity
                    <br />
                    <input type="radio" name="ip" value="disabled" />
                    Disabled
                    <br />
                    <input type="radio" name="ip" value="medium" />
                    Medium
                    <br />
                    <input type="radio" name="ip" value="high" />
                    High
                    <br />
                    <input type="radio" name="ip" value="always" />
                    Paranoic
                    <br />
                    <br />
                    Detect Browser Change
                    <br />
                    <input type="radio" name="browser" value="disabled" />
                    Disabled
                    <br />
                    <input type="radio" name="browser" value="enabled" />
                    Enabled
                    <br />
                    <br />
                    <input
                      type="submit"
                      value="Set"
                      className="btn btn-primary btn-sm waves-effect"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
