<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Interfaces\UserRepositoryInterface;
use App\Repositories\UserRepository;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
$this->app->bind(CustomerRepositoryInterface::class, CustomerRepository::class);
$this->app->bind(CustomerTypeRepositoryInterface::class, CustomerTypeRepository::class);
$this->app->bind(AddressRepositoryInterface::class, AddressRepository::class);
$this->app->bind(VendorRepositoryInterface::class, VendorRepository::class);
$this->app->bind(VendorAddressRepositoryInterface::class, VendorAddressRepository::class);
$this->app->bind(ProductServiceRepositoryInterface::class, ProductServiceRepository::class);
$this->app->bind(CategoryRepositoryInterface::class, CategoryRepository::class);
$this->app->bind(UnitRepositoryInterface::class, UnitRepository::class);
$this->app->bind(ProductBranchRepositoryInterface::class, ProductBranchRepository::class);
$this->app->bind(VariationRepositoryInterface::class, VariationRepository::class);
$this->app->bind(QrMasterRepositoryInterface::class, QrMasterRepository::class);
$this->app->bind(WarehouseRepositoryInterface::class, WarehouseRepository::class);
$this->app->bind(BranchRepositoryInterface::class, BranchRepository::class);
$this->app->bind(PosListRepositoryInterface::class, PosListRepository::class);
$this->app->bind(InvoiceRepositoryInterface::class, InvoiceRepository::class);
$this->app->bind(InvoiceProductRepositoryInterface::class, InvoiceProductRepository::class);
$this->app->bind(PaymentMethodRepositoryInterface::class, PaymentMethodRepository::class);
$this->app->bind(DeliveryRepositoryInterface::class, DeliveryRepository::class);
$this->app->bind(DeliveryDetailRepositoryInterface::class, DeliveryDetailRepository::class);
$this->app->bind(DeliveryMethodRepositoryInterface::class, DeliveryMethodRepository::class);
$this->app->bind(InvoiceTemplateRepositoryInterface::class, InvoiceTemplateRepository::class);
$this->app->bind(InvoiceTypeRepositoryInterface::class, InvoiceTypeRepository::class);
$this->app->bind(InvoicePaymentRepositoryInterface::class, InvoicePaymentRepository::class);
$this->app->bind(PurchaseRepositoryInterface::class, PurchaseRepository::class);
$this->app->bind(PurchaseProductRepositoryInterface::class, PurchaseProductRepository::class);
$this->app->bind(PurchaseTypeRepositoryInterface::class, PurchaseTypeRepository::class);
$this->app->bind(PurchasePaymentRepositoryInterface::class, PurchasePaymentRepository::class);
$this->app->bind(TransactionRepositoryInterface::class, TransactionRepository::class);
$this->app->bind(NewsRepositoryInterface::class, NewsRepository::class);
$this->app->bind(CalendarRepositoryInterface::class, CalendarRepository::class);
$this->app->bind(ProjectRepositoryInterface::class, ProjectRepository::class);
$this->app->bind(MilestoneRepositoryInterface::class, MilestoneRepository::class);
$this->app->bind(ProjectUserRepositoryInterface::class, ProjectUserRepository::class);
$this->app->bind(ProjectClientRepositoryInterface::class, ProjectClientRepository::class);
$this->app->bind(ProjectAttachmentRepositoryInterface::class, ProjectAttachmentRepository::class);
        // ~cb-service-provider~
        $this->app->bind(UserRepositoryInterface::class, UserRepository::class);
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
