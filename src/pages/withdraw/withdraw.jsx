import React from "react";

const Withdraw = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="container">
          <div className="row content">
            <div className="col-sm-12 text-left">
              <div className="card my-4">
                <h5 className="card-header bg-primary text-white">
                  Ask for withdrawal
                </h5>

                <div className="card-body">
                  <form method="post">
                    <div className="table-responsive">
                      <table className="table table-borderless table-hover table-centered m-0">
                        <tbody>
                          <tr>
                            <td>Account Balance:</td>
                            <td>
                              $<b>0.00</b>
                            </td>
                          </tr>
                          <tr>
                            <td>Pending Withdrawals: </td>
                            <td>
                              $<b></b>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="table-responsive">
                      <table className="table table-borderless table-hover table-centered m-0">
                        <thead className="thead-light">
                          <tr>
                            <th></th>
                            <th>Processing</th>
                            <th>Available</th>
                            <th>Pending</th>
                            <th>Account</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td></td>
                            <td>
                              {/* <img
                                src="images/1006.gif"
                                width="44"
                                height="17"
                                align="absmiddle"
                              />{" "} */}
                              Bitcoin
                            </td>
                            <td>
                              <b style={{color:"green"}}>$0.00</b>
                            </td>
                            <td>
                              <b style={{color:"red"}}>$0.00</b>
                            </td>
                            <td>Wallet: yhgtddtryyuttru5rurru54ui6ibyi6t6</td>
                          </tr>
                          <tr>
                            <td></td>
                            <td>
                              {/* <img
                                src="images/1007.gif"
                                width="44"
                                height="17"
                                align="absmiddle"
                              />{" "} */}
                              USDT
                            </td>
                            <td>
                              <b style={{color:"green"}}>$0.00</b>
                            </td>
                            <td>
                              <b style={{color:"red"}}>$0.00</b>
                            </td>
                            <td>Wallet: iubytti87i75i685i65i6i6tuyrur6</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <br />
                    <br />
                    <div className="alert alert-danger" role="alert">
                      You have no funds to withdraw.
                    </div>
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

export default Withdraw;
