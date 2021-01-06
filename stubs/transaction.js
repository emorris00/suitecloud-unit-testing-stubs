module.exports = (function () {

  // N/transaction Module Members

  var transaction = function() {};

  // Method

  transaction.prototype.void = function(options) {};

  transaction.prototype.void.promise = function(options) {};

  // Enum

  function Type() {
    this.ASSEMBLY_BUILD = "ASSEMBLY_BUILD";
    this.ASSEMBLY_UNBUILD = "ASSEMBLY_UNBUILD";
    this.BIN_TRANSFER = "BIN_TRANSFER";
    this.BIN_WORKSHEET = "BIN_WORKSHEET";
    this.BLANKET_PURCHASE_ORDER = "BLANKET_PURCHASE_ORDER";
    this.CASH_REFUND = "CASH_REFUND";
    this.CASH_SALE = "CASH_SALE";
    this.CHECK = "CHECK";
    this.CREDIT_CARD_CHARGE = "CREDIT_CARD_CHARGE";
    this.CREDIT_CARD_REFUND = "CREDIT_CARD_REFUND";
    this.CREDIT_MEMO = "CREDIT_MEMO";
    this.CUSTOM_PURCHASE = "CUSTOM_PURCHASE";
    this.CUSTOM_SALE = "CUSTOM_SALE";
    this.CUSTOMER_DEPOSIT = "CUSTOMER_DEPOSIT";
    this.CUSTOMER_PAYMENT = "CUSTOMER_PAYMENT";
    this.CUSTOMER_PAYMENT_AUTHORIZATION = "CUSTOMER_PAYMENT_AUTHORIZATION";
    this.CUSTOMER_REFUND = "CUSTOMER_REFUND";
    this.CUSTOM_TRANSACTION = "CUSTOM_TRANSACTION";
    this.DEPOSIT = "DEPOSIT";
    this.DEPOSIT_APPLICATION = "DEPOSIT_APPLICATION";
    this.ESTIMATE = "ESTIMATE";
    this.EXPENSE_REPORT = "EXPENSE_REPORT";
    this.FULFILLMENT_REQUEST = "FULFILLMENT_REQUEST";
    this.INBOUND_SHIPMENT = "INBOUND_SHIPMENT";
    this.INVENTORY_ADJUSTMENT = "INVENTORY_ADJUSTMENT";
    this.INVENTORY_COST_REVALUATION = "INVENTORY_COST_REVALUATION";
    this.INVENTORY_COUNT = "INVENTORY_COUNT";
    this.INVENTORY_STATUS_CHANGE = "INVENTORY_STATUS_CHANGE";
    this.INVENTORY_TRANSFER = "INVENTORY_TRANSFER";
    this.INVOICE = "INVOICE";
    this.ITEM_FULFILLMENT = "ITEM_FULFILLMENT";
    this.ITEM_RECEIPT = "ITEM_RECEIPT";
    this.JOURNAL_ENTRY = "JOURNAL_ENTRY";
    this.OPPORTUNITY = "OPPORTUNITY";
    this.PAYCHECK = "PAYCHECK";
    this.PAYCHECK_JOURNAL = "PAYCHECK_JOURNAL";
    this.PERIOD_END_JOURNAL = "PERIOD_END_JOURNAL";
    this.PURCHASE_CONTRACT = "PURCHASE_CONTRACT";
    this.PURCHASE_ORDER = "PURCHASE_ORDER";
    this.PURCHASE_REQUISITION = "PURCHASE_REQUISITION";
    this.RETURN_AUTHORIZATION = "RETURN_AUTHORIZATION";
    this.REVENUE_ARRANGEMENT = "REVENUE_ARRANGEMENT";
    this.REVENUE_COMMITMENT = "REVENUE_COMMITMENT";
    this.REVENUE_COMMITMENT_REVERSAL = "REVENUE_COMMITMENT_REVERSAL";
    this.SALES_ORDER = "SALES_ORDER";
    this.STORE_PICKUP_FULFILLMENT = "STORE_PICKUP_FULFILLMENT";
    this.TRANSFER_ORDER = "TRANSFER_ORDER";
    this.VENDOR_BILL = "VENDOR_BILL";
    this.VENDOR_CREDIT = "VENDOR_CREDIT";
    this.VENDOR_PAYMENT = "VENDOR_PAYMENT";
    this.VENDOR_PREPAYMENT = "VENDOR_PREPAYMENT";
    this.VENDOR_PREPAYMENT_APPLICATION = "VENDOR_PREPAYMENT_APPLICATION";
    this.VENDOR_RETURN_AUTHORIZATION = "VENDOR_RETURN_AUTHORIZATION";
    this.WAVE = "WAVE";
    this.WORK_ORDER = "WORK_ORDER";
    this.WORK_ORDER_CLOSE = "WORK_ORDER_CLOSE";
    this.WORK_ORDER_COMPLETION = "WORK_ORDER_COMPLETION";
    this.WORK_ORDER_ISSUE = "WORK_ORDER_ISSUE";
  }

  transaction.prototype.Type = new Type();

  return new transaction();
})();