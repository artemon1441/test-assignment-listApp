import React, { Component } from 'react';
import {Button} from './button'

interface userData{
  id: string
  name: string
  userName: string
  email: string
  street: any
  city: any
  zip: any
  phone: any
  website: any
  setShow: any
  sendHandler: any
  comment: string
}

    export var newData:any

    
    export default class fullCard extends Component<userData, any> {
      
      constructor(props: userData){
        super(props);
    this.state = {
      name: props.name,
      userName: props.userName,
      email: props.email,
      street: props.street,
      city:props.city,
      zip: props.zip,
      phone: props.phone,
      website: props.website,
      comment: props.comment ? props.comment : "",
      read: true,
      id: props.id
    };


      this.handleChange = this.handleChange.bind(this)
      this.send = this.send.bind(this)
      this.changeReadOnly = this.changeReadOnly.bind(this)
      }


      handleChange(event:any) {
        this.setState({disableSend: false})
        if(event.target.id === 'name'){
          if(event.target.value === ''){console.log(event); this.setState({disableSend: true}); event.target.setAttribute('redborder', 'true')} else {event.target.removeAttribute('redborder')}
          this.setState({name: event.target.value});
        } else if(event.target.id === 'userName'){
          if(event.target.value === ''){console.log(event); this.setState({disableSend: true}); event.target.setAttribute('redborder', 'true')} else {event.target.removeAttribute('redborder')}
          this.setState({userName: event.target.value});
        } else if(event.target.id === 'email'){
          if(event.target.value === ''){console.log(event); this.setState({disableSend: true}); event.target.setAttribute('redborder', 'true')} else {event.target.removeAttribute('redborder')}
          this.setState({email: event.target.value});
        } else if(event.target.id === 'street'){
          if(event.target.value === ''){console.log(event); this.setState({disableSend: true}); event.target.setAttribute('redborder', 'true')} else {event.target.removeAttribute('redborder')}
          this.setState({street: event.target.value});
        } else if(event.target.id === 'city'){
          if(event.target.value === ''){console.log(event); this.setState({disableSend: true}); event.target.setAttribute('redborder', 'true')} else {event.target.removeAttribute('redborder')}
          this.setState({city: event.target.value});
        } else if(event.target.id === 'zip'){
          if(event.target.value === ''){console.log(event); this.setState({disableSend: true}); event.target.setAttribute('redborder', 'true')} else {event.target.removeAttribute('redborder')}
          this.setState({zip: event.target.value});
        } else if(event.target.id === 'phone'){
          if(event.target.value === ''){console.log(event); this.setState({disableSend: true}); event.target.setAttribute('redborder', 'true')} else {event.target.removeAttribute('redborder')}
          this.setState({phone: event.target.value});
        } else if(event.target.id === 'website'){
          if(event.target.value === ''){console.log(event); this.setState({disableSend: true}); event.target.setAttribute('redborder', 'true')} else {event.target.removeAttribute('redborder')}
          this.setState({website: event.target.value});
        } else if(event.target.id === 'comment'){
          this.setState({comment: event.target.value});
        }
      }

      send(){
        newData = this.state
        this.props.setShow(false)
        this.props.sendHandler()
      }

      changeReadOnly(){
        this.setState({read: false})
      }



      render() {
        return(
          <div className='fullCard'>
            <div className="cardHeader">
            <Button
              color= '#4B51EF'
              name='Редактировать'
              click={this.changeReadOnly}
              disable={false}
            />
            </div>
          <form action="">
            <p>Name</p>
            <input type="text" id='name' placeholder='Иван Иванов' value={this.state.name} readOnly={this.state.read} onChange={this.handleChange} />
            <p>User name</p>
            <input type="text" placeholder='Ivan' id='userName' value={this.state.userName} readOnly={this.state.read} onChange={this.handleChange}/>
            <p>E-mail</p>
            <input type="text" placeholder='example@email.com' id='email' value={this.state.email} readOnly={this.state.read} onChange={this.handleChange}/>
            <p>Street</p>
            <input type="text" placeholder='Ул. Пример' id='street' value={this.state.street} readOnly={this.state.read} onChange={this.handleChange}/>
            <p>City</p>
            <input type="text" placeholder='Москва' id='city' value={this.state.city} readOnly={this.state.read} onChange={this.handleChange}/>
            <p>Zip code</p>
            <input type="text" placeholder='1234234' id='zip' value={this.state.zip} readOnly={this.state.read} onChange={this.handleChange}/>
            <p>Phone</p>
            <input type="text" placeholder='88005553535' id='phone' value={this.state.phone} readOnly={this.state.read} onChange={this.handleChange}/>
            <p>Website</p>
            <input type="text" placeholder='www.example.com' id='website' value={this.state.website} readOnly={this.state.read} onChange={this.handleChange}/>
            <p>Comment</p>
            <input type="text" placeholder='www.example.com' id='comment' value={this.state.comment} readOnly={this.state.read} onChange={this.handleChange}/>
            </form>
            <Button
              color = '#52CF4F'
              name='Отправить'
              click={this.send}
              disable={this.state.disableSend}
            />
        </div>
        )
      }
    }
    
    








