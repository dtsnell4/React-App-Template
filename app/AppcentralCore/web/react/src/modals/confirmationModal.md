# Confirmation Modal

The `confirmationModal` component is the standard confirm/cancel modal dialog. Place the component where you want the button to appear in the page.  

Put the icons and text inside the `<ConfirmationModal>` tags.  This will typically include an fa-icon with the `i-circle` class name and Bootstrap color class name.  The optional parameters include a header, hiding the cancel button, button colors and labels, cancel function, and button icons.

```
	<ConfirmationModal 
      buttonColor="info" 
      okColor="primary" 
      buttonLabel="Show modal"
      header="Confirmation"
      ok={() => { console.log('ok') }} 
      cancel={() => { console.log('cancel'); }}
    >
      	<div className="text-center">
	        <div className="i-circle danger"><i className="fa fa-trash"></i></div>
	        <h4><strong>Are you sure you want to continue?</strong></h4>
	        <p>Another warning before proceding?</p>
      	</div>
    </ConfirmationModal>
```

### There is also the ability to make this button part of a Bootstrap Dropdown Menu by adding the `dropdown` parameter: 

```
	<UncontrolledDropdown inNavbar>
        <DropdownToggle size="sm" outline caret>More Info</DropdownToggle>
        <DropdownMenu>
	        <DropdownItem>Item 1</DropdownItem>
	        <DropdownItem>Item 2</DropdownItem>
			<ConfirmationModal dropdown buttonLabel="Delete" okColor="danger">
				<div className="text-center">
					<div className="i-circle danger"><i className="fa fa-trash"></i></div>
					<h4><strong>Are you sure you want to delete this?</strong></h4>
				</div>
			</ConfirmationModal>
        </DropdownMenu>
    </UncontrolledDropdown>
```