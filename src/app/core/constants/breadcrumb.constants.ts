export const BREADCRUMB_CONFIG = [
  {
    id: 5,
    name: 'left-menu.secured-account',
    url: '/admin/secured-account',
    icon: 'verified_user',
    children: [],
  },
  {
    id: 6,
    name: 'left-menu.revenue-expenditure',
    url: '/admin/secured-account-collect-pay',
    icon: 'local_mall',
    children: [],
  },
  {
    id: 7,
    name: 'left-menu.e-wallet-report.title',
    url: null,
    icon: 'insert_chart_outlined',
    children: [
      {
        id: 701,
        name: 'left-menu.e-wallet-report.total-wallet',
        url: '/admin/wallet-report/total-wallet',
        icon: 'insert_chart_outlined',
        parentId: 7,
      },
      {
        id: 702,
        name: 'left-menu.e-wallet-report.by-period',
        url: '/admin/wallet-report/by-period',
        icon: 'insert_chart_outlined',
        parentId: 7,
      },
      {
        id: 703,
        name: 'left-menu.revenue-expenditure-report.partner',
        url: '/admin/wallet-report/partner-info',
        icon: 'insert_chart_outlined',
        parentId: 7,
      },
      {
        id: 704,
        name: 'left-menu.revenue-expenditure-report.transaction',
        url: '/admin/wallet-report/transaction-info',
        icon: 'insert_chart_outlined',
        parentId: 7,
      },
    ],
  }
];
