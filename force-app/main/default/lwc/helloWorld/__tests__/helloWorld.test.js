import { createElement } from 'lwc';
import Hello from 'c/helloWorld';
describe('c-hello', () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });
   it('displays greeting', () => {
        // Create element
        const element = createElement('c-hello-world', {
            is: Hello
        });
        document.body.appendChild(element);
        // Verify displayed greeting
        const div = element.shadowRoot.querySelector('p');
        expect(div.textContent).toBe('Lightning Web Component');
    });
});
