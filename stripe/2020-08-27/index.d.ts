// File generated from our OpenAPI spec

export * from '../lib.d.ts'
export * from '../shared.d.ts'
export * from '../Errors.d.ts'
export * from '../OAuth.d.ts'
export * from '../Webhooks.d.ts'
export * from './AccountLinks.d.ts'
export * from './Accounts.d.ts'
export * from './AlipayAccounts.d.ts'
export * from './ApplePayDomains.d.ts'
export * from './ApplicationFees.d.ts'
export * from './Applications.d.ts'
export * from './Balance.d.ts'
export * from './BalanceTransactions.d.ts'
export * from './BankAccounts.d.ts'
export * from './BillingPortal/Configurations.d.ts'
export * from './BillingPortal/Sessions.d.ts'
export * from './BitcoinReceivers.d.ts'
export * from './BitcoinTransactions.d.ts'
export * from './Capabilities.d.ts'
export * from './Cards.d.ts'
export * from './Charges.d.ts'
export * from './Checkout/Sessions.d.ts'
export * from './ConnectCollectionTransfers.d.ts'
export * from './CountrySpecs.d.ts'
export * from './Coupons.d.ts'
export * from './CreditNoteLineItems.d.ts'
export * from './CreditNotes.d.ts'
export * from './CustomerBalanceTransactions.d.ts'
export * from './CustomerSources.d.ts'
export * from './Customers.d.ts'
export * from './Discounts.d.ts'
export * from './Disputes.d.ts'
export * from './EphemeralKeys.d.ts'
export * from './Events.d.ts'
export * from './ExchangeRates.d.ts'
export * from './ExternalAccounts.d.ts'
export * from './FeeRefunds.d.ts'
export * from './FileLinks.d.ts'
export * from './Files.d.ts'
export * from './InvoiceItems.d.ts'
export * from './InvoiceLineItems.d.ts'
export * from './Invoices.d.ts'
export * from './IssuerFraudRecords.d.ts'
export * from './Issuing/Authorizations.d.ts'
export * from './Issuing/CardDetails.d.ts'
export * from './Issuing/Cardholders.d.ts'
export * from './Issuing/Cards.d.ts'
export * from './Issuing/Disputes.d.ts'
export * from './Issuing/Transactions.d.ts'
export * from './LineItems.d.ts'
export * from './LoginLinks.d.ts'
export * from './Mandates.d.ts'
export * from './OrderItems.d.ts'
export * from './OrderReturns.d.ts'
export * from './Orders.d.ts'
export * from './PaymentIntents.d.ts'
export * from './PaymentMethods.d.ts'
export * from './Payouts.d.ts'
export * from './Persons.d.ts'
export * from './Plans.d.ts'
export * from './PlatformTaxFees.d.ts'
export * from './Prices.d.ts'
export * from './Products.d.ts'
export * from './PromotionCodes.d.ts'
export * from './Radar/EarlyFraudWarnings.d.ts'
export * from './Radar/ValueListItems.d.ts'
export * from './Radar/ValueLists.d.ts'
export * from './Recipients.d.ts'
export * from './Refunds.d.ts'
export * from './Reporting/ReportRuns.d.ts'
export * from './Reporting/ReportTypes.d.ts'
export * from './ReserveTransactions.d.ts'
export * from './Reviews.d.ts'
export * from './SKUs.d.ts'
export * from './SetupAttempts.d.ts'
export * from './SetupIntents.d.ts'
export * from './Sigma/ScheduledQueryRuns.d.ts'
export * from './SourceMandateNotifications.d.ts'
export * from './SourceTransactions.d.ts'
export * from './Sources.d.ts'
export * from './SubscriptionItems.d.ts'
export * from './SubscriptionSchedules.d.ts'
export * from './Subscriptions.d.ts'
export * from './TaxDeductedAtSources.d.ts'
export * from './TaxIds.d.ts'
export * from './TaxRates.d.ts'
export * from './Terminal/ConnectionTokens.d.ts'
export * from './Terminal/Locations.d.ts'
export * from './Terminal/Readers.d.ts'
export * from './Tokens.d.ts'
export * from './Topups.d.ts'
export * from './TransferReversals.d.ts'
export * from './Transfers.d.ts'
export * from './UsageRecordSummaries.d.ts'
export * from './UsageRecords.d.ts'
export * from './WebhookEndpoints.d.ts'

export class Stripe {
  static Stripe: typeof Stripe;

  constructor(apiKey: string, config: Stripe.StripeConfig);

  setAppInfo(info: Stripe.AppInfo): void;

  StripeResource: Stripe.StripeResource;

