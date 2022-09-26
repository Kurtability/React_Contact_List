import React from "react";

const ContactCard = (props) => {
    const {id, name, username, email, address, phone, website, company_name, company_catchphrase, company_bs} = props.contact;
    return (
        <div className= "ui relaxed link items">
            <div className="ui message"
                 style={{   fontSize: "1.2rem"}}>

                <div className="item" >
                    <div className="content">
                        <div className="header">
                            {name}
                        </div>
                        <h4>Company: {company_name}</h4>
                        <div className="meta" >
                            <div className="description"
                                 style={{ display: "flex", justifyContent: "space-between",  fontSize: "1.2rem"}}>
                                <h3 >
                                    id: {id}
                                </h3>
                                <div>
                                    Username: {username}
                                </div>
                                <div>
                                    Email: {email}
                                </div>
                            </div>
                        </div>
                        <div className="extra">
                            <div className="ui button" data-tooltip={address} data-position="top left">
                                Address
                            </div>
                            <div className="ui button" data-tooltip={phone} data-position="top left">
                                Phone Number
                            </div>
                            <div className="ui button" data-tooltip={website} data-position="top left">
                                Website
                            </div>
                            <div className="ui button" data-tooltip={company_bs} data-position="top left">
                                Company Bs
                            </div>
                            <div className="ui button" data-tooltip={company_catchphrase} data-position="top left">
                                Company CatchPhrase
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;
