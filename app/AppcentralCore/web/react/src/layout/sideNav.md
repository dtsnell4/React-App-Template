# Sidebar

The sideNav component is the common component shared by all apps to create the dark side menu.  It will be rare that anyone needs to update this component, but here is how it works.

### Menu Layout Object

The `react-router-dom` npm package is required for the sideNav for routing.  The menu items are created in the project's `/components/main.js` file, in an object called "sidenavOptions".  An example of this object is as follows:

```
  const sidenavOptions = [
    {
      key: 0, route: `/${appName}/pageone`, icon: 'file-text', name: 'Page One',
    },
    {
      key: 1,
      route: `/${appName}/pagetwo`,
      icon: 'file-text-o',
      name: 'Sub Menu Items',
      subOptions: [
        {
          key: 0, route: null, name: 'A Nice Header',
        },
        {
          key: 1, route: 'pagetwoa', name: 'Page Two A',
        },
        {
          key: 2, route: 'pagetwob', name: 'Page Two B',
        },
      ],
    },
  ];
```