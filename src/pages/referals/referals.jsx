import React from "react";

const Referals = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="container">
          <div className="row content">
            <div className="col-sm-12 text-left">
              <div className="card my-4">
                <h5 className="card-header bg-primary text-white">
                  Your Referrals
                </h5>

                <div className="card-body">
                  Your upline is{" "}
                  <a href="mailto:vanessaowen001@gmail.com">Vanessa</a>
                  <br />
                  <br />
                  <br />
                  <div className="table-responsive">
                    <table className="table table-borderless table-hover table-centered m-0">
                      <tbody>
                        <tr>
                          <td className="item">Referrals:</td>
                          <td className="item">0</td>
                        </tr>
                        <tr>
                          <td className="item">Active referrals:</td>
                          <td className="item">0</td>
                        </tr>
                        <tr>
                          <td className="item">Total referral commission:</td>
                          <td className="item">$0.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referals;
