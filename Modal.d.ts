import { EventEmitter } from "@angular/core";
export declare class Modal {
    modalClass: string;
    closeOnEscape: boolean;
    closeOnOutsideClick: boolean;
    title: string;
    hideCloseButton: boolean;
    cancelButtonLabel: string;
    submitButtonLabel: string;
    onOpen: EventEmitter<{}>;
    onClose: EventEmitter<{}>;
    onSubmit: EventEmitter<{}>;
    isOpened: boolean;
    private modalRoot;
    private backdropElement;
    constructor();
    ngOnDestroy(): void;
    open(...args: any[]): void;
    close(...args: any[]): void;
    private preventClosing(event);
    private createBackDrop();
}
