import React from "react";

const Deposit = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="container">
          <div className="row content">
            {/* <script language="javascript"><!--
function openCalculator(id)
{

  w = 225; h = 400;
  t = (screen.height-h-30)/2;
  l = (screen.width-w-30)/2;
  window.open('?a=calendar&type=' + id, 'calculator' + id, "top="+t+",left="+l+",width="+w+",height="+h+",resizable=1,scrollbars=0");


  
  for (i = 0; i < document.spendform.h_id.length; i++)
  {
    if (document.spendform.h_id[i].value == id)
    {
      document.spendform.h_id[i].checked = true;
    }
  }

  

}

function updateCompound() {
  var id = 0;
  var tt = document.spendform.h_id.type;
  if (tt && tt.toLowerCase() == 'hidden') {
    id = document.spendform.h_id.value;
  } else {
    for (i = 0; i < document.spendform.h_id.length; i++) {
      if (document.spendform.h_id[i].checked) {
        id = document.spendform.h_id[i].value;
      }
    }
  }

  var cpObj = document.getElementById('compound_percents');
  if (cpObj) {
    while (cpObj.options.length != 0) {
      cpObj.options[0] = null;
    }
  }

  if (cps[id] && cps[id].length > 0) {
    document.getElementById('coumpond_block').style.display = '';

    for (i in cps[id]) {
      cpObj.options[cpObj.options.length] = new Option(cps[id][i]);
    }
  } else {
    document.getElementById('coumpond_block').style.display = 'none';
  }
}
var cps = {};
--></script> */}

            <br />

            <div className="col-sm-12 text-left">
              <div className="card my-4">
                <h5 className="card-header bg-primary text-white">
                  Make a deposit
                </h5>

                <div className="card-body">
                  <div className="row my-3">
                    <div className="col-md-4">
                      <div className="card card-pricing">
                        <div className="card-body text-center">
                          <p className="card-pricing-plan-name font-weight-bold text-uppercase">
                            10% Profit{" "}
                          </p>
                          <span className="card-pricing-icon text-primary">
                            <i className="fe-bar-chart"></i>
                          </span>
                          <h2 className="card-pricing-price">For 24 Hours</h2>
                          <ul className="card-pricing-features">
                            <li>min:$50</li>
                            <li>max:$499</li>
                            <li>Fast Support</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="card card-pricing card-pricing-recommended">
                        <div className="card-body text-center">
                          <p className="card-pricing-plan-name font-weight-bold text-uppercase">
                            30% Profit{" "}
                          </p>
                          <span className="card-pricing-icon text-white">
                            <i className="fe-award"></i>
                          </span>
                          <h2 className="card-pricing-price text-white">
                            For 24 Hours
                          </h2>
                          <ul className="card-pricing-features">
                            <li>min:$500</li>
                            <li>max:$999</li>
                            <li>Fast Support</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="card card-pricing">
                        <div className="card-body text-center">
                          <p className="card-pricing-plan-name font-weight-bold text-uppercase">
                            60% Profit{" "}
                          </p>
                          <span className="card-pricing-icon text-primary">
                            <i className="fe-bar-chart-2"></i>
                          </span>
                          <h2 className="card-pricing-price">For 48 Hours</h2>
                          <ul className="card-pricing-features">
                            <li>min:$1000</li>
                            <li>max:$9,999</li>
                            <li>Fast Support</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="card card-pricing card-pricing-recommended">
                        <div className="card-body text-center">
                          <p className="card-pricing-plan-name font-weight-bold text-uppercase">
                            100% Profit{" "}
                          </p>
                          <span className="card-pricing-icon text-white">
                            <i className="fe-award"></i>
                          </span>
                          <h2 className="card-pricing-price text-white">
                            For 72 Hours
                          </h2>
                          <ul className="card-pricing-features">
                            <li>min:$10,000</li>
                            <li>max:Unlimited</li>
                            <li>Fast Support</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <form method="post" name="spendform">
                    <label className="form-label">Your Account Balance</label>
                    <input className="form-control" value="$0.00" disabled="" />
                    <br />
                    <br />
                    <label className="form-label">Select Package</label>

                    <select name="h_id" className="form-control">
                      <option value="1">PLAN 1</option>
                      <option value="2">PLAN 2</option>
                      <option value="3">PLAN 3</option>
                      <option value="4">PLAN 4</option>
                    </select>

                    <br />
                    <br />

                    <label className="form-label">Select Payment Method</label>
                    <select name="type" className="form-control">
                      <option value="process_1006">Bitcoin</option>
                      <option value="process_1007">USDT</option>
                    </select>
                    <br />
                    <br />
                    <br />
                    <label className="form-label">Enter Amount</label>
                    <br />
                    <input
                      className="form-control"
                      name="amount"
                      value="50.00"
                      placeholder="Deposit Amount"
                    />
                    <br />
                  </form>
                </div>
                <div className="card-footer text-muted">
                  <button
                    type="submit"
                    value="Spend"
                    className="btn btn-primary ml-auto"
                  >
                    Deposit
                  </button>
                </div>

                {/* <script language="javascript">
for (i = 0; i<document.spendform.type.length; i++) {
  if ((document.spendform.type[i].value.match(/^process_/))) {
    document.spendform.type[i].checked = true;
    break;
  }
}
updateCompound();
</script> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deposit;
