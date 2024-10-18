import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import client from "../../../services/restClient";
import _ from "lodash";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { Tag } from 'primereact/tag';
import moment from "moment";
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';


const getSchemaValidationErrorsStrings = (errorObj) => {
    let errMsg = {};
    for (const key in errorObj.errors) {
        if (Object.hasOwnProperty.call(errorObj.errors, key)) {
            const element = errorObj.errors[key];
            if (element?.message) {
                errMsg.push(element.message);
            }
        }
    }
    return errMsg.length ? errMsg : errorObj.message ? errorObj.message : null;
};

const CustomersCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const urlParams = useParams();
    const [userId, setUserId] = useState([])
const [branchId, setBranchId] = useState([])
const [customerType, setCustomerType] = useState([])

    useEffect(() => {
        set_entity(props.entity);
    }, [props.entity, props.show]);

     useEffect(() => {
                    //on mount users
                    client
                        .service("users")
                        .find({ query: { $limit: 10000, $sort: { createdAt: -1 }, _id : urlParams.singleUsersId } })
                        .then((res) => {
                            setUserId(res.data.map((e) => { return { name: e['name'], value: e._id }}));
                        })
                        .catch((error) => {
                            console.log({ error });
                            props.alert({ title: "Users", type: "error", message: error.message || "Failed get users" });
                        });
                }, []);
 useEffect(() => {
                    //on mount branches
                    client
                        .service("branches")
                        .find({ query: { $limit: 10000, $sort: { createdAt: -1 }, _id : urlParams.singleBranchesId } })
                        .then((res) => {
                            setBranchId(res.data.map((e) => { return { name: e['name'], value: e._id }}));
                        })
                        .catch((error) => {
                            console.log({ error });
                            props.alert({ title: "Branches", type: "error", message: error.message || "Failed get branches" });
                        });
                }, []);
 useEffect(() => {
                    //on mount customerTypes
                    client
                        .service("customerTypes")
                        .find({ query: { $limit: 10000, $sort: { createdAt: -1 }, _id : urlParams.singleCustomerTypesId } })
                        .then((res) => {
                            setCustomerType(res.data.map((e) => { return { name: e['type'], value: e._id }}));
                        })
                        .catch((error) => {
                            console.log({ error });
                            props.alert({ title: "CustomerTypes", type: "error", message: error.message || "Failed get customerTypes" });
                        });
                }, []);

    const onSave = async () => {
        let _data = {
            userId: _entity?.userId?._id,
branchId: _entity?.branchId?._id,
customerType: _entity?.customerType?._id,
name: _entity?.name,
email: _entity?.email,
phoneNumber: _entity?.phoneNumber,
icNo: _entity?.icNo,
dob: _entity?.dob,
balance: _entity?.balance,
taxNo: _entity?.taxNo,
otherInfo: _entity?.otherInfo,
rememberToken: _entity?.rememberToken,
        };

        setLoading(true);
        try {
            
        await client.service("customers").patch(_entity._id, _data);
        const eagerResult = await client
            .service("customers")
            .find({ query: { $limit: 10000 ,  _id :  { $in :[_entity._id]}, $populate : [
                {
                    path : "userId",
                    service : "users",
                    select:["name"]},{
                    path : "branchId",
                    service : "branches",
                    select:["name"]},{
                    path : "customerType",
                    service : "customerTypes",
                    select:["type"]}
            ] }});
        props.onHide();
        props.alert({ type: "success", title: "Edit info", message: "Info customers updated successfully" });
        props.onEditResult(eagerResult.data[0]);
        } catch (error) {
            console.log("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to update info");
            props.alert({ type: "error", title: "Edit info", message: "Failed to update info" });
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

    const userIdOptions = userId.map((elem) => ({ name: elem.name, value: elem.value }));
const branchIdOptions = branchId.map((elem) => ({ name: elem.name, value: elem.value }));
const customerTypeOptions = customerType.map((elem) => ({ name: elem.name, value: elem.value }));

    return (
        <Dialog header="Edit Customers" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max" footer={renderFooter()} resizable={false}>
            <div className="grid p-fluid overflow-y-auto"
            style={{ maxWidth: "55vw" }} role="customers-edit-dialog-component">
                <div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="userId">User Name:</label>
                <Dropdown id="userId" value={_entity?.userId?._id} optionLabel="name" optionValue="value" options={userIdOptions} onChange={(e) => setValByKey("userId", {_id : e.value})}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["userId"]) && (
              <p className="m-0" key="error-userId">
                {error["userId"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="branchId">Branch:</label>
                <Dropdown id="branchId" value={_entity?.branchId?._id} optionLabel="name" optionValue="value" options={branchIdOptions} onChange={(e) => setValByKey("branchId", {_id : e.value})}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["branchId"]) && (
              <p className="m-0" key="error-branchId">
                {error["branchId"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="customerType">Customer Type:</label>
                <Dropdown id="customerType" value={_entity?.customerType?._id} optionLabel="name" optionValue="value" options={customerTypeOptions} onChange={(e) => setValByKey("customerType", {_id : e.value})}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["customerType"]) && (
              <p className="m-0" key="error-customerType">
                {error["customerType"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="name">name:</label>
                <InputText id="name" className="w-full mb-3 p-inputtext-sm" value={_entity?.name} onChange={(e) => setValByKey("name", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["name"]) && (
              <p className="m-0" key="error-name">
                {error["name"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="email">email:</label>
                <InputText id="email" className="w-full mb-3 p-inputtext-sm" value={_entity?.email} onChange={(e) => setValByKey("email", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["email"]) && (
              <p className="m-0" key="error-email">
                {error["email"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="phoneNumber">phone_number:</label>
                <InputNumber id="phoneNumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.phoneNumber} onChange={(e) => setValByKey("phoneNumber", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["phoneNumber"]) && (
              <p className="m-0" key="error-phoneNumber">
                {error["phoneNumber"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="icNo">ic_no:</label>
                <InputNumber id="icNo" className="w-full mb-3 p-inputtext-sm" value={_entity?.icNo} onChange={(e) => setValByKey("icNo", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["icNo"]) && (
              <p className="m-0" key="error-icNo">
                {error["icNo"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="dob">dob:</label>
                <InputNumber id="dob" className="w-full mb-3 p-inputtext-sm" value={_entity?.dob} onChange={(e) => setValByKey("dob", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["dob"]) && (
              <p className="m-0" key="error-dob">
                {error["dob"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="balance">balance:</label>
                <InputNumber id="balance" className="w-full mb-3 p-inputtext-sm" value={_entity?.balance} onChange={(e) => setValByKey("balance", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["balance"]) && (
              <p className="m-0" key="error-balance">
                {error["balance"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="taxNo">tax_no:</label>
                <InputText id="taxNo" className="w-full mb-3 p-inputtext-sm" value={_entity?.taxNo} onChange={(e) => setValByKey("taxNo", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["taxNo"]) && (
              <p className="m-0" key="error-taxNo">
                {error["taxNo"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="otherInfo">other_info:</label>
                <InputText id="otherInfo" className="w-full mb-3 p-inputtext-sm" value={_entity?.otherInfo} onChange={(e) => setValByKey("otherInfo", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["otherInfo"]) && (
              <p className="m-0" key="error-otherInfo">
                {error["otherInfo"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="rememberToken">remember_token:</label>
                <InputText id="rememberToken" className="w-full mb-3 p-inputtext-sm" value={_entity?.rememberToken} onChange={(e) => setValByKey("rememberToken", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["rememberToken"]) && (
              <p className="m-0" key="error-rememberToken">
                {error["rememberToken"]}
              </p>
            )}
          </small>
            </div>
                <div className="col-12">&nbsp;</div>
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

export default connect(mapState, mapDispatch)(CustomersCreateDialogComponent);
