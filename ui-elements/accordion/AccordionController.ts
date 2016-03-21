/**
 * Controller for toggeling the state active on the accordion handle
 * 
 * @class AccordionController
 * @extends {Controller}
 */
export class AccordionController {
    
    
    static OPEN_CLASS: string = 'active';
    
    constructor(element: Element) {
        super(element);
        
        let handles = this.$('.accordion__handle');
        
        for (let i = 0; i < handles.length; i++) {
            let handle: Element = handles[i];
            
            handle.addEventListener('click', (event: Event) => this.toggle(handle, event));
        }
    }
    
    toggle(handle: Element, event?: Event) {
        handle.classList.toggle(AccordionController.OPEN_CLASS);
    }
}