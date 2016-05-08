# ng2-modal

Open modal window (dialog box) for your angular2 applications using bootstrap3.

## Installation

1. Install npm module:

`npm install ng2-modal --save`

2. If you are using system.js you may want to add this into `map` and `package` config:

```json
{
    "map": {
        "ng2-modal": "node_modules/ng2-modal"
    },
    "packages": {
        "ng2-modal": { "main": "index.js", "defaultExtension": "js" }
    }
}

## Usage

```typescript
<modal  title="Modal title"
        cancelButtonLabel="cancel"
        submitButtonLabel="submit"
        modalClass="modal-lg modal-sm any-other-css-class"
        [hideCloseButton]="true|false"
        [closeOnEscape]="true|false"
        [closeOnOutsideClick]="true|false"
        (onOpen)="actionOnOpen()"
        (onClose)="actionOnClose()"
        (onSubmit)="actionOnSubmit()">

    <modal-header>
        Modal header content goes there.
    </modal-header>

    <modal-content>
        Modal body content goes there.
    </modal-header>

    <modal-footer>
        Modal footer content goes there.
    </modal-footer>
        
</modal>
```

## Sample

```typescript
import {Component} from "@angular/core";
import {Modal} from "ng2-modal";

@Component({
    selector: "app",
    template: `
<div class="row">
    <button (click)="myModal.open()">open my modal</button>
    <modal #myModal>
        <modal-header>
            <h1>Modal header</h1>
        </modal-header>
        <modal-content>
            Hello Modal!
        </modal-content>
        <modal-footer>
            <button class="btn btn-primary" (click)="myModal.close()">close</button>
        </modal-footer>
    </modal>
</div>
    `,
    directives: [Modal]
})
export class App {

}
```

## More samples

```html
<!-- first modal: modal with custom header, content and footer -->
<div class="row">
    <button (click)="firstModal.open()">modal with custom header content and footer</button>
    <modal #firstModal>
        <modal-header>
            <h1>I am first modal</h1>
        </modal-header>
        <modal-content>
            This modal has its own header, content and footer.
        </modal-content>
        <modal-footer>
            <button class="btn btn-primary" (click)="firstModal.close()">okay!</button>
        </modal-footer>
    </modal>
</div>

<!-- second modal: disable close button -->
<div class="row">
    <button (click)="secondModal.open()">modal without close button</button>
    <modal #secondModal [hideCloseButton]="true">
        <modal-header>
            <h1>I am second modal</h1>
        </modal-header>
        <modal-content>
            This modal does not have close button.
        </modal-content>
        <modal-footer>
            <button class="btn btn-primary" (click)="secondModal.close()">okay!</button>
        </modal-footer>
    </modal>
</div>

<!-- third modal: disable close button -->
<div class="row">
    <button (click)="thirdModal.open()">modal that cannot be simply closed</button>
    <modal #thirdModal [closeOnEscape]="false" [closeOnOutsideClick]="false">
        <modal-header>
            <h1>I am third modal</h1>
        </modal-header>
        <modal-content>
            You cannot close this modal by pressing "ESC" button or clicking outside of the modal.
        </modal-content>
        <modal-footer>
            <button class="btn btn-primary" (click)="thirdModal.close()">okay!</button>
        </modal-footer>
    </modal>
</div>

<!-- forth modal: this modal has default title and cancle button -->
<div class="row">
    <button (click)="forthModal.open()">modal that has title and cancel button</button>
    <modal #forthModal title="I am forth modal" cancelButtonLabel="close it">
        <modal-content>
            You can simply use "title" attribute to provide a modal default header.<br/>
            Also you can add default cancel button by providing a label to it.
        </modal-content>
    </modal>
</div>

<!-- fifth modal: this modal uses extra "large class" -->
<div class="row">
    <button (click)="fifthModal.open()">large modal</button>
    <modal #fifthModal title="I am fifth modal" cancelButtonLabel="close it" modalClass="modal-lg">
        <modal-content>
            Very large modal.
        </modal-content>
    </modal>
</div>

<!-- sixth modal: this modal uses extra "small class" -->
<div class="row">
    <button (click)="sixthModal.open()">small modal</button>
    <modal #sixthModal title="I am sixth modal" cancelButtonLabel="close it" modalClass="modal-sm">
        <modal-content>
            Very small modal.
        </modal-content>
    </modal>
</div>

<!-- seventh modal: this modal can listen close event -->
<div class="row">
    <button (click)="seventhModal.open()">it opens first modal after you close it</button>
    <modal #seventhModal title="I am seventh modal" cancelButtonLabel="close it" (onClose)="firstModal.open()">
        <modal-content>
            Now try to close it and it will open you first modal.
        </modal-content>
    </modal>
</div>

<!-- eighth modal: this modal can listen close event -->
<div class="row">
    <button (click)="eighthModal.open()">it opens first modal right after you open it</button>
    <modal #eighthModal title="I am eighth modal" cancelButtonLabel="close it" (onOpen)="firstModal.open()">
        <modal-content>
            This modal opened first modal right after you opened it.
        </modal-content>
    </modal>
</div>

<!-- ninth modal: this modal can do something after you click submit button -->
<div class="row">
    <button (click)="ninthModal.open()">it opens first modal after you click submit button</button>
    <modal #ninthModal title="I am ninth modal" submitButtonLabel="submit" (onSubmit)="firstModal.open()">
        <modal-content>
            This modal has a submit button with your custom label. Also it can make an action after you
            click that submit button. Here it will open you first modal after you click submit.
        </modal-content>
    </modal>
</div>
```

Take a look on samples in [./sample](https://github.com/pleerock/ng2-modal/tree/master/sample) for more examples of
usages.
