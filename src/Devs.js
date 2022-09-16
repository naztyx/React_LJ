import React from 'react';

class Devs extends React.Component {
    render() {
        console.log(this.props) //confirm if parent properties is visible in the child
        
        const {Name, Age, skill} = this.props

        return (
            <div className='dev'>
                <div>Name: {Name}</div> {/*prop 1 */}
                <div>Age: {Age}</div> {/*prop2 */}
                <div>Skill: {skill}</div> {/*prop 3 */}
            </div>
        )
    }
}

export default Devs; //export the new dev component
