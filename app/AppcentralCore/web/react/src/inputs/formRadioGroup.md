# Radio Group

The Radio Group component is a number of radio buttons that are used simutaneously to select one option out of the group.  The component uses Reactstrap's `input` component with `type=radio`.

Most of the time the Radio Group will be in a form, and the form will be handled by `redux-form`.  In this case, the input will be wrapped in the redux-form `<Field>` component.  The field component will handle the input object automatically. It is implemented as follows, along with any additional properties for the input.

```
	<Field label="The Label" options={data} name="myName" component={FormRadioGroup} />

```