  /**
   * Top Level Resources
   */
  accounts: Stripe.AccountsResource;
  accountLinks: Stripe.AccountLinksResource;
  applePayDomains: Stripe.ApplePayDomainsResource;
  applicationFees: Stripe.ApplicationFeesResource;
  balance: Stripe.BalanceResource;
  balanceTransactions: Stripe.BalanceTransactionsResource;
  charges: Stripe.ChargesResource;
  countrySpecs: Stripe.CountrySpecsResource;
  coupons: Stripe.CouponsResource;
  creditNotes: Stripe.CreditNotesResource;
  customers: Stripe.CustomersResource;
  disputes: Stripe.DisputesResource;
  ephemeralKeys: Stripe.EphemeralKeysResource;
  events: Stripe.EventsResource;
  exchangeRates: Stripe.ExchangeRatesResource;
  files: Stripe.FilesResource;
  fileLinks: Stripe.FileLinksResource;
  invoices: Stripe.InvoicesResource;
  invoiceItems: Stripe.InvoiceItemsResource;
  issuerFraudRecords: Stripe.IssuerFraudRecordsResource;
  mandates: Stripe.MandatesResource;
  orders: Stripe.OrdersResource;
  orderReturns: Stripe.OrderReturnsResource;
  paymentIntents: Stripe.PaymentIntentsResource;
  paymentMethods: Stripe.PaymentMethodsResource;
  payouts: Stripe.PayoutsResource;
  plans: Stripe.PlansResource;
  prices: Stripe.PricesResource;
  products: Stripe.ProductsResource;
  promotionCodes: Stripe.PromotionCodesResource;
  refunds: Stripe.RefundsResource;
  reviews: Stripe.ReviewsResource;
  setupAttempts: Stripe.SetupAttemptsResource;
  setupIntents: Stripe.SetupIntentsResource;
  skus: Stripe.SkusResource;
  sources: Stripe.SourcesResource;
  subscriptions: Stripe.SubscriptionsResource;
  subscriptionItems: Stripe.SubscriptionItemsResource;
  subscriptionSchedules: Stripe.SubscriptionSchedulesResource;
  taxRates: Stripe.TaxRatesResource;
  tokens: Stripe.TokensResource;
  topups: Stripe.TopupsResource;
  transfers: Stripe.TransfersResource;
  webhookEndpoints: Stripe.WebhookEndpointsResource;
  webhooks: Stripe.Webhooks;
  oauth: Stripe.OAuthResource;

  /**
   * Namespaced Resources
   */
  billingPortal: {
    configurations: Stripe.BillingPortal.ConfigurationsResource;
    sessions: Stripe.BillingPortal.SessionsResource;
  };
  checkout: {sessions: Stripe.Checkout.SessionsResource};
  issuing: {
    authorizations: Stripe.Issuing.AuthorizationsResource;
    cards: Stripe.Issuing.CardsResource;
    cardholders: Stripe.Issuing.CardholdersResource;
    disputes: Stripe.Issuing.DisputesResource;
    transactions: Stripe.Issuing.TransactionsResource;
  };
  radar: {
    earlyFraudWarnings: Stripe.Radar.EarlyFraudWarningsResource;
    valueLists: Stripe.Radar.ValueListsResource;
    valueListItems: Stripe.Radar.ValueListItemsResource;
  };
  reporting: {
    reportRuns: Stripe.Reporting.ReportRunsResource;
    reportTypes: Stripe.Reporting.ReportTypesResource;
  };
  sigma: {scheduledQueryRuns: Stripe.Sigma.ScheduledQueryRunsResource};
  terminal: {
    connectionTokens: Stripe.Terminal.ConnectionTokensResource;
    locations: Stripe.Terminal.LocationsResource;
    readers: Stripe.Terminal.ReadersResource;
  };

  /**
   * API Errors
   */
  static errors: Stripe.Errors;
  errors: Stripe.Errors;

  on(event: 'request', handler: (event: Stripe.RequestEvent) => void): void;
  on(event: 'response', handler: (event: Stripe.ResponseEvent) => void): void;
  once(event: 'request', handler: (event: Stripe.RequestEvent) => void): void;
  once(
    event: 'response',
    handler: (event: Stripe.ResponseEvent) => void
  ): void;
  off(event: 'request', handler: (event: Stripe.RequestEvent) => void): void;
  off(
    event: 'response',
    handler: (event: Stripe.ResponseEvent) => void
  ): void;

  setProtocol(protocol: string): void;

  /** @deprecated Please use the StripeConfig object instead. */
  setHost(host: string, port?: string | number, protocol?: string): void;

  /** @deprecated Please use the StripeConfig object instead. */
  setPort(port: string | number): void;
  /** @deprecated Please use the StripeConfig object instead. */
  setApiVersion(version: Stripe.LatestApiVersion): void;
  /** @deprecated Please use the StripeConfig object instead. */
  setApiKey(key: string): void;

  /** @deprecated Please use the StripeConfig object instead. */
  setTimeout(timeout?: number): void;
  /** @deprecated Please use the StripeConfig object instead. */
  setMaxNetworkRetries(maxNetworkRetries: number): void;
  /** @deprecated Please use the StripeConfig object instead. */
  setTelemetryEnabled(enabled: boolean): void;
  /** @deprecated Please use the StripeConfig object instead. */
  setHttpAgent(agent: Stripe.HttpAgent): void;
}

export default Stripe;
