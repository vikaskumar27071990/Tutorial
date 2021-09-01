import { LightningElement, api, createElement } from 'lwc';

export default class Renderer extends LightningElement {
    _componentName;

    @api get componentName() {
        this._componentName;
    }

    set componentName(value) {
        this._componentName = value;
        this.renderContent();
    }

    _componentClass;

    @api get componentClass() {
        this._componentClass;
    }

    set componentClass(value) {
        this._componentClass = value;
        this.renderContent();
    }

    renderContent() {
        if (!this._componentClass || !this._componentName) return;

        const element = createElement(
            this._componentName, 
            { is: this._componentClass }
        );

        element.name = 'not default';

        document.body.appendChild(element);
    }
}
