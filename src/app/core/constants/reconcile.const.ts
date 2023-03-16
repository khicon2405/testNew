export const RECONCILE = {
  RECONCILE_CODE: [
    {
      value: "00",
      desc: "00-Trùng khớp",
    },
    {
      value: "30",
      desc: "30-Thừa MB",
    },
    {
      value: "03",
      desc: "03-Thừa đối tác (thừa BAV)",
    },
  ],
  RECONCILE_CODE_FINANCIAL_TRANS: [
    {
      value: "00",
      desc: "00-Trùng khớp",
    },
    {
      value: "03",
      desc: "03-Thừa đối tác (thừa BAV)",
    },
    {
      value: "10",
      desc: "10-Thừa MB (MB có/ITE thất bại)",
    },
    {
      value: "20",
      desc: "20-MB có/ ITE timeout",
    },
    {
      value: "30",
      desc: "30-Thừa MB",
    },
  ],
  RECONCILE_CODE_NON_FINANCIAL_TRANS: [
    {
      value: "00",
      desc: "00-Trùng khớp",
    },
    {
      value: "03",
      desc: "03-Thừa đối tác (thừa BAV)",
    },
    {
      value: "10",
      desc: "10-Thừa MB (MB có/ITE thất bại)",
    },
    {
      value: "20",
      desc: "20-MB có/ ITE timeout",
    },
    {
      value: "30",
      desc: "30-Thừa MB",
    },
  ],
  PAYGATE_TRANS_TYPE: [
    {
      value: "THANH_TOAN_THU_HO",
      desc: "Dich vu thu ho",
    },
    {
      value: "THANH_TOAN_CONG_THE_NGOAI_MB",
      desc: "Dich vu cong thanh toan bang the/ TK tai MB",
    },
    {
      value: "THANH_TOAN_CONG_THE_TRONG_MB",
      desc: "Dich vu cong thanh toan bang the / TK ngoai MB",
    },
  ],
  PAYGATE_TRANS_METHOD: [
    {
      value: "HUBALEPAY",
      desc: "Alepay",
    },
    {
      value: "HUBVNPQR",
      desc: "VNPAYQR",
    },
    {
      value: "HUBMBBATM",
      desc: "Nội địa MB",
    },
    {
      value: "HUBMBBOATM",
      desc: "HUBMBBOATM",
    },
    {
      value: "HUBBAVEWT",
      desc: "Ví MB",
    },
    {
      value: "HUBSTBVI",
      desc: "STB Visa",
    },
    {
      value: "HUBSTBMC",
      desc: "STB Master Card",
    },
    {
      value: "HUBSTBAX",
      desc: "STB Amex",
    },
    {
      value: "HUBSTBJC",
      desc: "STB JCB",
    },
  ],
  NON_FINANCIAL_TRANS_TYPE: [
    {
      value: "MO_TAI_KHOAN",
      desc: "Dang ky mo moi TK dien tu",
    },
    {
      value: "LIEN_KET_TRONG_MB",
      desc: "Lien ket the MB",
    },
    {
      value: "LIEN_KET_NGOAI_MB",
      desc: "Lien ket the Ngan hang ngoai MB",
    },
    {
      value: "HUY_LK_THE_TRONG_MB",
      desc: "Huy lien ket the MB",
    },

    {
      value: "HUY_LK_THE_NGOAI_MB",
      desc: "Huy lien ket the Ngan hang ngoai MB",
    },
  ],
  WALLET_TRANS_TYPE: [
    {
      value: "CASHIN_MB",
      desc: "Cashin_MB",
    },
    {
      value: "CASHIN",
      desc: "Cashin",
    },
    {
      value: "CASHOUT_MB",
      desc: "Cashout_MB",
    },
    {
      value: "CASHOUT",
      desc: "Cashout",
    },
    {
      value: "CK_MB",
      desc: "Chuyen khoan ve tai khoan MB",
    },
    {
      value: "CK",
      desc: "Chuyen khoan ve tai khoan ngoai MB",
    },
  ],
  RECONCILE_REPORT_TYPE: [
    {
      value: "MO_TAI_KHOAN",
      desc: "Dang ky mo moi TK dien tu",
    },
    {
      value: "LIEN_KET_TRONG_MB",
      desc: "Lien ket the MB",
    },
    {
      value: "LIEN_KET_NGOAI_MB",
      desc: "Lien ket the Ngan hang ngoai MB",
    },
    {
      value: "HUY_LK_THE_TRONG_MB",
      desc: "Huy lien ket the MB",
    },
    {
      value: "HUY_LK_THE_NGOAI_MB",
      desc: "Huy lien ket the Ngan hang ngoai MB",
    },
    {
      value: "CASHIN_MB",
      desc: "Cashin_MB",
    },
    {
      value: "CASHIN",
      desc: "Cashin",
    },
    {
      value: "CASHOUT_MB",
      desc: "Cashout_MB",
    },
    {
      value: "CASHOUT",
      desc: "Cashout",
    },
    {
      value: "CK_MB",
      desc: "Chuyen khoan ve tai khoan MB",
    },
    {
      value: "CK",
      desc: "Chuyen khoan ve tai khoan ngoai MB",
    },
    {
      value: "THANH_TOAN_THU_HO",
      desc: "Thanh toan dich vu",
    },
    {
      value: "15",
      desc: "Dich vu thu ho",
    },
    {
      value: "THANH_TOAN_CONG_THE_TRONG_MB",
      desc: "Dich vu CTT bang the/ TK tai MB",
    },
    {
      value: "THANH_TOAN_CONG_THE_NGOAI_MB",
      desc: "Dich vu CTT bang the / TK ngoai MB",
    },
  ],
  NON_FINANCIAL_PAYMENT_METHODS: [
    {
      value: "HUBMBBATM",
      desc: "Nội địa MB",
    },
    {
      value: "HUBBAVEWT",
      desc: "Ví MB",
    },
  ],
  PAYGATE_TRANS_PAYMENT_METHODS: [
    {
      value: "HUBALEPAY",
      desc: "Alepay",
    },
    {
      value: "HUBVNPQR",
      desc: "VNPAYQR",
    },
    {
      value: "HUBMBBATM",
      desc: "Nội địa MB",
    },
    {
      value: "HUBMBBOATM",
      desc: "HUBMBBOATM",
    },
    {
      value: "HUBBAVEWT",
      desc: "Ví MB",
    },
    {
      value: "HUBSTBVI",
      desc: "STB Visa",
    },
    {
      value: "HUBSTBMC",
      desc: "STB Master Card",
    },
    {
      value: "HUBSTBAX",
      desc: "STB Amex",
    },
    {
      value: "HUBSTBJC",
      desc: "STB JCB",
    },
  ],
  TRADING_CHANNEL: [
    {
      value: "MOBILEAPP",
      desc: "MOBILEAPP",
    },
    {
      value: "WEBAPI",
      desc: "WEBAPI",
    },
    {
      value: "3750337",
      desc: "3750337",
    },
    {
      value: "3720101",
      desc: "3720101",
    },
    {
      value: "MOBILECA",
      desc: "MOBILECA",
    },
    {
      value: "3780493",
      desc: "3780493",
    },
    {
      value: "3720103",
      desc: "3720103",
    },
    {
      value: "3720109",
      desc: "3720109",
    },
    {
      value: "MREDMPTION",
      desc: "MREDMPTION",
    },
    {
      value: "BAV02579",
      desc: "BAV02579",
    },
    {
      value: "3750385",
      desc: "3750385",
    },
    {
      value: "BAVBCC",
      desc: "BAVBCC",
    },
    {
      value: "3750085",
      desc: "3750085",
    },
    {
      value: "3780030",
      desc: "3780030",
    },
    {
      value: "3780306",
      desc: "3780306",
    },
    {
      value: "1110056",
      desc: "1110056",
    },
    {
      value: "3750456",
      desc: "3750456",
    },
    {
      value: "3780003",
      desc: "3780003",
    },
    {
      value: "3780369",
      desc: "3780369",
    },
    {
      value: "3750702",
      desc: "3750702",
    },
    {
      value: "3780108",
      desc: "3780108",
    },
    {
      value: "3780070",
      desc: "3780070",
    },
    {
      value: "3750727",
      desc: "3750727",
    },
    {
      value: "3750285",
      desc: "3750285",
    },
    {
      value: "3780285",
      desc: "3780285",
    },
    {
      value: "3780601",
      desc: "3780601",
    },
    {
      value: "3780308",
      desc: "3780308",
    },
    {
      value: "3780403",
      desc: "3780403",
    },
    {
      value: "3750006",
      desc: "3750006",
    },
    {
      value: "3780041",
      desc: "3780041",
    },
    {
      value: "3760284",
      desc: "3760284",
    },
    {
      value: "3760324",
      desc: "3760324",
    },
    {
      value: "3780020",
      desc: "3780020",
    },
    {
      value: "3720106",
      desc: "3720106",
    },
    {
      value: "3720102",
      desc: "3720102",
    },
    {
      value: "3760078",
      desc: "3760078",
    },
    {
      value: "3750203",
      desc: "3750203",
    },
    {
      value: "3750349",
      desc: "3750349",
    },
    {
      value: "3780164",
      desc: "3780164",
    },
    {
      value: "3760125",
      desc: "3760125",
    },
    {
      value: "3780247",
      desc: "3780247",
    },
    {
      value: "3780087",
      desc: "3780087",
    },
    {
      value: "3750323",
      desc: "3750323",
    },
    {
      value: "3750063",
      desc: "3750063",
    },
    {
      value: "3780157",
      desc: "3780157",
    },
    {
      value: "3750410",
      desc: "3750410",
    },
    {
      value: "3750798",
      desc: "3750798",
    },
    {
      value: "3780552",
      desc: "3780552",
    },
    {
      value: "3780175",
      desc: "3780175",
    },
    {
      value: "3780138",
      desc: "3780138",
    },
    {
      value: "3780298",
      desc: "3780298",
    },
    {
      value: "3760282",
      desc: "3760282",
    },
    {
      value: "3750226",
      desc: "3750226",
    },
    {
      value: "3780104",
      desc: "3780104",
    },
  ],
  STATUS_TRANS: [
    {
      value: "00",
      desc: "Thành công",
    },
    {
      value: "01",
      desc: "Đang chờ thanh toán",
    },
    {
      value: "02",
      desc: "Đã bị hủy",
    },
    {
      value: "03",
      desc: "Thất bại",
    },
    {
      value: "04",
      desc: "Đang chời xác thực OTP",
    },
  ],
  STATUS_REFUND: [
    {
      value: "00",
      desc: "Thành công",
    },
    {
      value: "01",
      desc: "CTT đã ghi nhận",
    },
    {
      value: "02",
      desc: "Đã gửi yêu cầu cho TCPH",
    },
    {
      value: "03",
      desc: "Không thành công tại TCPH",
    },
    {
      value: "04",
      desc: "TCPH đã ghi nhận",
    },
    {
      value: "05",
      desc: "Không xác định",
    },
    {
      value: "06",
      desc: "Không thành công tại CTT",
    },
  ],
  REFUND_METHODS: [
    {
      value: "Merchant",
      desc: "Hoàn trả qua API",
    },
    {
      value: "MA",
      desc: "Hoàn trả trên MA",
    },
  ],
};
