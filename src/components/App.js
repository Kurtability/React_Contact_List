import React from 'react';
import './App.css';
import Header from './Header'
import ContactList from './ContactList';
import background from '../images/bg.png'


function App() {
    const contacts = [
        {
            id:"1",
            name:"Leanne Graham",
            username:"Bret",
            email:"Sincere@april.biz",
            address: "Street: Kulas Light, " +
                "Suite: Apt. 556, " +
                "City: Gwenborough, " +
                "Zipcode: 92998-3874, " +
                "Geo-Lat: -37.3159, " +
                "Geo-Lng: 81.1496",
            phone: "1-770-736-8031 x56442",
            website: "hildegard.org",
            company_name: "Romaguera-Crona",
            company_catchphrase: "Multi-layered client-server neural-net",
            company_bs: "harness real-time e-markets"
        },{
            id:"2",
            name:"Ervin Howell",
            username:"Antonette",
            email:"Shanna@melissa.tv",
            address: "Street: Victor Plains, " +
                "Suite: Suite 879, " +
                "City: Wisokyburgh, " +
                "Zipcode: 90566-7771, " +
                "Geo-Lat: -43.9509, " +
                "Geo-Lng: -34.4618",
            phone: "010-692-6593 x09125",
            website: "anastasia.net",
            company_name: "Deckow-Crist",
            company_catchphrase:"Proactive didactic contingency",
            company_bs:"synergize scalable supply-chains"
        },{
            id:"3",
            name:"Clementine Bauch",
            username:"Samantha",
            email:"Nathan@yesenia.net",
            address: "Street: Douglas Extension, " +
                "Suite: Suite 847, " +
                "City: McKenziehaven, " +
                "Zipcode: 59590-4157, " +
                "Geo-Lat: -68.6102, " +
                "Geo-Lng: -47.0653",
            phone: "1-463-123-4447",
            website: "ramiro.info",
            company_name: "Romaguera-Jacobson",
            company_catchphrase:"Face to face bifurcated interface",
            company_bs:"e-enable strategic applications"
        },{
            id:"4",
            name:"Patricia Lebsack",
            username:"Karianne",
            email:"Julianne.OConner@kory.org",
            address: "Street: Hoeger Mall, " +
                "Suite: Apt. 692, " +
                "City: South Elvis, " +
                "Zipcode: 53919-4257, " +
                "Geo-Lat: 29.4572, " +
                "Geo-Lng: -164.2990",
            phone: "493-170-9623 x156",
            website: "kale.biz",
            company_name: "Robel-Corkery",
            company_catchphrase:"Multi-tiered zero tolerance productivity",
            company_bs:"transition cutting-edge web services"
        },{
            id:"5",
            name:"Chelsey Dietrich",
            username:"Kamren",
            email:"Lucio_Hettinger@annie.ca",
            address: "Street: Skiles Walks, " +
                "Suite: Suite 351, " +
                "City: Roscoeview, " +
                "Zipcode: 33263, " +
                "Geo-Lat: -31.8129, " +
                "Geo-Lng: 62.5342",
            phone: "(254)954-1289",
            website: "demarco.info",
            company_name: "Keebler LLC",
            company_catchphrase:"User-centric fault-tolerant solution",
            company_bs:"revolutionize end-to-end systems"
        },{
            id:"6",
            name:"Mrs. Dennis Schulist",
            username:"Leopoldo_Corkery",
            email:"Karley_Dach@jasper.info",
            address: "Street: Norberto Crossing, " +
                "Suite: Apt. 950, " +
                "City: South Christy, " +
                "Zipcode: 23505-1337, " +
                "Geo-Lat: -71.4197, " +
                "Geo-Lng: 71.7478",
            phone: "1-477-935-8478 x6430",
            website: "ola.org",
            company_name: "Considine-Lockman",
            company_catchphrase:"Synchronised bottom-line interface",
            company_bs:"e-enable innovative applications"
        },{
            id:"7",
            name:"Kurtis Weissnat",
            username:"Elwyn.Skiles",
            email:"Telly.Hoeger@billy.biz",
            address: "Street: Rex Trail, " +
                "Suite: Suite 280, " +
                "City: Howemouth, " +
                "Zipcode: 58804-1099, " +
                "Geo-Lat: 24.8918, " +
                "Geo-Lng: 21.8984",
            phone: "210.067.6132",
            website: "elvis.io",
            company_name: "Johns Group",
            company_catchphrase:"Configurable multimedia task-force",
            company_bs:"generate enterprise e-tailers"
        },{
            id:"8",
            name:"Nicholas Runolfsdottir V",
            username:"Maxime_Nienow",
            email:"Sherwood@rosamond.me",
            address: "Street: Ellsworth Summit, " +
                "Suite: Suite 729, " +
                "City: Aliyaview, " +
                "Zipcode: 45169, " +
                "Geo-Lat: -14.3990, " +
                "Geo-Lng: -120.7677",
            phone: "586.493.6943 x140",
            website: "jacynthe.com",
            company_name: "Abernathy Group",
            company_catchphrase:"Implemented secondary concept",
            company_bs:"e-enable extensible e-tailers"
        },{
            id:"9",
            name:"Glenna Reichert",
            username:"Delphine",
            email:"Chaim_McDermott@dana.io",
            address: "Street: Dayna Park, " +
                "Suite: Suite 449, " +
                "City: Bartholomebury, " +
                "Zipcode: 76495-3109, " +
                "Geo-Lat: 24.64630, " +
                "Geo-Lng: -168.8889",
            phone: "(775)976-6794 x41206",
            website: "conrad.com",
            company_name: "Yost and Sons",
            company_catchphrase:"Switchable contextually-based project",
            company_bs:"aggregate real-time technologies"
        },{
            id:"10",
            name:"Clementina DuBuque",
            username:"Moriah.Stanton",
            email:"Rey.Padberg@karina.biz",
            address: "Street: Kattie Turnpike, " +
                "Suite: Suite 198, " +
                "City: Lebsackbury, " +
                "Zipcode: 31428-2261, " +
                "Geo-Lat: -38.2386, " +
                "Geo-Lng: 57.2232",
            phone: "024-648-3804",
            website: "ambrose.net",
            company_name: "Hoeger LLC",
            company_catchphrase:"Centralized empowering task-force",
            company_bs:"target end-to-end models"
        }
    ]

  return (

      <div className="ui container">
        <Header />
          <img className="ui fluid image" src={background} alt="background"/>
        <ContactList contacts={contacts} />
          <img className="ui fluid image" src={background} alt="background"/>
      </div>
  )
}

export default App;
