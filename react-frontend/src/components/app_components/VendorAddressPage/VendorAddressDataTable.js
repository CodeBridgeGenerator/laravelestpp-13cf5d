import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState, useRef } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { useParams } from "react-router-dom";
import moment from "moment";
import UploadService from "../../../services/UploadService";
import { InputText } from 'primereact/inputtext';
import { Dialog } from "primereact/dialog";
import { MultiSelect } from "primereact/multiselect";
import DownloadCSV from "../../../utils/DownloadCSV";
import InboxCreateDialogComponent from "../../cb_components/InboxPage/InboxCreateDialogComponent";
import InviteIcon from "../../../assets/media/Invite.png";
import ExportIcon from "../../../assets/media/Export & Share.png";
import CopyIcon from "../../../assets/media/Clipboard.png";
import DuplicateIcon from "../../../assets/media/Duplicate.png";
import DeleteIcon from "../../../assets/media/Trash.png";

const VendorAddressDataTable = ({ items, fields, onEditRow, onRowDelete, onRowClick, searchDialog, setSearchDialog,   showUpload, setShowUpload,
    showFilter, setShowFilter,
    showColumns, setShowColumns, onClickSaveFilteredfields ,
    selectedFilterFields, setSelectedFilterFields,
    selectedHideFields, setSelectedHideFields, onClickSaveHiddenfields, loading, user,   selectedDelete,
  setSelectedDelete, onCreateResult}) => {
    const dt = useRef(null);
    const urlParams = useParams();
    const [globalFilter, setGlobalFilter] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const [showDialog, setShowDialog] = useState(false);
  const [data, setData] = useState([]);

const p_numberTemplate0 = (rowData, { rowIndex }) => <p >{rowData.customerId}</p>
const p_numberTemplate1 = (rowData, { rowIndex }) => <p >{rowData.branchId}</p>
const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.shippingAddress1}</p>
const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.shippingAddress2}</p>
const pTemplate4 = (rowData, { rowIndex }) => <p >{rowData.shippingAddress3}</p>
const pTemplate5 = (rowData, { rowIndex }) => <p >{rowData.shippingCity}</p>
const pTemplate6 = (rowData, { rowIndex }) => <p >{rowData.shippingState}</p>
const p_numberTemplate7 = (rowData, { rowIndex }) => <p >{rowData.postalCode}</p>
const pTemplate8 = (rowData, { rowIndex }) => <p >{rowData.billingAddress1}</p>
const pTemplate9 = (rowData, { rowIndex }) => <p >{rowData.billingAddress2}</p>
const pTemplate10 = (rowData, { rowIndex }) => <p >{rowData.billingAddress3}</p>
const pTemplate11 = (rowData, { rowIndex }) => <p >{rowData.billingCity}</p>
const pTemplate12 = (rowData, { rowIndex }) => <p >{rowData.billingState}</p>
const p_numberTemplate13 = (rowData, { rowIndex }) => <p >{rowData.postalCode1}</p>
const pTemplate14 = (rowData, { rowIndex }) => <p >{rowData.createdAt}</p>
const pTemplate15 = (rowData, { rowIndex }) => <p >{rowData.updatedAt}</p>
    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowData._id)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
      const checkboxTemplate = (rowData) => (
    <Checkbox
      checked={selectedItems.some((item) => item._id === rowData._id)}
      onChange={(e) => {
        let _selectedItems = [...selectedItems];

        if (e.checked) {
          _selectedItems.push(rowData);
        } else {
          _selectedItems = _selectedItems.filter(
            (item) => item._id !== rowData._id,
          );
        }
        setSelectedItems(_selectedItems);
      }}
    />
  );
  const deselectAllRows = () => {
    // Logic to deselect all selected rows
    setSelectedItems([]); // Assuming setSelectedItems is used to manage selected items state
  };

  const handleDelete = async () => {
    if (!selectedItems || selectedItems.length === 0) return;

    try {
      const promises = selectedItems.map((item) =>
        client.service("companies").remove(item._id),
      );
      await Promise.all(promises);
      const updatedData = data.filter(
        (item) => !selectedItems.find((selected) => selected._id === item._id),
      );
      setData(updatedData);
      setSelectedDelete(selectedItems.map((item) => item._id));

      deselectAllRows();
    } catch (error) {
      console.error("Failed to delete selected records", error);
    }
  };
    
  const handleMessage = () => {
    setShowDialog(true); // Open the dialog
  };

  const handleHideDialog = () => {
    setShowDialog(false); // Close the dialog
  };

    return (
        <>
        <DataTable 
           value={items}
        ref={dt}
        removableSort
        onRowClick={onRowClick}
        scrollable
        rowHover
        stripedRows
        paginator
        rows={10}
        rowsPerPageOptions={[10, 50, 250, 500]}
        size={"small"}
        paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
        currentPageReportTemplate="{first} to {last} of {totalRecords}"
        rowClassName="cursor-pointer"
        alwaysShowPaginator={!urlParams.singleUsersId}
        selection={selectedItems}
        onSelectionChange={(e) => setSelectedItems(e.value)}
        onCreateResult={onCreateResult}
        >
                <Column
          selectionMode="multiple"
          headerStyle={{ width: "3rem" }}
          body={checkboxTemplate}
        />
<Column field="customerId" header="customer_id" body={p_numberTemplate0} filter={selectedFilterFields.includes("customerId")} hidden={selectedHideFields?.includes("customerId")}  sortable style={{ minWidth: "8rem" }} />
<Column field="branchId" header="branch_id" body={p_numberTemplate1} filter={selectedFilterFields.includes("branchId")} hidden={selectedHideFields?.includes("branchId")}  sortable style={{ minWidth: "8rem" }} />
<Column field="shippingAddress1" header="shipping_address_1" body={pTemplate2} filter={selectedFilterFields.includes("shippingAddress1")} hidden={selectedHideFields?.includes("shippingAddress1")}  sortable style={{ minWidth: "8rem" }} />
<Column field="shippingAddress2" header="shipping_address_2" body={pTemplate3} filter={selectedFilterFields.includes("shippingAddress2")} hidden={selectedHideFields?.includes("shippingAddress2")}  sortable style={{ minWidth: "8rem" }} />
<Column field="shippingAddress3" header="shipping_address_3" body={pTemplate4} filter={selectedFilterFields.includes("shippingAddress3")} hidden={selectedHideFields?.includes("shippingAddress3")}  sortable style={{ minWidth: "8rem" }} />
<Column field="shippingCity" header="shipping_city" body={pTemplate5} filter={selectedFilterFields.includes("shippingCity")} hidden={selectedHideFields?.includes("shippingCity")}  sortable style={{ minWidth: "8rem" }} />
<Column field="shippingState" header="shipping_state" body={pTemplate6} filter={selectedFilterFields.includes("shippingState")} hidden={selectedHideFields?.includes("shippingState")}  sortable style={{ minWidth: "8rem" }} />
<Column field="postalCode" header="postal_code" body={p_numberTemplate7} filter={selectedFilterFields.includes("postalCode")} hidden={selectedHideFields?.includes("postalCode")}  sortable style={{ minWidth: "8rem" }} />
<Column field="billingAddress1" header="billing_address_1" body={pTemplate8} filter={selectedFilterFields.includes("billingAddress1")} hidden={selectedHideFields?.includes("billingAddress1")}  sortable style={{ minWidth: "8rem" }} />
<Column field="billingAddress2" header="billing_address_2" body={pTemplate9} filter={selectedFilterFields.includes("billingAddress2")} hidden={selectedHideFields?.includes("billingAddress2")}  sortable style={{ minWidth: "8rem" }} />
<Column field="billingAddress3" header="billing_address_3" body={pTemplate10} filter={selectedFilterFields.includes("billingAddress3")} hidden={selectedHideFields?.includes("billingAddress3")}  sortable style={{ minWidth: "8rem" }} />
<Column field="billingCity" header="billing_city" body={pTemplate11} filter={selectedFilterFields.includes("billingCity")} hidden={selectedHideFields?.includes("billingCity")}  sortable style={{ minWidth: "8rem" }} />
<Column field="billingState" header="billing_state" body={pTemplate12} filter={selectedFilterFields.includes("billingState")} hidden={selectedHideFields?.includes("billingState")}  sortable style={{ minWidth: "8rem" }} />
<Column field="postalCode1" header="postal_code_1" body={p_numberTemplate13} filter={selectedFilterFields.includes("postalCode1")} hidden={selectedHideFields?.includes("postalCode1")}  sortable style={{ minWidth: "8rem" }} />
<Column field="createdAt" header="created_at" body={pTemplate14} filter={selectedFilterFields.includes("createdAt")} hidden={selectedHideFields?.includes("createdAt")}  sortable style={{ minWidth: "8rem" }} />
<Column field="updatedAt" header="updated_at" body={pTemplate15} filter={selectedFilterFields.includes("updatedAt")} hidden={selectedHideFields?.includes("updatedAt")}  sortable style={{ minWidth: "8rem" }} />
            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
            
        </DataTable>


      {selectedItems.length > 0 ? (
        <div
          className="card center"
          style={{
            width: "51rem",
            margin: "20px auto 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px",
            fontSize: "14px",
            fontFamily: "Arial, sans-serif",
            color: "#2A4454",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid #2A4454",
              padding: "5px",
              borderRadius: "5px",
            }}
          >
            {selectedItems.length} selected
            <span
              className="pi pi-times"
              style={{
                cursor: "pointer",
                marginLeft: "10px",
                color: "#2A4454",
              }}
              onClick={() => {
                deselectAllRows();
              }}
            />
          </div>

          {/* New buttons section */}
          <div style={{ display: "flex", alignItems: "center" }}>
            {/* Copy button */}
            <Button
              label="Copy"
              labelposition="right"
              icon={
                <img
                  src={CopyIcon}
                  style={{ marginRight: "4px", width: "1em", height: "1em" }}
                />
              }
              // tooltip="Copy"
              // onClick={handleCopy}
              className="p-button-rounded p-button-text"
              style={{
                backgroundColor: "white",
                color: "#2A4454",
                border: "1px solid transparent",
                transition: "border-color 0.3s",
                fontSize: "14px",
                fontFamily: "Arial, sans-serif",
                marginRight: "8px",
                gap: "4px",
              }}
            />

            {/* Duplicate button */}
            <Button
              label="Duplicate"
              labelposition="right"
              icon={
                <img
                  src={DuplicateIcon}
                  style={{ marginRight: "4px", width: "1em", height: "1em" }}
                />
              }
              // tooltip="Duplicate"
              // onClick={handleDuplicate}
              className="p-button-rounded p-button-text"
              style={{
                backgroundColor: "white",
                color: "#2A4454",
                border: "1px solid transparent",
                transition: "border-color 0.3s",
                fontSize: "14px",
                fontFamily: "Arial, sans-serif",
                marginRight: "8px",
                gap: "4px",
              }}
            />

            {/* Export button */}
            <Button
              label="Export"
              labelposition="right"
              icon={
                <img
                  src={ExportIcon}
                  style={{ marginRight: "4px", width: "1em", height: "1em" }}
                />
              }
              // tooltip="Export"
              // onClick={handleExport}
              className="p-button-rounded p-button-text"
              style={{
                backgroundColor: "white",
                color: "#2A4454",
                border: "1px solid transparent",
                transition: "border-color 0.3s",
                fontSize: "14px",
                fontFamily: "Arial, sans-serif",
                marginRight: "8px",
                gap: "4px",
              }}
            />

            {/* Message button */}
            <Button
              label="Message"
              labelposition="right"
              icon={
                <img
                  src={InviteIcon}
                  style={{ marginRight: "4px", width: "1em", height: "1em" }}
                />
              }
              onClick={handleMessage}
              className="p-button-rounded p-button-text"
              style={{
                backgroundColor: "white",
                color: "#2A4454",
                border: "1px solid transparent",
                transition: "border-color 0.3s",
                fontSize: "14px",
                fontFamily: "Arial, sans-serif",
                marginRight: "8px",
                gap: "4px",
              }}
            />

            {/* InboxCreateDialogComponent */}
            <InboxCreateDialogComponent
              show={showDialog}
              onHide={handleHideDialog}
              serviceInbox="companies"
              onCreateResult={onCreateResult}
              // selectedItemsId={selectedItems.map(item => item._id)}
              selectedItemsId={selectedItems}
            />

            {/* <div style={{ display: 'flex', alignItems: 'center' }}> */}
            <Button
              label="Delete"
              labelposition="right"
              icon={
                <img
                  src={DeleteIcon}
                  style={{ marginRight: "4px", width: "1em", height: "1em" }}
                />
              }
              onClick={handleDelete}
              style={{
                backgroundColor: "white",
                color: "#2A4454",
                border: "1px solid transparent",
                transition: "border-color 0.3s",
                fontSize: "14px",
                fontFamily: "Arial, sans-serif",
                gap: "4px",
              }}
            />
          </div>
        </div>
      ) : null}


        <Dialog header="Upload VendorAddress Data" visible={showUpload} onHide={() => setShowUpload(false)}>
        <UploadService 
          user={user} 
          serviceName="vendorAddress"            
          onUploadComplete={() => {
            setShowUpload(false); // Close the dialog after upload
          }}/>
      </Dialog>

      <Dialog header="Search VendorAddress" visible={searchDialog} onHide={() => setSearchDialog(false)}>
      Search
    </Dialog>
    <Dialog
        header="Filter Users"
        visible={showFilter}
        onHide={() => setShowFilter(false)}
      >
        <div className="card flex justify-content-center">
          <MultiSelect
            value={selectedFilterFields}
            onChange={(e) => setSelectedFilterFields(e.value)}
            options={fields}
            optionLabel="name"
            optionValue="value"
            filter
            placeholder="Select Fields"
            maxSelectedLabels={6}
            className="w-full md:w-20rem"
          />
        </div>
        <Button
          text
          label="save as pref"
          onClick={() => {
            console.log(selectedFilterFields);
            onClickSaveFilteredfields(selectedFilterFields);
            setSelectedFilterFields(selectedFilterFields);
            setShowFilter(false)
          }}
        ></Button>
      </Dialog>

      <Dialog
        header="Hide Columns"
        visible={showColumns}
        onHide={() => setShowColumns(false)}
      >
        <div className="card flex justify-content-center">
          <MultiSelect
            value={selectedHideFields}
            onChange={(e) => setSelectedHideFields(e.value)}
            options={fields}
            optionLabel="name"
            optionValue="value"
            filter
            placeholder="Select Fields"
            maxSelectedLabels={6}
            className="w-full md:w-20rem"
          />
        </div>
        <Button
          text
          label="save as pref"
          onClick={() => {
            console.log(selectedHideFields);
            onClickSaveHiddenfields(selectedHideFields);
            setSelectedHideFields(selectedHideFields);
            setShowColumns(false)
          }}
        ></Button>
      </Dialog>
        </>
    );
};

export default VendorAddressDataTable;