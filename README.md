# hrnet-modal-component:

modal component for hr-net

## installation : 

using npm : 

``npm install @eiks-exe/hrnet-modal-component@0.2.0``

via package.json:

``"@eiks-exe/hrnet-modal-component": "0.2.0"``

add the component in your project : 

```javascript
    <Modal content='Employee Created
                ' isOpen={isOpen} 
                onClick={() => { setIsOpen(false) }} 
    >
    </Modal>
```
## properties :

`content`: set the content of the modal

`isOpen`: verify the the state of the modal (opened or closed)

`onClick`: take a function that launches when the user click on a close or return button