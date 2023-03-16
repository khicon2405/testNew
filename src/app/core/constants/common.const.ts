export const Roles = {
  SUPERADMINISTRATOR: "SuperAdministrator",
  NORMAL: "Normal",
  ADMINISTRATOR: "Administrator",
};
export const CommonConstants = {
  URL_PATTERN: "https?://.+",
  EMAIL_PATTERN: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}",
  PHONE_PATTERN: "(09|\\+84|03[0-9])+([0-9]{7,10})",
  EMPTY_GUID: "00000000-0000-0000-0000-000000000000",
  YES: "Yes",
  NO: "No",
  NA: "Not Available",
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
  DATE_TIME_FORMAT: "dd MMM yyyy, hh:mm a",
  DATE_TIME_FORMAT_STANDARD: "dd MMM yyyy  h:mm a",
  DATE_TIME_FORMAT_FULL: "dd/MM/yyyy  hh:mm:ss",
  DATE_TIME_FORMAT_LIST: "dd/MM/yyyy  hh:mm",
  DATE_FORMAT: "dd/MM/yyyy",
  DATE_FORMAT_DATEPICKER: "DD/MM/YYYY",
  UAUC_INSIGHT_DATE_FORMAT_STANDARD: "d MMM yyyy",
  UAUC_INSIGHT_DATE_TIME_FORMAT_STANDARD: "d MMM yyyy HH:mm",
  DEFAULT_PAGE_SIZE: 10,
  DEFAULT_PAGE_SIZE_5: 5,
  DEFAULT_PAGE_INDEX: 1,
  DEFAULT_PAGE_SIZE_OPTION: [10, 25, 50, 100],
  VIETNAMESE_CURRENCY: "VNĐ",
  EXPIRE_TIME_CONFIG_IN_MINUTES: 180,
  ACCOUNT_ACTIVE_STATUS_CONST: "1004",
  ACCOUNT_LOCKED_STATUS_CONST: "1005",
  MAX_FILE_SIZE: 2097152,
};
export const CommonErrorCode = {
  REQUIRED: "error.require",
  EMAIL_PATTERN: "error.email-pattern",
  PHONE_PATTERN: "error.phone-pattern",
  NOT_FORMATTED: "error.not-formatted",
  MINLENGTH_6: "error.minlength-6",
  MAXLENGTH: "error.maxlength",
  INVALID_FORMAT: "error.invalid-format",
  HAS_SPECIAL: "error.special-characters",
  INVALID_FORMAT_IP: "error.invalid-format-ip",
  NOT_MATCH: "error.not_match",
};
export const formRules = {
  fullName:
    '^[^\\s|\\~|\\!|\\@|\\#|\\$|\\%|\\^|\\&|\\*|\\(|\\)|\\+|\\=|\\[|\\{|\\]|\\}|\\||\\\\|\\<|\\,|\\.|\\>|\\?|\\/|\\""|\\;|\\:]+(\\s{1}[^\\s|\\~|\\!|\\@|\\#|\\$|\\%|\\^|\\&|\\*|\\(|\\)|\\+|\\=|\\[|\\{|\\]|\\}|\\||\\\\|\\<|\\,|\\.|\\>|\\?|\\/|\\""|\\;|\\:]+)*$',
  nonEmpty: "[a-zA-Z0-9]+([]?[a-zA-Z0-9])*$",
  usernameMin: 4,
  passwordMin: 6,
  phone: "(09|\\+84|03[0-9])+([0-9]{7,10})",
};
export const langSettings = [
  {
    lang_code: "vi",
    lang_name: "TIẾNG VIỆT",
    flag: "assets/images/flag/Vietnam.png",
  },
  {
    lang_code: "en",
    lang_name: "ENGLISH",
    flag: "assets/images/flag/United-Kingdom.png",
  },
];
export const PHONE_REGEX =
  /^(([+]84|0|84)(24|28)(\d{8})|([+]84|0|84)(296|216|211|270|207|294|273|234|237|208|227|276|212|299|233|203|255|235|232|257|210|259|238|229|228|272|214|205|263|213|260|297|258|221|218|293|225|220|239|226|219|269|277|251|215|261|262|236|206|292|290|252|271|274|256|275|222|291|204|209|254)(\d{7})|([+]84|0|84)(86|96|97|98|32|33|34|35|36|37|38|39|89|90|93|70|79|77|76|78|88|91|94|83|84|85|81|82|92|56|58)(\d{7}))$/;
export const EMAIL_REGEX = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
export const DATE_CONFIG = {
  dateInputFormat: "DD/MM/YYYY",
  isAnimated: true,
  customTodayClass: "custom-today-class",
  showWeekNumbers: false,
};
export const ACCOUNT_NUMBER = /^([0-9]|711A)[0-9]*$/;
export const IP_REGEX =
  /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;
export const BANK_NUMBER =
  /(^(9704|62|81|3528|3529|51|52|53|54|55|4|34|37)[0-9]*$)|(^35[3-8][0-9]*$)/;
export const USERNAME_REGEX = /^[A-Za-z0-9_.\-@]*$/;
export const URL =
  /^http(s)?:\/\/[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

export const LANGS = [
  { value: "vi", desc: "Vietnamese" },
  { value: "en", desc: "English" },
];

export const SESSION_TIME = 30; // phút

export const MERCHANT_STATUS = [
  { value: "active", desc: "Active" },
  { value: "locked", desc: "Inactive" },
  { value: "wait", desc: "PendingApproval" },
  { value: "reject", desc: "Rejected" },
];

export const SIGNATURE_KEY = "2E1C395C942D3B250955590F2167186F";
export const LOGIN_PASSWORD_HASHTAG = "BD92B044F961C09164CD1F6B7837992E";
export const BROWSER_INFO = {
  LOCATION: {
    LONG: "location.long",
    LAT: " location.lat",
  },
  OS: {
    NAME: "os.name",
    VERSION: "os.version",
  },
  BROWSER: {
    NAME: "browser.name",
    VERSION: "browser.version",
  },
  IP_ADD: "ip",
};
export const DefaultAvatar = "/assets/images/default-user.png";
