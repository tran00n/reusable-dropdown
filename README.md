# Getting Started with Create React App

Thank you for your time and giving me the opportunity to interview for the Hive. 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To view my project, you can run `npm start` to run the app in development mode and open http://localhost:3000 to see it in your browser. 

To add a custom dataset to the dropdown, declare a new dictionary value in App.jsx's constructor 

''
locations : [
                {
                  id: 0,
                  title: 'New York',
                  selected: 'false',
                  key:'locations'
                },
                {
                  id: 1,
                  title: 'Oslo',
                  selected: 'false',
                  key:'locations'
                },
                {
                  id: 2,
                  title: 'Istanbul',
                  selected: 'false',
                  key:'locations'
                }
              ],
''

in the same structure as above.

Ex.
''
fruit : [
                {
                  id: 0,
                  title: 'Apple',
                  selected: 'false',
                  key:'fruit'
                },
                {
                  id: 1,
                  title: 'Orange',
                  selected: 'false',
                  key:'fruit'
                },
                {
                  id: 2,
                  title: 'Grapes',
                  selected: 'false',
                  key:'fruit'
                }
]
''

 To utilize this data in the dropdown component, you can add another component to the render function in App.jsx, like this: 

''
<SingleSelectDropdown 
            header="Select Age" 
            list={this.state.age} 
            setSelected={this.setSelected}
            multipleSelect={false}
/>
''

Ex. 
''
<SingleSelectDropdown 
            header="Select Fruit" 
            list={this.state.fruit} 
            setSelected={this.setSelected}
            multipleSelect={false}
/>
''

To switch between a single selecting dropdown and a multi-selecting dropdown, set multipleSelect to true and setSelected to this.setMultipleSelected. 
Ex. 
''
<SingleSelectDropdown 
            header="Select fruit(s)" 
            list={this.state.fruit} 
            setMultipleSelected={this.setMultipleSelected}
            multipleSelect={true}
/>
''



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

