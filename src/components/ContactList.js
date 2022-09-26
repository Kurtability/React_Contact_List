import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    console.log(props);

    const renderContactList = props.contacts.map((contact) => {
        return (
            <div className="ui container">
                <ContactCard contact = {contact}/>
            </div>
        );
    })
    return (
        <div className="ui celled list">
            <div className="ui yellow message">
                <i className="star icon"/>
                To see additional details, please toggle your mouse to the according field in user profile :)
            </div>

            {renderContactList}
        </div>
    )
}

export default ContactList
