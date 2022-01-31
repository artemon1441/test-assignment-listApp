import React, {useEffect, useState, MouseEventHandler} from 'react';
import './App.css';
import {UserCard} from './components/userCard'
import {Button} from './components/button'
import FullCard, {newData} from './components/fullCard';




function App() {

  const [dataList, setDataList] = useState([{name: 'Loading', address:{city:'Loadnig', zipcode:'Loading', street:'Loading'}, company:{name:'Loading'}, username:'Loading', phone:'Loading', email:'Loading', website:'Loading', comment:'Loading'}])
  const [show, setShow] = useState<boolean>(false)
  const [header, setHeader] = useState<string>('Список пользователей')
  const [chosenCard, setChosenCard] = useState()
  const [chosenCardId, setChosenCardId] = useState()
  
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data =>{
      setDataList(data)
    })
  },[])



  function listRender() {
    return dataList.map((e: any, i: number)=>{
      e.in = i
      return (
        <UserCard
        key = {i}
        name = {e.name}
        city = {e.address.city}
        company = {e.company.name}
        click = {()=> openCardHandler(e)}
        />
      )
    })
  }

  function sendHandler(e: any){
    setHeader('Список пользователей')
    console.log(newData);
    let id = newData.id
    dataList[id].name = newData.name
    dataList[id].username = newData.userName
    dataList[id].phone = newData.phone
    dataList[id].email = newData.email
    dataList[id].website = newData.website
    dataList[id].address.zipcode = newData.zip
    dataList[id].address.street = newData.street
    dataList[id].address.city = newData.city
    dataList[id].comment = newData.comment
  }

  function cardRender(chosenCard:any) {
    return(
      <FullCard
        id={chosenCard.in} 
        name={chosenCard.name}
        userName={chosenCard.username}
        email={chosenCard.email}
        street={chosenCard.address.street}
        city={chosenCard.address.city}
        zip={chosenCard.address.zipcode}
        phone={chosenCard.phone}
        website={chosenCard.website}
        setShow={setShow}
        sendHandler={sendHandler}
        comment={chosenCard.comment}
      />
    )
  }


  function openCardHandler(e: any) {
    setShow(true)
    setHeader('Профиль пользователя')
    setChosenCard(e)
  }

  function citySort(){
     var newDataList = dataList.sort(function(a: any, b: any){
      let nameA= a.address.city.toLowerCase(); let nameB= b.address.city.toLowerCase();

      if(nameA < nameB){
        return -1
      }
      if(nameA > nameB){
        return 1
      }
      return 0
    })
    let newarr = [...newDataList]
    setDataList(newarr)
  }
  
  function companySort(){
    var newDataList = dataList.sort(function(a: any, b: any){
      let nameA= a.company.name.toLowerCase(); let nameB= b.company.name.toLowerCase();

      if(nameA < nameB){
        return -1
      }
      if(nameA > nameB){
        return 1
      }
      return 0
    })
    let newarr = [...newDataList]
    setDataList(newarr)
  }

  return (
    <div className="App">
      <div className="container">
      <div className='navBar'>
        <p>Сортировка</p>
        <Button
          color= '#4B51EF'
          name='по городу'
          click={citySort}
          disable={false}
        />
        <Button
          color= '#4B51EF'
          name='по компании'
          click={companySort}
          disable={false}
        />
        </div>
          <div className="list">
          <p>{header}</p>
            {show ? cardRender(chosenCard) : listRender()}
          </div>
      </div>
      
    </div>
  );
}

export default App;
