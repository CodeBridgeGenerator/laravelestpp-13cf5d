import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import client from "../../../services/restClient";
import _ from "lodash";
import initilization from "../../../utils/init";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
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

const AddressesCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
    const urlParams = useParams();
    const [customerId, setCustomerId] = useState([])

    useEffect(() => {
        let init  = {};
        if (!_.isEmpty(props?.entity)) {
            init = initilization({ ...props?.entity, ...init }, [customerId], setError);
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
            customerId: _entity?.customerId?._id,branchId: _entity?.branchId,shippingAddress1: _entity?.shippingAddress1,shippingAddress2: _entity?.shippingAddress2,shippingAddress3: _entity?.shippingAddress3,shippingCity: _entity?.shippingCity,shippingState: _entity?.shippingState,postalCode: _entity?.postalCode,billingAddress1: _entity?.billingAddress1,billingAddress2: _entity?.billingAddress2,billingAddress3: _entity?.billingAddress3,billingCity: _entity?.billingCity,billingState: _entity?.billingState,postalCode1: _entity?.postalCode1,createdAt: _entity?.createdAt,updatedAt: _entity?.updatedAt,
            createdBy: props.user._id,
            updatedBy: props.user._id
        };

        setLoading(true);

        try {
            
        const result = await client.service("addresses").create(_data);
        const eagerResult = await client
            .service("addresses")
            .find({ query: { $limit: 10000 ,  _id :  { $in :[result._id]}, $populate : [
                {
                    path : "customerId",
                    service : "customers",
                    select:["name"]}
            ] }});
        props.onHide();
        props.alert({ type: "success", title: "Create info", message: "Info Addresses updated successfully" });
        props.onCreateResult(eagerResult.data[0]);
        } catch (error) {
            console.log("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to create");
            props.alert({ type: "error", title: "Create", message: "Failed to create in Addresses" });
        }
        setLoading(false);
    };

    useEffect(() => {
                    // on mount customers
                    client
                        .service("customers")
                        .find({ query: { $limit: 10000, $sort: { createdAt: -1 }, _id : urlParams.singleCustomersId } })
                        .then((res) => {
                            setCustomerId(res.data.map((e) => { return { name: e['name'], value: e._id }}));
                        })
                        .catch((error) => {
                            console.log({ error });
                            props.alert({ title: "Customers", type: "error", message: error.message || "Failed get customers" });
                        });
                }, []);

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

    const customerIdOptions = customerId.map((elem) => ({ name: elem.name, value: elem.value }));

    return (
        <Dialog header="Create Addresses" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max" footer={renderFooter()} resizable={false}>
            <div className="grid p-fluid overflow-y-auto"
            style={{ maxWidth: "55vw" }} role="addresses-create-dialog-component">
            <div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="customerId">customer_id:</label>
                <Dropdown id="customerId" value={_entity?.customerId?._id} optionLabel="name" optionValue="value" options={customerIdOptions} onChange={(e) => setValByKey("customerId", {_id : e.value})}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["customerId"]) ? (
              <p className="m-0" key="error-customerId">
                {error["customerId"]}
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
                <label htmlFor="shippingAddress1">shipping_address_1:</label>
                <InputText id="shippingAddress1" className="w-full mb-3 p-inputtext-sm" value={_entity?.shippingAddress1} onChange={(e) => setValByKey("shippingAddress1", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["shippingAddress1"]) ? (
              <p className="m-0" key="error-shippingAddress1">
                {error["shippingAddress1"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="shippingAddress2">shipping_address_2:</label>
                <InputText id="shippingAddress2" className="w-full mb-3 p-inputtext-sm" value={_entity?.shippingAddress2} onChange={(e) => setValByKey("shippingAddress2", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["shippingAddress2"]) ? (
              <p className="m-0" key="error-shippingAddress2">
                {error["shippingAddress2"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="shippingAddress3">shipping_address_3:</label>
                <InputText id="shippingAddress3" className="w-full mb-3 p-inputtext-sm" value={_entity?.shippingAddress3} onChange={(e) => setValByKey("shippingAddress3", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["shippingAddress3"]) ? (
              <p className="m-0" key="error-shippingAddress3">
                {error["shippingAddress3"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="shippingCity">shipping_city:</label>
                <InputText id="shippingCity" className="w-full mb-3 p-inputtext-sm" value={_entity?.shippingCity} onChange={(e) => setValByKey("shippingCity", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["shippingCity"]) ? (
              <p className="m-0" key="error-shippingCity">
                {error["shippingCity"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="shippingState">shipping_state:</label>
                <InputText id="shippingState" className="w-full mb-3 p-inputtext-sm" value={_entity?.shippingState} onChange={(e) => setValByKey("shippingState", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["shippingState"]) ? (
              <p className="m-0" key="error-shippingState">
                {error["shippingState"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="postalCode">postal_code:</label>
                <InputNumber id="postalCode" className="w-full mb-3 p-inputtext-sm" value={_entity?.postalCode} onChange={(e) => setValByKey("postalCode", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["postalCode"]) ? (
              <p className="m-0" key="error-postalCode">
                {error["postalCode"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="billingAddress1">billing_address_1:</label>
                <InputText id="billingAddress1" className="w-full mb-3 p-inputtext-sm" value={_entity?.billingAddress1} onChange={(e) => setValByKey("billingAddress1", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["billingAddress1"]) ? (
              <p className="m-0" key="error-billingAddress1">
                {error["billingAddress1"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="billingAddress2">billing_address_2:</label>
                <InputText id="billingAddress2" className="w-full mb-3 p-inputtext-sm" value={_entity?.billingAddress2} onChange={(e) => setValByKey("billingAddress2", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["billingAddress2"]) ? (
              <p className="m-0" key="error-billingAddress2">
                {error["billingAddress2"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="billingAddress3">billing_address_3:</label>
                <InputText id="billingAddress3" className="w-full mb-3 p-inputtext-sm" value={_entity?.billingAddress3} onChange={(e) => setValByKey("billingAddress3", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["billingAddress3"]) ? (
              <p className="m-0" key="error-billingAddress3">
                {error["billingAddress3"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="billingCity">billing_city:</label>
                <InputText id="billingCity" className="w-full mb-3 p-inputtext-sm" value={_entity?.billingCity} onChange={(e) => setValByKey("billingCity", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["billingCity"]) ? (
              <p className="m-0" key="error-billingCity">
                {error["billingCity"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="billingState">billing_state:</label>
                <InputText id="billingState" className="w-full mb-3 p-inputtext-sm" value={_entity?.billingState} onChange={(e) => setValByKey("billingState", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["billingState"]) ? (
              <p className="m-0" key="error-billingState">
                {error["billingState"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="postalCode1">postal_code_1:</label>
                <InputNumber id="postalCode1" className="w-full mb-3 p-inputtext-sm" value={_entity?.postalCode1} onChange={(e) => setValByKey("postalCode1", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["postalCode1"]) ? (
              <p className="m-0" key="error-postalCode1">
                {error["postalCode1"]}
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

export default connect(mapState, mapDispatch)(AddressesCreateDialogComponent);
