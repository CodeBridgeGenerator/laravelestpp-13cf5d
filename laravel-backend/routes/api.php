<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\CustomerTypeController;
use App\Http\Controllers\AddressController;
use App\Http\Controllers\VendorController;
use App\Http\Controllers\VendorAddressController;
use App\Http\Controllers\ProductServiceController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\UnitController;
use App\Http\Controllers\ProductBranchController;
use App\Http\Controllers\VariationController;
use App\Http\Controllers\QrMasterController;
use App\Http\Controllers\WarehouseController;
use App\Http\Controllers\BranchController;
use App\Http\Controllers\PosListController;
use App\Http\Controllers\InvoiceController;
use App\Http\Controllers\InvoiceProductController;
use App\Http\Controllers\PaymentMethodController;
use App\Http\Controllers\DeliveryController;
use App\Http\Controllers\DeliveryDetailController;
use App\Http\Controllers\DeliveryMethodController;
use App\Http\Controllers\InvoiceTemplateController;
use App\Http\Controllers\InvoiceTypeController;
use App\Http\Controllers\InvoicePaymentController;
use App\Http\Controllers\PurchaseController;
use App\Http\Controllers\PurchaseProductController;
use App\Http\Controllers\PurchaseTypeController;
use App\Http\Controllers\PurchasePaymentController;
use App\Http\Controllers\TransactionController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\CalendarController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\MilestoneController;
use App\Http\Controllers\ProjectUserController;
use App\Http\Controllers\ProjectClientController;
use App\Http\Controllers\ProjectAttachmentController;
// ~cb-controller-paths~ 

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('authentication' , [AuthController::class,'login'])->name('login');
Route::post('users', [UserController::class, 'store']);
Route::post('reauthentication', [AuthController::class,'reauth'])->name('reauth');
Route::post('forgot' , [AuthController::class,'forgot'])->name('forgot');

Route::middleware('auth:sanctum','active_user')->group(function (){
    Route::get('usersfullfilled', [UserController::class, 'index']);
    Route::post('change_password' , [AuthController::class,'change'])->name('change');
Route::resource("users", UserController::class);
Route::resource("customers", CustomerController::class);
Route::resource("customerTypes", CustomerTypeController::class);
Route::resource("addresses", AddressController::class);
Route::resource("vendors", VendorController::class);
Route::resource("vendorAddress", VendorAddressController::class);
Route::resource("productServices", ProductServiceController::class);
Route::resource("categories", CategoryController::class);
Route::resource("unit", UnitController::class);
Route::resource("productBranches", ProductBranchController::class);
Route::resource("variations", VariationController::class);
Route::resource("qrMasters", QrMasterController::class);
Route::resource("warehouses", WarehouseController::class);
Route::resource("branches", BranchController::class);
Route::resource("posLists", PosListController::class);
Route::resource("invoices", InvoiceController::class);
Route::resource("invoiceProducts", InvoiceProductController::class);
Route::resource("paymentMethods", PaymentMethodController::class);
Route::resource("delivery", DeliveryController::class);
Route::resource("deliveryDetail", DeliveryDetailController::class);
Route::resource("deliveryMethod", DeliveryMethodController::class);
Route::resource("invoiceTemplate", InvoiceTemplateController::class);
Route::resource("invoiceType", InvoiceTypeController::class);
Route::resource("invoicePayment", InvoicePaymentController::class);
Route::resource("purchase", PurchaseController::class);
Route::resource("purchaseProduct", PurchaseProductController::class);
Route::resource("purchaseType", PurchaseTypeController::class);
Route::resource("purchasePayment", PurchasePaymentController::class);
Route::resource("transaction", TransactionController::class);
Route::resource("news", NewsController::class);
Route::resource("calendar", CalendarController::class);
Route::resource("project", ProjectController::class);
Route::resource("milestone", MilestoneController::class);
Route::resource("projectUser", ProjectUserController::class);
Route::resource("projectClient", ProjectClientController::class);
Route::resource("projectAttachment", ProjectAttachmentController::class);
    // ~cb-routes-paths~
});


// exceptions
Route::post('/exceptions', function (Request $request) {
    Exceptions::create([
        'device_id' => $request->device_id,
        'error_type' => $request->error_type,
        'function_name' => $request->function_name,
        'request_uri' => $request->request_uri,
        'request_headers' => $request->request_headers,
        'request_body' => $request->request_body,
        'error_body' => $request->error_body,
    ]);
    return response()-json(['received' => 'ok', 'statusCode' => '200']);
})->name('exceptions');


// bad routes
Route::any('{url?}/{sub_url?}/{params?}', function(Request $request, $url = null, $sub_url = null, $params = null){
    return response()->json([
        'statusCode' => 404,
        'status' => false,
        'message' => "Route not found",
        'data' => [
            [
                'path' => $request->path(),
                'method' => $request->method(),
                'no_such_url' => $url .'/'.$sub_url,
                'params' => $params,
                'message'   => 'API Not Found.'
            ]
        ],
    ], 404);
});
