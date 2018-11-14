# Input

Creates a standard html `<input>` element, with the input type passed as a parameter.  This component creates all input types.

Most of the time the input will be in a form, and the form will be handled by `redux-form`.  In this case, the input will be wrapped in the redux-form `<Field>` component.  The field component will handle the input object automatically. It is implemented as follows, along with any additional properties for the input.

```
	<Field label="Input Label" className="form-control" name="Dan" component="input" type="text" />
```

## Select Inputs (Dropdowns)

Inputs of type `select` have unique properties that define the select dropdown options.  `options` is an object that contains the data for each option.

`option` defines what the properties of each item in `options` get mapped to in the resulting `<option>` html element.  In the "Input - Select (Dropdown)" example, `id` gets mapped to the unique key of the element, and value gets mapped to the value attribute, and text is the visisble text of the element.


```
	options = {[{id: 0,value: 'zero',text: 'Option 0'},{id: 1,value: 'one',text: 'Option 1'}]}
	option  = {{key: 'id',value: 'value',text: 'text'}}
```