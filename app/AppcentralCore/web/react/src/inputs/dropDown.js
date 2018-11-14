import React from 'react';

export default class DropDown extends React.Component {
  sportsData = [
    { Id: 'game1', Game: 'Badminton' },
    { Id: 'game2', Game: 'Football' },
    { Id: 'game3', Game: 'Tennis' },
  ];
  fields = { text: 'Game', value: 'Id' };
  render() {
    return (
      <div className="col-2">
      </div>
    );
  }
}
