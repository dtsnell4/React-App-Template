# On-Off Toggle Switch

formSwitch requires an `input` object with a minimum of two parameters, `value` and `name`.  `value` is a boolean that determines if the switch is in the on or off position.

Most of the time the switch will be in a form, and the form will be handled by `redux-form`.  In this case, the switch will be wrapped in the redux-form `<Field>` component.  The field component will handle the input object automatically. It is implemented as follows, along with any additional properties for the switch.

```
	<Field name="mySwitch" component={FormSwitch}></Field>
```

## Changing The Text Of The Switch

You can optionally change the text of the switch from "On/Off" to "Yes/No" by adding "yesnoswitch" as a class.
```
	className="yesnoswitch"
```