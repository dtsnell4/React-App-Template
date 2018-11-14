# Color Picker

This Color picker is used to limit the user to a predefined set of colors, as opposed to the browser's default color picker wich will allow any color to be selected.

Most of the time the color picker will be in a form, and the form will be handled by `redux-form`.  In this case, the input will be wrapped in the redux-form `<Field>` component.  The field component will handle the input object automatically. It is implemented as follows, along with any additional properties for the input.

```
	<Field 
		name="color"
		label="Select a Color" 
		colors={['#0066ff', '#00ffff', '#339933', '#ff66ff', '#ff3300', '#6600cc', '#663300', '#000066', '#ff6666']} 
		component={FormColorPicker} />
```

## TODO:
Move the styles into scss files where they belong. 