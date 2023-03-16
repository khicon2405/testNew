export class SpecialKeyCheck {
    public static checkKeys(e) {
        return (
            // Allow: 8-Backspace, 9-Tab, 13-Enter, 27-Esc
            [8, 9, 13, 27].indexOf(e.keyCode) !== -1 ||
            // Allow: Ctrl+A
            (e.keyCode === 65 && e.ctrlKey === true) ||
            // Allow: Ctrl+C
            (e.keyCode === 67 && e.ctrlKey === true) ||
            // Allow: Ctrl+V
            (e.keyCode === 86 && e.ctrlKey === true) ||
            // Allow: Ctrl+X
            (e.keyCode === 88 && e.ctrlKey === true)
        )
    }
}