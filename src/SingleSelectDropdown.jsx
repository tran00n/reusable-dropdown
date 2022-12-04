import React, {Component} from 'react';


import './index.css';

class SingleSelectDropdown extends Component {
    constructor(props) {
        super(props);
        const { header, list, multipleSelect} = this.props;

        this.state = {
            isListOpen: false,
            header,
            list,
            multipleSelect,
            selectedItems: [ ],
            allSelected: false,
        }
    }

    closeDropdown = () => {
        this.setState({
            isListOpen: false,
        });
    }

    openDropdown = () => {
        this.setState({
            isListOpen: true,
        });
    }

    opencloseDropdown = () => {
        if (this.state.isListOpen) {
            this.closeDropdown();
        }
        else {
            this.openDropdown();
        }
    }

    getSelected = () => {
        var headerString = " ";
        if (this.state.selectedItems.length === 0) {
            return "Select Location";
        }
        this.state.selectedItems.forEach(element => {
            headerString += ', ' + element;
        });
        return headerString.slice(2) + "‎ ";
    }

    selectAll = () => {
        const { setMultipleSelected } = this.props;
        this.deselectAll();

        if (!this.state.allSelected) {
            document.getElementById("checkbox").style.borderBlockColor = "red";
            this.setState({
                selectedItems: [ ],
            });
            this.state.list.forEach(element => {
                this.state.selectedItems.push(element.title);
                setMultipleSelected(element.id, element.key, element.selected);
            });
            var newheader = this.getSelected();
            this.setState({
            header: newheader,
            allSelected: true,
        });
        }
        
    }

    deselectAll = () => {
        this.state.list.forEach(element => {
            this.deselectItem(element);
        });
        this.setState({
            selectedItems : [ ],
            allSelected : false,
        });

        var newheader = this.getSelected();
        this.setState({
            header: newheader,
        });
        
        document.getElementById("checkbox").style.borderBlockColor = "white";
    }

    deselectItem = (item) => {

        const { setMultipleSelected } = this.props;

        const { title, id, key, selected } = item;
        var index= this.state.selectedItems.indexOf(title);
        this.state.selectedItems.splice(index, 1);

        var newheader = this.getSelected();
        this.setState({
            header: newheader,
        }, () => setMultipleSelected(id,key,selected));
    }

    selectItem = (item) => {
        const { setSelected } = this.props;
        const { setMultipleSelected } = this.props;
        const { title, id, key, selected } = item;
        if (this.state.multipleSelect) {
            if (!selected) {
                this.deselectItem(item);
                
                
            }
            else {
                this.state.selectedItems.push(title);
                const newheader = this.getSelected();

                this.setState({
                    header: newheader,

                }, () => setMultipleSelected(id,key,selected));
            }
            if (this.state.selectedItems.length === this.state.list.length) {
                this.setState({
                    allSelected : true
                });
            }
            else {
                this.setState({
                    allSelected : false
                    });
            }
        }
        else {
            this.setState({
                header: title,
                isListOpen: false, 
            }, () => setSelected(id, key));
        }
        
    }


    render() {
        const {isListOpen, header } = this.state;
        const list = this.props.list;

        return(
            <div className='ssd-wrapper'>
                <button type="button" className='ssd-header' onClick={this.opencloseDropdown}>
                    <div className='ssd-header-title'> { header } </div>
                    {isListOpen ? 
                    <img alt="down" class="arrow" src={require('/Users/trannguyen/reusable-dropdown/src/dropdown.png')} ></img>
                    : <img alt="up" class="arrow" src={require('/Users/trannguyen/reusable-dropdown/src/dropup.png')} ></img>}
                </button>
                {this.state.multipleSelect && <button type="button" id='checkbox' className='selectAll' onClick={this.selectAll}></button>}
                {isListOpen && (
                    
                    <div role="list" className="ssd-list">
                        {list.map((item) => (
                            <button type="button" 
                            className='ssd-list-item' 
                            key={item.id} 
                            onClick={() => this.selectItem(item)}> 
                            {item.title}
                            {' '}
                            {this.state.multipleSelect && !item.selected && <img alt="check" class="check" src={require('/Users/trannguyen/reusable-dropdown/src/check.png')}/>} 
                            
                            </button>
                        ))}
                    </div>
                )}
            </div>
        )
    }



}

export default SingleSelectDropdown;