import React from 'react';

class Switch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isIndividual: true // Default to 'Individual Buyer'
    };
  }

  toggleSwitch = () => {
    this.setState((prevState) => ({
      isIndividual: !prevState.isIndividual
    }));
  };

  render() {
    return (
      <div className="h-42 w-96 mx-auto flex flex-col items-center">
        <h2 className="text-lg font-semibold mb-4">Toggle to switch</h2>
        <div className="flex justify-around w-full">
          <button
            className={`bg-${this.state.isIndividual ? 'blue-500 text-white' : 'white text-gray-600'} w-72 text-center text-lg font-semibold cursor-pointer py-2 px-4 m-10 rounded-full border border-blue-500`}
            onClick={this.toggleSwitch}
          >
            Individual Buyer
          </button>
          <button
            className={`bg-${this.state.isIndividual ? 'white text-gray-600' : 'blue-500 text-white'} w-72 text-center text-lg font-semibold cursor-pointer py-2 px-4 m-10 rounded-full border border-gray-600`}
            onClick={this.toggleSwitch}
          >
            Business
          </button>
        </div>
      </div>
    );
  }
}

export default Switch;
