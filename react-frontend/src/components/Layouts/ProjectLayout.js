import AppSideBar from "./appSideBar/AppSideBar.js";

/*

import ProductsPage from "../ProductsPage/ProductsPage";
import CustomersPage from "../CustomersPage/CustomersPage";
import CustomerTypesPage from "../CustomerTypesPage/CustomerTypesPage";
import AddressesPage from "../AddressesPage/AddressesPage";
import VendorsPage from "../VendorsPage/VendorsPage";
import VendorAddressPage from "../VendorAddressPage/VendorAddressPage";
import ProductServicesPage from "../ProductServicesPage/ProductServicesPage";
import CategoriesPage from "../CategoriesPage/CategoriesPage";
import UnitPage from "../UnitPage/UnitPage";
import ProductBranchesPage from "../ProductBranchesPage/ProductBranchesPage";
import VariationsPage from "../VariationsPage/VariationsPage";
import QrMastersPage from "../QrMastersPage/QrMastersPage";
import WarehousesPage from "../WarehousesPage/WarehousesPage";
import BranchesPage from "../BranchesPage/BranchesPage";
import PosListsPage from "../PosListsPage/PosListsPage";
import InvoicesPage from "../InvoicesPage/InvoicesPage";
import InvoiceProductsPage from "../InvoiceProductsPage/InvoiceProductsPage";
import PaymentMethodsPage from "../PaymentMethodsPage/PaymentMethodsPage";
import DeliveryPage from "../DeliveryPage/DeliveryPage";
import DeliveryDetailPage from "../DeliveryDetailPage/DeliveryDetailPage";
import DeliveryMethodPage from "../DeliveryMethodPage/DeliveryMethodPage";
import InvoiceTemplatePage from "../InvoiceTemplatePage/InvoiceTemplatePage";
import InvoiceTypePage from "../InvoiceTypePage/InvoiceTypePage";
import InvoicePaymentPage from "../InvoicePaymentPage/InvoicePaymentPage";
import PurchasePage from "../PurchasePage/PurchasePage";
import PurchaseProductPage from "../PurchaseProductPage/PurchaseProductPage";
import PurchaseTypePage from "../PurchaseTypePage/PurchaseTypePage";
import PurchasePaymentPage from "../PurchasePaymentPage/PurchasePaymentPage";
import TransactionPage from "../TransactionPage/TransactionPage";
import NewsPage from "../NewsPage/NewsPage";
import CalendarPage from "../CalendarPage/CalendarPage";
import ProjectPage from "../ProjectPage/ProjectPage";
import MilestonePage from "../MilestonePage/MilestonePage";
import ProjectUserPage from "../ProjectUserPage/ProjectUserPage";
import ProjectClientPage from "../ProjectClientPage/ProjectClientPage";
import ProjectAttachmentPage from "../ProjectAttachmentPage/ProjectAttachmentPage";
~cb-add-import~

~cb-add-services-card~

case "products":
                return <ProductsPage />;
case "customers":
                return <CustomersPage />;
case "customerTypes":
                return <CustomerTypesPage />;
case "addresses":
                return <AddressesPage />;
case "vendors":
                return <VendorsPage />;
case "vendorAddress":
                return <VendorAddressPage />;
case "productServices":
                return <ProductServicesPage />;
case "categories":
                return <CategoriesPage />;
case "unit":
                return <UnitPage />;
case "productBranches":
                return <ProductBranchesPage />;
case "variations":
                return <VariationsPage />;
case "qrMasters":
                return <QrMastersPage />;
case "warehouses":
                return <WarehousesPage />;
case "branches":
                return <BranchesPage />;
case "posLists":
                return <PosListsPage />;
case "invoices":
                return <InvoicesPage />;
case "invoiceProducts":
                return <InvoiceProductsPage />;
case "paymentMethods":
                return <PaymentMethodsPage />;
case "delivery":
                return <DeliveryPage />;
case "deliveryDetail":
                return <DeliveryDetailPage />;
case "deliveryMethod":
                return <DeliveryMethodPage />;
case "invoiceTemplate":
                return <InvoiceTemplatePage />;
case "invoiceType":
                return <InvoiceTypePage />;
case "invoicePayment":
                return <InvoicePaymentPage />;
case "purchase":
                return <PurchasePage />;
case "purchaseProduct":
                return <PurchaseProductPage />;
case "purchaseType":
                return <PurchaseTypePage />;
case "purchasePayment":
                return <PurchasePaymentPage />;
case "transaction":
                return <TransactionPage />;
case "news":
                return <NewsPage />;
case "calendar":
                return <CalendarPage />;
case "project":
                return <ProjectPage />;
case "milestone":
                return <MilestonePage />;
case "projectUser":
                return <ProjectUserPage />;
case "projectClient":
                return <ProjectClientPage />;
case "projectAttachment":
                return <ProjectAttachmentPage />;
~cb-add-thurthy~

*/

const AppLayout = (props) => {
  const { children, activeKey, activeDropdown } = props;

  return (
    <div className="flex min-h-[calc(100vh-5rem)] mt-20 bg-white">
      <AppSideBar activeKey={activeKey} activeDropdown={activeDropdown} />
      <div className="flex-1 ml-2">{children}</div>
    </div>
  );
};

export default AppLayout;
