import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import client from "../../../services/restClient";
import _ from "lodash";
import initilization from "../../../utils/init";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";


const getSchemaValidationErrorsStrings = (errorObj) => {
    let errMsg = {};
    for (const key in errorObj.errors) {
      if (Object.hasOwnProperty.call(errorObj.errors, key)) {
        const element = errorObj.errors[key];
        if (element?.message) {
          errMsg[key] = element.message;
        }
      }
    }
    return errMsg.length ? errMsg : errorObj.message ? { error : errorObj.message} : {};
};

const InvoicePaymentCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
    const urlParams = useParams();
    

    useEffect(() => {
        let init  = {};
        if (!_.isEmpty(props?.entity)) {
            init = initilization({ ...props?.entity, ...init }, [], setError);
        }
        set_entity({...init});
    }, [props.show]);

    const validate = () => {
        let ret = true;
        const error = {};
        
        if (!ret) setError(error);
        return ret;
    }

    const onSave = async () => {
        if(!validate()) return;
        let _data = {
            branchId: _entity?.branchId,invoiceId: _entity?.invoiceId,date: _entity?.date,amount: _entity?.amount,accountId: _entity?.accountId,paymentMethod: _entity?.paymentMethod,reference: _entity?.reference,description: _entity?.description,receiptPath: _entity?.receiptPath,createdAt: _entity?.createdAt,updatedAt: _entity?.updatedAt,
            createdBy: props.user._id,
            updatedBy: props.user._id
        };

        setLoading(true);

        try {
            
        const result = await client.service("invoicePayment").create(_data);
        props.onHide();
        props.alert({ type: "success", title: "Create info", message: "Info Invoice Payment created successfully" });
        props.onCreateResult(result);
        } catch (error) {
            console.log("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to create");
            props.alert({ type: "error", title: "Create", message: "Failed to create in Invoice Payment" });
        }
        setLoading(false);
    };

    

    const renderFooter = () => (
        <div className="flex justify-content-end">
            <Button label="save" className="p-button-text no-focus-effect" onClick={onSave} loading={loading} />
            <Button label="close" className="p-button-text no-focus-effect p-button-secondary" onClick={props.onHide} />
        </div>
    );

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
        setError({});
    };

    

    return (
        <Dialog header="Create Invoice Payment" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max" footer={renderFooter()} resizable={false}>
            <div className="grid p-fluid overflow-y-auto"
            style={{ maxWidth: "55vw" }} role="invoicePayment-create-dialog-component">
            <div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="branchId">branch_id:</label>
                <InputNumber id="branchId" className="w-full mb-3 p-inputtext-sm" value={_entity?.branchId} onChange={(e) => setValByKey("branchId", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["branchId"]) ? (
              <p className="m-0" key="error-branchId">
                {error["branchId"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="invoiceId">invoice_id:</label>
                <InputNumber id="invoiceId" className="w-full mb-3 p-inputtext-sm" value={_entity?.invoiceId} onChange={(e) => setValByKey("invoiceId", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["invoiceId"]) ? (
              <p className="m-0" key="error-invoiceId">
                {error["invoiceId"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="date">date:</label>
                <InputNumber id="date" className="w-full mb-3 p-inputtext-sm" value={_entity?.date} onChange={(e) => setValByKey("date", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["date"]) ? (
              <p className="m-0" key="error-date">
                {error["date"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="amount">amount:</label>
                <InputNumber id="amount" className="w-full mb-3 p-inputtext-sm" value={_entity?.amount} onChange={(e) => setValByKey("amount", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["amount"]) ? (
              <p className="m-0" key="error-amount">
                {error["amount"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="accountId">account_id:</label>
                <InputNumber id="accountId" className="w-full mb-3 p-inputtext-sm" value={_entity?.accountId} onChange={(e) => setValByKey("accountId", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["accountId"]) ? (
              <p className="m-0" key="error-accountId">
                {error["accountId"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="paymentMethod">payment_method:</label>
                <InputText id="paymentMethod" className="w-full mb-3 p-inputtext-sm" value={_entity?.paymentMethod} onChange={(e) => setValByKey("paymentMethod", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["paymentMethod"]) ? (
              <p className="m-0" key="error-paymentMethod">
                {error["paymentMethod"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="reference">reference:</label>
                <InputText id="reference" className="w-full mb-3 p-inputtext-sm" value={_entity?.reference} onChange={(e) => setValByKey("reference", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["reference"]) ? (
              <p className="m-0" key="error-reference">
                {error["reference"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="description">description:</label>
                <InputText id="description" className="w-full mb-3 p-inputtext-sm" value={_entity?.description} onChange={(e) => setValByKey("description", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["description"]) ? (
              <p className="m-0" key="error-description">
                {error["description"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="receiptPath">receipt_path:</label>
                <InputText id="receiptPath" className="w-full mb-3 p-inputtext-sm" value={_entity?.receiptPath} onChange={(e) => setValByKey("receiptPath", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["receiptPath"]) ? (
              <p className="m-0" key="error-receiptPath">
                {error["receiptPath"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="createdAt">created_at:</label>
                <InputNumber id="createdAt" className="w-full mb-3 p-inputtext-sm" value={_entity?.createdAt} onChange={(e) => setValByKey("createdAt", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["createdAt"]) ? (
              <p className="m-0" key="error-createdAt">
                {error["createdAt"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="updatedAt">updated_at:</label>
                <InputNumber id="updatedAt" className="w-full mb-3 p-inputtext-sm" value={_entity?.updatedAt} onChange={(e) => setValByKey("updatedAt", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["updatedAt"]) ? (
              <p className="m-0" key="error-updatedAt">
                {error["updatedAt"]}
              </p>
            ) : null}
          </small>
            </div>
            <small className="p-error">
                {Array.isArray(Object.keys(error))
                ? Object.keys(error).map((e, i) => (
                    <p className="m-0" key={i}>
                        {e}: {error[e]}
                    </p>
                    ))
                : error}
            </small>
            </div>
        </Dialog>
    );
};

const mapState = (state) => {
    const { user } = state.auth;
    return { user };
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(InvoicePaymentCreateDialogComponent);
