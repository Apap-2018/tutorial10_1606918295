import React from 'react';
import { Loading } from '../components/Loading';
import { FormUpdatePasien } from '../containers/FormUpdatePasien';
import { Appointment } from '../utils/Appointment';

export class UpdatePasien extends React.Component {
 /** 
  * TODO: Akses method getDetailPasien(idPasien) pada Appointment dan lakukan update state. 
  * TODO: Lakukan pemanggilan pada constructor() atau pada lifecycle componentDidMount()
  */

 constructor(props) {
  super(props)
  this.state = {
   loading: true,
   pasien: 
   Appointment.getDetailPasien(this.props.match.params.id).then(response => {
    if(response.status === 200){
     this.setState({
      loading: false,
      pasien: response.result
    })
    } else {
     alert('Data tidak ditemukan')
     this.props.history.push('/all-pasien')
    }

   })

   ,
  }
  this.handleFormSubmit = this.handleFormSubmit.bind(this)
 }

 handleFormSubmit(e) {
  e.preventDefault()
  this.setState({
   loading:true
  })

  const data = new FormData(e.target)
  const dataJson = {}

  data.forEach((val, key) => {
   if (val !== "") {
   let name = key.split('.');
   if (name.length > 1){
    let last = name.pop()
    name.reduce((prev, next) => {
     return prev[next] = prev[next] || {};
    }, dataJson)[last] = val
   } else{
    dataJson[key] = val
   }
   }
  })

  Appointment.updateStatusPasien(dataJson).then(response => {
   if (response.status === 200){
    this.setState({
     loading: false,
     pasien: response.result
    })
    alert(`Sukses update pasien ${this.state.pasien.nama}`)
   }else{
   this.setState({
    loading: false,
    pasien: response.result
   })
   alert(`Gagal update pasien ${this.state.pasien.nama}`)
   }
  })


  /** 
   * TODO: Akses method updateStatusPasien(requestBody) pada Appointment dan lakukan update state. 
   */
 }

 render() {
  if (this.state.loading) {
   return (
    <Loading msg="Fetching Data..." />
   )
  } else {
   return (
    <FormUpdatePasien pasien={this.state.pasien} onSubmit={this.handleFormSubmit} />
   )
  }
 }
}