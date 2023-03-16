import { of } from 'rxjs';

export const mockDialogRef = {
    close: jasmine.createSpy('close'),
    closeAll: jasmine.createSpy('closeAll'),
};
export class MatDialogMock {
    open() {
        return {
            componentInstance: {

            },
            afterClosed: () => {
                return of(true)
            }
        };
    }
    closeAll() { }
}