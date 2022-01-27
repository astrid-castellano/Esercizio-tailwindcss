import React from 'react';
import './Profile.css';


class Profile extends React.Component {
   
    render(){
        return(
            <div className="md:p-4 lg:p-16">
                <div id={this.props.id} className="shadow-2xl rounded-3xl cursor-pointer user h-96">
                    <img src={this.props.setUserImg} alt="" className="rounded-3xl hover:blur-sm h-96"/>
                </div>
            </div>
        );
    }

}
export default Profile;
  
  