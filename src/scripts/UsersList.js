import React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';

/**
    * component for displaying list of all users.
    * fetching the data from localstorage and displaying them using the Grid of Kendo UI Grid library. 
    * @param {object} props -  react properties.
    * importing data from local storage and setting it into the initial state.

*/

class UserList extends React.Component {
    constructor(props) {
        super(props);   
        var userData = [];
        userData.push(JSON.parse(localStorage.getItem('session')));
        this.state = {
        	myuserData : userData
        }
    }
    /**
        * render
        * @return {ReactElement} markup
        * view of Grid having relevant data.
    */
    render() {
        return (
            <div style={{padding : "120px"}}>
                <Grid
                    style={{ maxHeight: '400px' }}
                    data={this.state.myuserData[0]}
                >
                    <Column field="fname" title="First Name"   />
                    <Column field="lname" title="Last Name"  />
                    <Column field="email" title="Email Address"  />
                    <Column field="country" title="Country"  />
                    <Column field="region" title="Region"  />
                    <Column field="hobbies" title="Hobbies" />

                </Grid>
            </div>
        );
    }
}

export default UserList;

