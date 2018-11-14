# Paginator

The Paginator is used to break up large amounts of displayed data into smaller more managable pages.  It can be configured for different things like page sizes (items per page), length of the paginator and initial page size.

### Page Sizes

Page sizes are passed as an array of possible values.  The default values for page size are [5,10,20,50].  However, when the page configuration requires this to be different they can ge changed.  For example, on pages where the data is displayed in Bootstarp Cards at three per row, the default setting would leave an odd number of items on the last row. Therefore is is preferable to change the sizes to something divisible by three.  Adding `pagerValues={[6,12,24,48]}` to the Paginator component changes the values.

### Pager Pages

This integer determines how many "page buttons" are visible.  The default is 5.  This would make the pager appear as:

```	
	|<<|<|1|2|3|4|5|>|>>|
```

Setting this value to 3 results in: 

```
	|<<|<|1|2|3|>|>>|
``` 

### OnChangePage()

This is the function where you set the state with the current data for the displayed page.  For example if you created the function `handleOnChangePage()`, you would add it to the Paginator component as:

```
	<Paginator onChangePage={handleOnChangePage()}
```

And in your container you would heva the function

```
	handleOnChangePage(pageOfItems) {
    	this.setState({ pageOfItems });
	}
```