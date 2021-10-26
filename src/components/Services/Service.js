import { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as actions from '../../store/Services/action';
import * as pactions from '../../store/Providers/action';
import  ServiceItem  from "./ServiceItem";
class Services extends Component{
    componentDidMount =()=>{
        this.props.actions.GetAllServices()
    }
    onServiceItemClickHandler = (name)=>{
        this.props.pactions.getServiceItemProviders(name);
    }
    renderServiceList =()=>{
        let retuData = [];
        retuData= this.props.servicesList.map((row,index)=>(
            <ServiceItem key={index} 
            id={row.id} 
            name={row.attributes.name} 
            selectedItem = {this.props.selectedItem}
            ServiceClickHandler = {this.onServiceItemClickHandler}
            />
        ))
        return retuData;
    }
    render(){
        console.log('servicesList',this.props.servicesList);
        return(
            <div className="ServicesContainer">
                <h3 className="leftContainerHeading">Services</h3>
                {this.props.servicesList.length >0 ?
                <ul className="serviceUL">
                    {this.renderServiceList()}
                </ul>
                : 
                <div className="loading">
                     <h2>Loading.......!</h2>
                    </div>
                }
            </div>
        )
    }
   
}

const mapStateToProps = ({ ServicesReducer,ProviderReducer }) => ({
    servicesList: ServicesReducer.servicesList,
    selectedItem : ProviderReducer.selectedItem
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch),
    pactions : bindActionCreators(pactions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Services)
