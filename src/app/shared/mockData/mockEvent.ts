export class MockEvent {
    public target: any;
    public keyCode: any
    stopPropagation() {
    }
    preventDefault() {

    }

    constructor() {
        return {
            target: {
                value: ''
            },
            keyCode: 0,
            stopPropagation() {
            },
            preventDefault() {

            }
        }
    }
}