export const MockNoti = [
  {
    id: 1088,
    subject: 'Phê duyệt cập nhật thông tin cơ bản của đại lý testv',
    content: 'Kinh doanh  Nhân viên thực hiện chỉnh sửa thông tin cơ bản Đại lý testv. Vui lòng kiểm tra thông tin và thực hiện phê duyệt.',
    status: 'read',
    target: 'MERCHANT',
    target_id: 100245,
    send_date: '14/08 10:45',
  },
  {
    id: 1081,
    subject: 'Phê duyệt cập nhật thông tin cơ bản của đại lý dl0199883',
    content: 'Kinh doanh  Nhân viên thực hiện chỉnh sửa thông tin cơ bản Đại lý dl0199883. Vui lòng kiểm tra thông tin và thực hiện phê duyệt.',
    status: 'new',
    target: 'MERCHANT',
    target_id: 100261,
    send_date: '14/08 10:44',
  },
  {
    id: 1068,
    subject: 'Phê duyệt cập nhật thông tin cơ bản của đại lý dl0199883',
    content: 'Kinh doanh  Nhân viên thực hiện chỉnh sửa thông tin cơ bản Đại lý dl0199883. Vui lòng kiểm tra thông tin và thực hiện phê duyệt.',
    status: 'read',
    target: 'MERCHANT',
    target_id: 100261,
    send_date: '13/08 15:59',
  },
  {
    id: 1060,
    subject: 'Phê duyệt Thông tin cơ bản ĐVCNTT dv0004',
    content: 'Kinh doanh  Nhân viên đã thực hiện chỉnh sửa thông tin cơ bản ĐVCNTT dv0004. Vui lòng kiểm tra thông tin và thực hiện phê duyệt.',
    status: 'read',
    target: 'MERCHANT',
    target_id: 101081,
    send_date: '13/08 15:48',
  },
  {
    id: 1052,
    subject: 'Phê duyệt cập nhật thông tin cơ bản của đại lý dl0199883',
    content: 'Kinh doanh  Nhân viên thực hiện chỉnh sửa thông tin cơ bản Đại lý dl0199883. Vui lòng kiểm tra thông tin và thực hiện phê duyệt.',
    status: 'read',
    target: 'MERCHANT',
    target_id: 100261,
    send_date: '13/08 15:47',
  },
]
export const MockProfile = {
  role: "Admin",
  email: "mkim.jayoun3@agrariant.net",
  phone: "0321568458",
  avatar: null,
  status: 1,
  role_id: 3,
  user_id: 44,
  fullname: "Nguyễn",
  language: "vn",
  username: "mkim.jayoun3@agrariant.net",
  master_id: null,
  creator_id: 33,
  last_login: "19/08/2020 15:02:54",
  merchant_id: 101183,
  status_name: "Hoạt động",
  created_date: "18/08/2020",
  creator_name: "Chinhnguyen",
  merchant_info:
    '{"id": "101183", "code": "MC101183", "bizname": "Bún đậu mắm tôm"}',
};
export const MockHistory = [
  {
    username: "mkim.jayoun3@agrariant.net",
    action_name: "Nguyễn Đã đăng nhập hệ thống",
    action_time: "19/08/2020 15:02:54",
  },
  {
    username: "mkim.jayoun3@agrariant.net",
    action_name: "Nguyễn Đã đăng nhập hệ thống",
    action_time: "19/08/2020 13:58:58",
  },
  {
    username: "mkim.jayoun3@agrariant.net",
    action_name: "Nguyễn Đã đăng nhập hệ thống",
    action_time: "19/08/2020 11:44:33",
  },
  {
    username: "mkim.jayoun3@agrariant.net",
    action_name: "Nguyễn Đã đăng nhập hệ thống",
    action_time: "19/08/2020 11:00:14",
  },
  {
    username: "mkim.jayoun3@agrariant.net",
    action_name: "Nguyễn Đã thay đổi mật khẩu thành công",
    action_time: "19/08/2020 10:57:40",
  },
];
export const MockLeftMenu = [
  {
    url: 'admin/trang-chu',
    menu_id: 1,
    menu_icon: 'home',
    mapped_url: '["/admin/dashboard"]',
    menu_level: 1,
    menu_title: 'Trang chủ',
  },
  {
    url: '/admin/giao-dich-hoan-tra',
    menu_id: 2,
    children: [
      {
        url: '/admin/giao-dich-thanh-toan',
        actions: [
          {
            action_id: 20104,
            action_name: 'Hoàn trả',
          },
          {
            action_id: 20103,
            action_name: 'Xuất file',
          },
          {
            action_id: 20102,
            action_name: 'Xem chi tiết',
          },
          {
            action_id: 20101,
            action_name: 'Tra cứu',
          },
        ],
        menu_id: 201,
        menu_icon: 'payment',
        mapped_url: '["/admin/giao-dich-thanh-toan"]',
        menu_level: 2,
        menu_title: 'Thanh toán',
        menu_parent: 2,
      },
      {
        url: '/admin/giao-dich-hoan-tra',
        actions: [
          {
            action_id: 20203,
            action_name: 'Xuất file',
          },
          {
            action_id: 20202,
            action_name: 'Xem chi tiết',
          },
          {
            action_id: 20201,
            action_name: 'Tra cứu',
          },
        ],
        menu_id: 202,
        menu_icon: 'keyboard_return',
        mapped_url: '["/admin/giao-dich-hoan-tra"]',
        menu_level: 2,
        menu_title: 'Hoàn trả',
        menu_parent: 2,
      },
    ],
    menu_icon: 'attach_money',
    mapped_url: '["/admin/giao-dich-hoan-tra"]',
    menu_level: 1,
    menu_title: 'Quản lý giao dịch',
  },
  {
    url: '/admin/bao-cao-tong-hop',
    menu_id: 3,
    children: [
      {
        url: '/admin/revenue-report',
        actions: [
          {
            action_id: 30101,
            action_name: 'Báo cáo doanh thu GD',
          },
        ],
        menu_id: 301,
        menu_icon: 'monetization_on',
        mapped_url: '["/admin/revenue-report"]',
        menu_level: 2,
        menu_title: 'Báo cáo doanh thu',
        menu_parent: 3,
      },
      {
        url: '/admin/money-transfer-report',
        actions: [
          {
            action_id: 30201,
            action_name: 'Báo cáo chuyển tiền',
          },
        ],
        menu_id: 302,
        menu_icon: 'forward',
        mapped_url: '["/admin/money-transfer-report"]',
        menu_level: 2,
        menu_title: 'Báo cáo chuyển tiền ĐVCNTT',
        menu_parent: 3,
      },
      {
        url: '/admin/finalization-report',
        actions: [
          {
            action_id: 30301,
            action_name: 'Báo cáo thanh quyết toán',
          },
        ],
        menu_id: 303,
        menu_icon: 'sync',
        mapped_url: '["/admin/finalization-report"]',
        menu_level: 2,
        menu_title: 'Báo cáo thanh quyết toán',
        menu_parent: 3,
      },
      {
        url: '/admin/fee-report',
        actions: [
          {
            action_id: 30401,
            action_name: 'Báo cáo phí',
          },
        ],
        menu_id: 304,
        menu_icon: 'money',
        mapped_url: '["/admin/fee-report"]',
        menu_level: 2,
        menu_title: 'Báo cáo phí',
        menu_parent: 3,
      },
    ],
    menu_icon: ' insert_chart_outlined',
    mapped_url: '["/admin/bao-cao-tong-hop"]',
    menu_level: 1,
    menu_title: 'Báo cáo tổng hợp',
  },
  {
    url: '/admin/quan-ly-thong-tin-dvcntt',
    menu_id: 5,
    children: [
      {
        url: '/admin/merchant-profile',
        actions: [
          {
            action_id: 50107,
            action_name: 'Hợp đồng ĐVCNTT',
          },
          {
            action_id: 50106,
            action_name: 'Cập nhật thông tin  phương thức thanh toán ĐVCNTT',
          },
          {
            action_id: 50105,
            action_name: 'Cập nhật (thông tin) ( tài khoản ) phương thức thanh toán ĐVCNTT',
          },
          {
            action_id: 50104,
            action_name: 'Cập nhật thông tin bổ sung ĐVCNTT',
          },
          {
            action_id: 50103,
            action_name: 'Cập nhật thông tin cơ bản ĐVCNTT',
          },
          {
            action_id: 50102,
            action_name: 'Xem chi tiết',
          },
          {
            action_id: 50101,
            action_name: 'Xuất file',
          },
        ],
        menu_id: 501,
        menu_icon: 'work',
        mapped_url: '["/admin/merchant-profile"]',
        menu_level: 2,
        menu_title: 'Hồ sơ ĐVCNTT',
        menu_parent: 5,
      },
      {
        url: '/admin/merchant-children',
        actions: [
          {
            action_id: 50208,
            action_name: 'Danh sách listbox',
          },
          {
            action_id: 50207,
            action_name: 'Cập nhập thêm mới thông tin',
          },
          {
            action_id: 50206,
            action_name: 'Cập nhập thông tin cơ bản',
          },
          {
            action_id: 50205,
            action_name: 'Khóa/ Kích hoạt',
          },
          {
            action_id: 50204,
            action_name: 'Xuất file',
          },
          {
            action_id: 50203,
            action_name: 'Tra cứu',
          },
          {
            action_id: 50202,
            action_name: 'Xem chi tiết',
          },
          {
            action_id: 50201,
            action_name: 'Thêm mới',
          },
        ],
        menu_id: 502,
        menu_icon: 'view_comfy',
        mapped_url: '["/admin/merchant-children"]',
        menu_level: 2,
        menu_title: 'Quản lý ĐVCNTT',
        menu_parent: 5,
      },
      {
        url: '/admin/merchant-qrcode',
        actions: [
          {
            action_id: 50309,
            action_name: 'get-staff',
          },
          {
            action_id: 50308,
            action_name: 'list-staff',
          },
          {
            action_id: 50307,
            action_name: 'Cập nhật mã QR',
          },
          {
            action_id: 50306,
            action_name: 'Xóa mã QR',
          },
          {
            action_id: 50305,
            action_name: 'In mã QR',
          },
          {
            action_id: 50304,
            action_name: 'Xuất file',
          },
          {
            action_id: 50303,
            action_name: 'Tra cứu',
          },
          {
            action_id: 50302,
            action_name: 'Xem chi tiết',
          },
          {
            action_id: 50301,
            action_name: 'Thêm mới',
          },
        ],
        menu_id: 503,
        menu_icon: 'broken_image',
        mapped_url: '["/admin/merchant-qrcode"]',
        menu_level: 2,
        menu_title: 'Quản lý QR Code',
        menu_parent: 5,
      },
    ],
    menu_icon: 'location_city',
    mapped_url: '["/admin/quan-ly-thong-tin-dvcntt"]',
    menu_level: 1,
    menu_title: 'Quản lý thông tin ĐVCNTT',
  },
  {
    url: '/admin/quan-ly-rui-ro',
    menu_id: 6,
    children: [
      {
        url: '/admin/qlrr/tai-khoan-vi-han-che',
        actions: [
          {
            action_id: 60106,
            action_name: 'Xuất file',
          },
          {
            action_id: 60105,
            action_name: 'Xem lịch sử cập nhật',
          },
          {
            action_id: 60104,
            action_name: 'Khóa/ Kích hoạt',
          },
          {
            action_id: 60103,
            action_name: 'Thêm mới',
          },
          {
            action_id: 60102,
            action_name: 'Cập nhật',
          },
          {
            action_id: 60101,
            action_name: 'Tra cứu',
          },
        ],
        menu_id: 601,
        menu_icon: 'account_balance_wallet',
        mapped_url: '["/admin/qlrr/tai-khoan-vi-han-che"]',
        menu_level: 2,
        menu_title: 'Tài khoản ví điện tử hạn chế',
        menu_parent: 6,
      },
      {
        url: '/admin/qlrr/the-nh-han-che',
        actions: [
          {
            action_id: 60206,
            action_name: 'Xuất file',
          },
          {
            action_id: 60205,
            action_name: 'Xem lịch sử cập nhật',
          },
          {
            action_id: 60204,
            action_name: 'Khóa/ Kích hoạt',
          },
          {
            action_id: 60203,
            action_name: 'Thêm mới',
          },
          {
            action_id: 60202,
            action_name: 'Cập nhật',
          },
          {
            action_id: 60201,
            action_name: 'Tra cứu',
          },
        ],
        menu_id: 602,
        menu_icon: 'credit_card',
        mapped_url: '["/admin/qlrr/the-nh-han-che"]',
        menu_level: 2,
        menu_title: 'Thẻ ngân hàng hạn chế',
        menu_parent: 6,
      },
      {
        url: '/admin/qlrr/dai-bin-han-che',
        actions: [
          {
            action_id: 60306,
            action_name: 'Xuất file',
          },
          {
            action_id: 60305,
            action_name: 'Xem lịch sử cập nhật',
          },
          {
            action_id: 60304,
            action_name: 'Khóa/ Kích hoạt',
          },
          {
            action_id: 60303,
            action_name: 'Thêm mới',
          },
          {
            action_id: 60302,
            action_name: 'Cập nhật',
          },
          {
            action_id: 60301,
            action_name: 'Tra cứu',
          },
        ],
        menu_id: 603,
        menu_icon: 'card_membership',
        mapped_url: '["/admin/qlrr/dai-bin-han-che"]',
        menu_level: 2,
        menu_title: 'Dải bin thẻ hạn chế',
        menu_parent: 6,
      },
      {
        url: '/admin/qlrr/ip-han-che',
        actions: [
          {
            action_id: 60405,
            action_name: 'Xuất file',
          },
          {
            action_id: 60405,
            action_name: 'Xuất file',
          },
          {
            action_id: 60405,
            action_name: 'Xem lịch sử cập nhật',
          },
          {
            action_id: 60405,
            action_name: 'Xem lịch sử cập nhật',
          },
          {
            action_id: 60404,
            action_name: 'Khóa/ Kích hoạt',
          },
          {
            action_id: 60403,
            action_name: 'Thêm mới',
          },
          {
            action_id: 60402,
            action_name: 'Cập nhật',
          },
          {
            action_id: 60401,
            action_name: 'Tra cứu',
          },
        ],
        menu_id: 604,
        menu_icon: 'perm_scan_wifi',
        mapped_url: '["/admin/qlrr/ip-han-che"]',
        menu_level: 2,
        menu_title: 'Địa chỉ IP hạn chế',
        menu_parent: 6,
      },
      {
        url: '/admin/qlrr/dich-vu-han-che',
        actions: [
          {
            action_id: 60506,
            action_name: 'Xuất file',
          },
          {
            action_id: 60505,
            action_name: 'Xem lịch sử cập nhật',
          },
          {
            action_id: 60504,
            action_name: 'Khóa/ Kích hoạt',
          },
          {
            action_id: 60503,
            action_name: 'Thêm mới',
          },
          {
            action_id: 60502,
            action_name: 'Cập nhật',
          },
          {
            action_id: 60501,
            action_name: 'Tra cứu',
          },
        ],
        menu_id: 605,
        menu_icon: 'remove_shopping_cart',
        mapped_url: '["/admin/qlrr/dich-vu-han-che"]',
        menu_level: 2,
        menu_title: 'Loại hình dịch vụ hạn chế',
        menu_parent: 6,
      },
      {
        url: '/admin/qlrr/giao-dich-nghi-ngo',
        actions: [
          {
            action_id: 60602,
            action_name: 'Xuất file',
          },
          {
            action_id: 60601,
            action_name: 'Tra cứu',
          },
        ],
        menu_id: 606,
        menu_icon: 'money_off',
        mapped_url: '["/admin/qlrr/giao-dich-nghi-ngo"]',
        menu_level: 2,
        menu_title: 'Tra cứu giao dịch nghi ngờ',
        menu_parent: 6,
      },
    ],
    menu_icon: 'mood_bad',
    mapped_url: '["/admin/quan-ly-rui-ro"]',
    menu_level: 1,
    menu_title: 'Quản lý rủi ro',
  },
  {
    url: '/admin/quan-ly-nguoi-dung',
    actions: [
      {
        action_id: 707,
        action_name: 'Thay đổi trạng thái',
      },
      {
        action_id: 706,
        action_name: 'Khóa/ Kích hoạt',
      },
      {
        action_id: 705,
        action_name: 'Thêm mới',
      },
      {
        action_id: 704,
        action_name: 'Cập nhật',
      },
      {
        action_id: 703,
        action_name: 'Xem chi tiết',
      },
      {
        action_id: 702,
        action_name: 'Xuất file',
      },
      {
        action_id: 701,
        action_name: 'Tra cứu',
      },
      {
        action_id: 708,
        action_name: 'Lấy danh sách role',
      },
    ],
    menu_id: 7,
    menu_icon: 'account_box',
    mapped_url: '["/admin/quan-ly-nguoi-dung"]',
    menu_level: 1,
    menu_title: 'Quản lý người dùng',
  },
  {
    url: '/admin/quan-ly-thong-tin-dich-vu',
    actions: [
      {
        action_id: 809,
        action_name: 'get-payment-method',
      },
      {
        action_id: 808,
        action_name: 'addnew-test',
      },
      {
        action_id: 807,
        action_name: 'addnew',
      },
      {
        action_id: 806,
        action_name: 'get-test-infomation',
      },
      {
        action_id: 805,
        action_name: 'Cập nhật phương thức thanh toán',
      },
      {
        action_id: 804,
        action_name: 'Cập nhật thông tin tích hợp môi trường thử nghiệm',
      },
      {
        action_id: 803,
        action_name: 'Cập nhật thông tin tích hợp môi trường thật',
      },
      {
        action_id: 802,
        action_name: 'Xem Thông tin phí',
      },
      {
        action_id: 801,
        action_name: 'Xem chi tiết',
      },
    ],
    menu_id: 8,
    menu_icon: 'info',
    mapped_url: '["/admin/quan-ly-thong-tin-dich-vu"]',
    menu_level: 1,
    menu_title: 'Quản lý thông tin dịch vụ',
  },
]
export const MockUser = [
  {
    role: "Admin",
    email: "mkim.jayoun3@agrariant.net",
    phone: "0321568458",
    avatar: null,
    status: 1,
    role_id: 3,
    user_id: 44,
    fullname: "Nguyễn",
    language: "vn",
    username: "mkim.jayoun3@agrariant.net",
    master_id: null,
    creator_id: 33,
    last_login: "19/08/2020 15:56:31",
    merchant_id: 101183,
    status_name: "Hoạt động",
    created_date: "18/08/2020",
    creator_name: "Chinhnguyen",
    merchant_info:
      '{"id": "101183", "code": "MC101183", "bizname": "Bún đậu mắm tôm"}',
  },
  {
    role: "Admin",
    email: "mkim.jayoun3@agrariant.net",
    phone: "0321568458",
    avatar: null,
    status: 1,
    role_id: 3,
    user_id: 44,
    fullname: "Nguyễn",
    language: "vn",
    username: "mkim.jayoun3@agrariant.net",
    master_id: null,
    creator_id: 33,
    last_login: "19/08/2020 15:56:31",
    merchant_id: 101183,
    status_name: "Hoạt động",
    created_date: "18/08/2020",
    creator_name: "Chinhnguyen",
    merchant_info:
      '{"id": "101183", "code": "MC101183", "bizname": "Bún đậu mắm tôm"}',
  },
  {
    role: "Admin",
    email: "mkim.jayoun3@agrariant.net",
    phone: "0321568458",
    avatar: null,
    status: 1,
    role_id: 3,
    user_id: 44,
    fullname: "Nguyễn",
    language: "vn",
    username: "mkim.jayoun3@agrariant.net",
    master_id: null,
    creator_id: 33,
    last_login: "19/08/2020 15:56:31",
    merchant_id: 101183,
    status_name: "Hoạt động",
    created_date: "18/08/2020",
    creator_name: "Chinhnguyen",
    merchant_info:
      '{"id": "101183", "code": "MC101183", "bizname": "Bún đậu mắm tôm"}',
  },
  {
    role: "Admin",
    email: "mkim.jayoun3@agrariant.net",
    phone: "0321568458",
    avatar: null,
    status: 1,
    role_id: 3,
    user_id: 44,
    fullname: "Nguyễn",
    language: "vn",
    username: "mkim.jayoun3@agrariant.net",
    master_id: null,
    creator_id: 33,
    last_login: "19/08/2020 15:56:31",
    merchant_id: 101183,
    status_name: "Hoạt động",
    created_date: "18/08/2020",
    creator_name: "Chinhnguyen",
    merchant_info:
      '{"id": "101183", "code": "MC101183", "bizname": "Bún đậu mắm tôm"}',
  },
  {
    role: "Admin",
    email: "mkim.jayoun3@agrariant.net",
    phone: "0321568458",
    avatar: null,
    status: 1,
    role_id: 3,
    user_id: 44,
    fullname: "Nguyễn",
    language: "vn",
    username: "mkim.jayoun3@agrariant.net",
    master_id: null,
    creator_id: 33,
    last_login: "19/08/2020 15:56:31",
    merchant_id: 101183,
    status_name: "Hoạt động",
    created_date: "18/08/2020",
    creator_name: "Chinhnguyen",
    merchant_info:
      '{"id": "101183", "code": "MC101183", "bizname": "Bún đậu mắm tôm"}',
  },
  {
    role: "Admin",
    email: "mkim.jayoun3@agrariant.net",
    phone: "0321568458",
    avatar: null,
    status: 1,
    role_id: 3,
    user_id: 44,
    fullname: "Nguyễn",
    language: "vn",
    username: "mkim.jayoun3@agrariant.net",
    master_id: null,
    creator_id: 33,
    last_login: "19/08/2020 15:56:31",
    merchant_id: 101183,
    status_name: "Hoạt động",
    created_date: "18/08/2020",
    creator_name: "Chinhnguyen",
    merchant_info:
      '{"id": "101183", "code": "MC101183", "bizname": "Bún đậu mắm tôm"}',
  },
  {
    role: "Admin",
    email: "mkim.jayoun3@agrariant.net",
    phone: "0321568458",
    avatar: null,
    status: 1,
    role_id: 3,
    user_id: 44,
    fullname: "Nguyễn",
    language: "vn",
    username: "mkim.jayoun3@agrariant.net",
    master_id: null,
    creator_id: 33,
    last_login: "19/08/2020 15:56:31",
    merchant_id: 101183,
    status_name: "Hoạt động",
    created_date: "18/08/2020",
    creator_name: "Chinhnguyen",
    merchant_info:
      '{"id": "101183", "code": "MC101183", "bizname": "Bún đậu mắm tôm"}',
  },
  {
    role: "Admin",
    email: "mkim.jayoun3@agrariant.net",
    phone: "0321568458",
    avatar: null,
    status: 1,
    role_id: 3,
    user_id: 44,
    fullname: "Nguyễn",
    language: "vn",
    username: "mkim.jayoun3@agrariant.net",
    master_id: null,
    creator_id: 33,
    last_login: "19/08/2020 15:56:31",
    merchant_id: 101183,
    status_name: "Hoạt động",
    created_date: "18/08/2020",
    creator_name: "Chinhnguyen",
    merchant_info:
      '{"id": "101183", "code": "MC101183", "bizname": "Bún đậu mắm tôm"}',
  },
];
export const MockRole = [
  {
    value: 4,
    desc: "BQT - Quản lý",
  },
  {
    value: 5,
    desc: "BQT - Nhân viên",
  },
  {
    value: 6,
    desc: "Sản phẩm - Quản lý",
  },
  {
    value: 7,
    desc: "Sản phẩm - Nhân viên",
  },
  {
    value: 8,
    desc: "Kinh doanh - Quản lý",
  },
  {
    value: 9,
    desc: "Kinh doanh - Nhân viên",
  },
];
export const MockBank = [
  {
    value: "970415",
    desc: "Ngân hàng TMCP Công thương Việt Nam",
  },
  {
    value: "970416",
    desc: "Ngân hàng TMCP Á Châu",
  },
  {
    value: "970418",
    desc: "Ngân hàng Đầu tư và Phát triển Việt Nam",
  },
  {
    value: "970419",
    desc: "Ngân hàng TMCP Quốc dân",
  },
  {
    value: "970421",
    desc: "Ngân hàng liên doanh Việt Nga",
  },
  {
    value: "970422",
    desc: "Ngân hàng TMCP Quân Đội",
  },
  {
    value: "970423",
    desc: "Ngân hàng TMCP Tiên Phong",
  },
];
export const MockSettlement = [
  { value: "1", desc: "Ngày T + 1" },
  { value: "0", desc: "Ngày T" },
];
export const MockCityList = [
  {
    value: "01",
    desc: "Thành phố Hà Nội",
  },
  {
    value: "02",
    desc: "Tỉnh Hà Giang",
  },
];
export const MockDistrictList = [
  {
    value: "001",
    desc: "Quận Ba Đình",
  },
  {
    value: "002",
    desc: "Quận Hoàn Kiếm",
  },
];
export const MockCommuneList = [
  {
    value: "00001",
    desc: "Phường Phúc Xá",
  },
  {
    value: "00004",
    desc: "Phường Trúc Bạch",
  },
  {
    value: "00006",
    desc: "Phường Vĩnh Phúc",
  },
];
export const MockSubMerchantList = [
  {
    merchant_id: 100862,
    merchant_biz_name: "Cơm gà",
    merchant_name: "Cơm gà 123",
    decs: "Cơm gà 123",
  },
  {
    merchant_id: 100821,
    merchant_biz_name: "Cơm gà",
    merchant_name: "Cơm gà Hội An",
    desc: "Cơm gà Hội An",
  },
  {
    merchant_id: 100820,
    merchant_biz_name: "Tocotoco",
    merchant_name: "Trà sữa Tocotoco",
    desc: "Trà sữa Tocotoco",
  },
  {
    merchant_id: 100763,
    merchant_biz_name: "Cơm thố ",
    merchant_name: "Cơm thố Bách Khoa",
    desc: "Trà sữa Tocotoco",
  },
  {
    merchant_id: 100661,
    merchant_biz_name: "SCTCHL2",
    merchant_name: "Sữa chua trân châu Hạ Long- CS2",
    desc: "Sữa chua trân châu Hạ Long- CS2",
  },
  {
    merchant_id: 100660,
    merchant_biz_name: "SCTCHl1",
    merchant_name: "Sữa chua trân châu Hạ Long CS1",
    desc: "Sữa chua trân châu Hạ Long CS1",
  },
];
export const MockMerchantProfile = {
  merchant_id: 100864,
  merchant_biz_name: "Merchant Test 15",
  merchant_code: "MC100864",
  merchant_name: "Merchant Test 15",
  is_master_merchant: 0,
  master_id: null,
  master_name: null,
  agent_phone: "0943222111",
  agent_email: "qcalbawvc@emltmp.com",
  agent_identity: "323443243",
  agent_name: "Huyền",
  company_type: "CTCP",
  business_type: 4899,
  business_type_name:
    "Cable and other pay television (previously Cable Services)",
  tax_code: null,
  address: "HN",
  created_date: "01/07/2020",
  website: null,
  creator_id: 24,
  creator_user: "HuyenPTT",
  creator_via: "MM",
  status: "active",
  status_name: "Active",
  additional_infomation: {
    staff_code: null,
    image_shop: [
      "http://35.223.25.100:8008/vtl-pg/mm/media/merchant/shop-image/4A817B1603B0BB00B6556EC207710E72-1.jpg",
    ],
    address: null,
    agent_identity_image: [
      "http://35.223.25.100:8008/vtl-pg/mm/media/merchant/agent/846C260D715E5B854FFAD5F70A516C88-front.jpg",
      "http://35.223.25.100:8008/vtl-pg/mm/media/merchant/agent/846C260D715E5B854FFAD5F70A516C88-behind.jpg",
    ],
    bsn_registration_cerfiticate:
      "http://35.223.25.100:8008/vtl-pg/mm/media/merchant/bsn-certificate/4A817B1603B0BB00B6556EC207710E72.jpg",
    agency_id: 100010,
    agency_name: "Đại lý phát triển Merchant Hoàng Cầu",
  },
  contract: {
    sign_date: null,
    expire_date: null,
    contract_image: null,
    contract_status: null,
    contract_status_name: null,
    service_status_name: null,
    service_status: null,
  },
  payment_info: {
    settlement_day_display: null,
    settlement_day: null,
    holder_name: null,
    pan: null,
    bank_bin: null,
    bank_name: null,
  },
  payment_method: [
    {
      method_id: 182,
      activated: 1,
    },
  ],
  province: {
    id: "08",
    name: "Tỉnh Tuyên Quang",
  },
  district: {
    id: "073",
    name: "Huyện Chiêm Hóa",
  },
  commune: {
    id: "02305",
    name: "Xã Trung Hà",
  },
};
export const MockAgencyDetail = {
  agency_id: 100141,
  agency_name: "nga",
  agency_biz_name: "nga",
  created_at: "22/05/2020",
  agent_name: "nga",
  agent_phone: "0372426878",
  status: "wait",
  status_name: "PendingApproval",
  agent_email: "lethingale@gmai.com",
  website: null,
  address: "keang nam",
  province: {
    id: "01",
    name: "Thành phố Hà Nội",
  },
  district: {
    id: "019",
    name: "Quận Nam Từ Liêm",
  },
  commune: {
    id: "00625",
    name: "Phường Mỹ Đình 1",
  },
  contract: {
    sign_date: "21/05/2020",
    expire_date: "21/05/2020",
    activated_date: null,
    contract_image: [
      {
        url:
          "http://35.223.25.100:8002/vtl-pg/mm/media/agency/contract/09169005F7EB059DD763D071A44A6DFA-0.pdf",
        name: "dummy1.pdf",
      },
      {
        url:
          "http://35.223.25.100:8002/vtl-pg/mm/media/agency/contract/09169005F7EB059DD763D071A44A6DFA-1.png",
        name: "dummy2.png",
      },
      {
        url:
          "http://35.223.25.100:8002/vtl-pg/mm/media/agency/contract/09169005F7EB059DD763D071A44A6DFA-2.pdf",
        name: "dumm3.pdf",
      },
    ],
    contract_status: 1,
    service_status: 1,
  },
  payment_info: {
    settlement_day_display: null,
    settlement_day: null,
    holder_name: null,
    pan: null,
    bank_bin: null,
    bank_name: null,
  },
};
export const MockReport20 = {
  error_message: "success",
  error_code: "00",
  created_date: "17/02/2021",
  from_date: "01/05/2020",
  to_date: "17/02/2021",
  culture: "vi",
  report_title: "CTT20",
  module: "AA",
  currency: "vnd",
  report: {
    table_header: [
      [
        "STT",
        "Tên ĐVCNTT",
        "Mã giao dịch",
        "Ngân hàng",
        "Chi nhánh",
        "Số tài khoản",
        "Số tiền",
        "Thời gian chuyển",
        "Trạng thái"
      ]
    ],
    table_data: [
      [
        "name",
        "VCB00001",
        "Vietcombank",
        "Chi nhánh Hoàng Cầu",
        "9704150001000101",
        "50,000,000.00",
        "17/10/2020 09:12",
        "Thành Công"
      ]
    ],
    table_footer: [
      "Tổng cộng",
      "",
      "",
      "",
      "",
      "50,000,000.00"
    ]
  }
}
