import { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as actions from '../../store/Providers/action';
import  ProviderItem  from "./ProviderItem";
class Provider extends Component{
    componentDidMount =()=>{
        this.props.actions.GetAllProviders()
    }
    renderServiceList =()=>{
        let retuData = [];
        retuData= this.props.providerList.map((row,index)=>(
            <ProviderItem key={index} 
                id={row.attributes.id}
                src={row.attributes['card-image']}
              title={row.attributes.name}
              subSpecialties={row.attributes.subspecialties.join(', ')}
                />
        ))
        return retuData;
    }
    resetFilterData =()=>{
        this.props.actions.resetFilterData();
    }
    render(){
        console.log('providerList',this.props.providerList);
        return(
            <div className="providerContainer">
                
                {this.props.selectedItem !='' && <a href="#" className="resetLink" onClick={()=>this.resetFilterData()} >Reset Filter</a>}
                {this.props.providerList.length >0 || this.props.selectedItem !='' ? 
                <div className="providerlist">
                    {this.renderServiceList()}
                </div> :
                 <div className="loading">
                     <h2>Loading.......!</h2>
                     </div>
                }
            </div>
        )
    }
   
}

const mapStateToProps = ({ ProviderReducer }) => ({
    providerList: ProviderReducer.providerList,
    selectedItem : ProviderReducer.selectedItem
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Provider)
