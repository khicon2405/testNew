export const RISK_TYPE = [
    {
        value: 1,
        desc: 'Giao dịch vượt giá trị cho phép'
    },
    {
        value: 2,
        desc: '1 người chuyển tiền cho nhiều người'
    },
    {
        value: 3,
        desc: 'Nhiều người chuyển cho 1 người'
    },
    {
        value: 4,
        desc: 'Rule phát hiện giao dịch đột biến'
    },
    {
        value: 5,
        desc: 'Tài khoản của khách hàng không giao dịch trên một năm, giao dịch trở lại mà không có lý do hợp lý'
    },
    {
        value: 6,
        desc: 'TK của KH không giao dịch đột nhiên nhận được một khoản chuyển tiền có giá trị lớn'
    },
    {
        value: 7,
        desc: 'Liên tục chuyển nhiều khoản tiền nhỏ trong một thời gian ngắn hoặc ngược lại'
    },
    {
        value: 8,
        desc: 'Phát hiện giao dịch đáng ngờ thấp gần giá trị báo cáo'
    },
    {
        value: 9,
        desc: 'Nhập OTP sai quá nhiều lần'
    }
];

export const RISK_METHODS = [
    {
        value: '0',
        desc: 'block',
    },
    {
        value: '1',
        desc: 'warning',
    },
];

export const RISK_STATUS = [
    {
        value: '0',
        desc: 'active',
    },
    {
        value: '1',
        desc: 'inactive',
    },
];
