# Filter

The `filterContainer` component is the standard off-screen filters tray for filtering data in AppCentral.  Place the component where you want the button to appear in the page.  The tray will automatically be hidden outside the left of the window, and clicking the button makes it slide into view.

Put your form elements etc. inside the `<FilterContainer>` tags as shown below.  The header, instruction text and Apply button should generally be kept as-is.

```
	<div className="buttonscontainer">
		<div className="right-buttons">
			<FilterContainer>
			    <h3>Filters</h3>
			    <p>Select from the filters below in order to refine your search and find related content.</p>
			    <h3>Pass your form html as children here.</h3>
			    <FormGroup>
			    	<Button color="primary" disabled={submitting} block outline>Apply</Button>
			    </FormGroup>
			</FilterContainer>  
		</div>
	</div>
```