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

const VendorsCreateDialogComponent = (props) => {
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
            userId: _entity?.userId,branchId: _entity?.branchId,name: _entity?.name,email: _entity?.email,phoneNumber: _entity?.phoneNumber,regNo: _entity?.regNo,balance: _entity?.balance,taxNo: _entity?.taxNo,otherInfo: _entity?.otherInfo,rememberToken: _entity?.rememberToken,createdAt: _entity?.createdAt,updatedAt: _entity?.updatedAt,
            createdBy: props.user._id,
            updatedBy: props.user._id
        };

        setLoading(true);

        try {
            
        const result = await client.service("vendors").create(_data);
        props.onHide();
        props.alert({ type: "success", title: "Create info", message: "Info Vendors created successfully" });
        props.onCreateResult(result);
        } catch (error) {
            console.log("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to create");
            props.alert({ type: "error", title: "Create", message: "Failed to create in Vendors" });
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
        <Dialog header="Create Vendors" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max" footer={renderFooter()} resizable={false}>
            <div className="grid p-fluid overflow-y-auto"
            style={{ maxWidth: "55vw" }} role="vendors-create-dialog-component">
            <div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="userId">user_id:</label>
                <InputNumber id="userId" className="w-full mb-3 p-inputtext-sm" value={_entity?.userId} onChange={(e) => setValByKey("userId", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["userId"]) ? (
              <p className="m-0" key="error-userId">
                {error["userId"]}
              </p>
            ) : null}
          </small>
            </div>
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
                <label htmlFor="name">name:</label>
                <InputText id="name" className="w-full mb-3 p-inputtext-sm" value={_entity?.name} onChange={(e) => setValByKey("name", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["name"]) ? (
              <p className="m-0" key="error-name">
                {error["name"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="email">email:</label>
                <InputText id="email" className="w-full mb-3 p-inputtext-sm" value={_entity?.email} onChange={(e) => setValByKey("email", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["email"]) ? (
              <p className="m-0" key="error-email">
                {error["email"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="phoneNumber">phone_number:</label>
                <InputNumber id="phoneNumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.phoneNumber} onChange={(e) => setValByKey("phoneNumber", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["phoneNumber"]) ? (
              <p className="m-0" key="error-phoneNumber">
                {error["phoneNumber"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="regNo">reg_no:</label>
                <InputNumber id="regNo" className="w-full mb-3 p-inputtext-sm" value={_entity?.regNo} onChange={(e) => setValByKey("regNo", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["regNo"]) ? (
              <p className="m-0" key="error-regNo">
                {error["regNo"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="balance">balance:</label>
                <InputNumber id="balance" className="w-full mb-3 p-inputtext-sm" value={_entity?.balance} onChange={(e) => setValByKey("balance", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["balance"]) ? (
              <p className="m-0" key="error-balance">
                {error["balance"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="taxNo">tax_no:</label>
                <InputText id="taxNo" className="w-full mb-3 p-inputtext-sm" value={_entity?.taxNo} onChange={(e) => setValByKey("taxNo", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["taxNo"]) ? (
              <p className="m-0" key="error-taxNo">
                {error["taxNo"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="otherInfo">other_info:</label>
                <InputText id="otherInfo" className="w-full mb-3 p-inputtext-sm" value={_entity?.otherInfo} onChange={(e) => setValByKey("otherInfo", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["otherInfo"]) ? (
              <p className="m-0" key="error-otherInfo">
                {error["otherInfo"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="rememberToken">remember_token:</label>
                <InputText id="rememberToken" className="w-full mb-3 p-inputtext-sm" value={_entity?.rememberToken} onChange={(e) => setValByKey("rememberToken", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["rememberToken"]) ? (
              <p className="m-0" key="error-rememberToken">
                {error["rememberToken"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="createdAt">created_at:</label>
                <InputText id="createdAt" className="w-full mb-3 p-inputtext-sm" value={_entity?.createdAt} onChange={(e) => setValByKey("createdAt", e.target.value)}  />
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
                <InputText id="updatedAt" className="w-full mb-3 p-inputtext-sm" value={_entity?.updatedAt} onChange={(e) => setValByKey("updatedAt", e.target.value)}  />
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

export default connect(mapState, mapDispatch)(VendorsCreateDialogComponent);
