import React from 'react'
import PlaceList from '../components/PlaceList'

const DUMMY_PLACES = [
     {
          id:'p1',
          title:'Fundacio Miro',
          description:'Museu amb una botiga guai',
          imageUrl:'https://aws-tiqets-cdn.imgix.net/images/content/a6f0a6e6d6e54bea96c6389057a70e22.jpg?auto=format&dpr=1&fit=crop&h=280&ixlib=python-3.2.1&q=40&w=280&s=4d0e8f88e121835fd347eef665a6963d',
          address:'Parc de Montjuïc, s/n, 08038 Barcelona',
          location:{
               lat:41.36884775467347,
               lng:2.1598509072395715
          },
          creator:'u1'
     },
     {
          id:'p2',
          title:'Caixa Forum',
          description:"Museu amb una botiga guai i sala d'actes",
          imageUrl:'https://aws-tiqets-cdn.imgix.net/images/content/a6f0a6e6d6e54bea96c6389057a70e22.jpg?auto=format&dpr=1&fit=crop&h=280&ixlib=python-3.2.1&q=40&w=280&s=4d0e8f88e121835fd347eef665a6963d',
          address:'Parc de Montjuic, s/n, 08038 Barcelona',
          location:{
               lat:41.36884775467347,
               lng:2.1598509072395715
          },
          creator:'u2'
     }
]

const UserPlaces = () => {
     return (
          <PlaceList items={DUMMY_PLACES}/>
     )
}

export default UserPlaces
