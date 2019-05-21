import React, { Component } from 'react';
import PinchToZoom from 'react-pinch-and-zoom';

import { ArcherContainer, ArcherElement } from 'react-archer';
import { Row,Button, Modal,ModalHeader, ModalBody, ModalFooter,FormGroup,Label,Input } from "reactstrap";


const rootStyle = { display: 'flex', justifyContent: 'center' };
const rowStyle = { margin: '200px 0', display: 'flex', justifyContent: 'space-around', }
const boxStyle = { padding: '10px', border: '1px solid black',borderRadius:'5px',textAlign: 'center'  };


class MachineOrder extends Component {

constructor(props) {
    super(props);
    this.state = {
        modal: false,
        allMachines:{
            1:{id:1,
            machineId:1111,
            employee:"emp1",
            process:22,
            number:1,
            type : "t-shirt",
            empState:false,
            issueState:true,
            issue:"bla bla bla bla bla"
            },
            2:{id:2,
            machineId:22222,
            employee:"emp2",
            process:22,
            number:1,
            type : "Shoes",
            empState:false,
            issueState:true,
            issue:"bla bla bla bla bla"
            },
            3:{id:3,
            machineId:233345,
            employee:"emp1",
            process:22,
            number:1,
            type : "t-shirt",
            empState:true,
            issueState:false,
            issue:""
            },
            4:{id:4,
            machineId:4444,
            employee:"emp4",
            process:22,
            number:1,
            type : "t-shirt",
            empState:true,
            issueState:false,
            issue:""
            },
            5:{id:5,
            machineId:25525,
            employee:"emp5",
            process:22,
            number:1,
            type : "t-shirt",
            empState:true,
            issueState:true,
            issue:"bla bla bla bla bla"
            },
            6:{id:1,
            machineId:666,
            employee:"emp1",
            process:22,
            number:1,
            type : "t-shirt",
            empState:true,
            issueState:false,
            issue:""
            }
        },
        employees:['emp1','emp2','emp3','emp4','emp5','emp6'],
        machine: {},
    };

    this.toggle = this.toggle.bind(this);
    }

    componentDidMount(){
        this.setState({machine:this.state.allMachines['1']})

    }

    toggle() {
    this.setState(prevState => ({
        modal: !prevState.modal
    }));

    }

    popMachine(id){
        this.setState({machine:this.state.allMachines[id]})
        this.toggle()
    }
    

render (){
  return (
    <div>
    <PinchToZoom className="zooming"> 
      <ArcherContainer strokeColor='red' >
      {/* first level */}
        <div style={rowStyle}>
          <ArcherElement
            id="machine1"
            relations={[{
              targetId: 'machine2',
              targetAnchor: 'left',
              sourceAnchor: 'right',
              style: { strokeColor: 'blue', strokeWidth: 1 },
              label: <div style={{ marginTop: '-20px' }}>Arrow</div>,
            }]}
          >
            <div style={boxStyle}>
            <Row className="justify-content-center">
            <Button onClick={() => this.popMachine(1)} 
            color={this.state.allMachines['1'].empState ? 'success' : 'secondary'}
            ><i className="fas fa-user"></i></Button>
            <Button
            color={this.state.allMachines['1'].issueState ? 'warning' : 'secondary'}
            ><i className="fas fa-exclamation-triangle"></i></Button>
            </Row>
            <p onClick={() => this.popMachine(1)} >Machine 1</p>
            <p onClick={() => this.popMachine(1)} ># 445</p>
            </div>
          </ArcherElement>

          <ArcherElement
            id="machine2"
            relations={[{
              targetId: 'machine3',
              targetAnchor: 'left',
              sourceAnchor: 'right',
              style: { strokeColor: 'blue', strokeWidth: 1 },
              label: <div style={{ marginTop: '-20px' }}>Arrow</div>,
            }]}
          >
            <div style={boxStyle}>
            <Row className="justify-content-center">
            <Button onClick={() => this.popMachine(2)} 
            color={this.state.allMachines['2'].empState ? 'success' : 'secondary'}
            ><i className="fas fa-user"></i></Button>
            <Button
            color={this.state.allMachines['2'].issueState ? 'warning' : 'secondary'}
            ><i className="fas fa-exclamation-triangle"></i></Button>
            </Row>
            <p onClick={() => this.popMachine(2)} >Machine 2</p>
            <p onClick={() => this.popMachine(2)} ># 445</p>
            </div>
          </ArcherElement>

          <ArcherElement
            id="machine3"
            relations={[{
              targetId: 'machine4',
              targetAnchor: 'top',
              sourceAnchor: 'bottom',
              style: { strokeColor: 'blue', strokeWidth: 1 },
              label: <div style={{ marginTop: '-20px' }}>Arrow</div>,
            }]}
          >
            <div style={boxStyle}>
            <Row className="justify-content-center">
            <Button onClick={() => this.popMachine(3)} 
            color={this.state.allMachines['3'].empState ? 'success' : 'secondary'}
            ><i className="fas fa-user"></i></Button>
            <Button
            color={this.state.allMachines['3'].issueState ? 'warning' : 'secondary'}
            ><i className="fas fa-exclamation-triangle"></i></Button>
            </Row>
            <p onClick={() => this.popMachine(3)} >Machine 3</p>
            <p onClick={() => this.popMachine(3)} ># 445</p>
            </div>
          </ArcherElement>          
        </div>
        {/* end of first level */}

      {/* second level */}
        <div style={rowStyle}>
          <ArcherElement
            id="machine4"
            relations={[{
              targetId: 'machine5',
              targetAnchor: 'left',
              sourceAnchor: 'right',
              style: { strokeColor: 'blue', strokeWidth: 1 },
              label: <div style={{ marginTop: '-20px' }}>Arrow</div>,
            }]}
          >
            <div style={boxStyle}>
            <Row className="justify-content-center">
            <Button onClick={() => this.popMachine(4)} 
            color={this.state.allMachines['4'].empState ? 'success' : 'secondary'}
            ><i className="fas fa-user"></i></Button>
            <Button
            color={this.state.allMachines['4'].issueState ? 'warning' : 'secondary'}
            ><i className="fas fa-exclamation-triangle"></i></Button>
            </Row>
            <p onClick={() => this.popMachine(4)} >Machine 4</p>
            <p onClick={() => this.popMachine(4)} ># 445</p>
            </div>
          </ArcherElement>

          <ArcherElement
            id="machine5"
            relations={[{
              targetId: 'machine6',
              targetAnchor: 'left',
              sourceAnchor: 'right',
              style: { strokeColor: 'blue', strokeWidth: 1 },
              label: <div style={{ marginTop: '-20px' }}>Arrow</div>,
            }]}
          >
            <div style={boxStyle}>
            <Row className="justify-content-center">
            <Button onClick={() => this.popMachine(5)} 
            color={this.state.allMachines['5'].empState ? 'success' : 'secondary'}
            ><i className="fas fa-user"></i></Button>
            <Button
            color={this.state.allMachines['5'].issueState ? 'warning' : 'secondary'}
            ><i className="fas fa-exclamation-triangle"></i></Button>
            </Row>
            <p onClick={() => this.popMachine(5)} >Machine 5</p>
            <p onClick={() => this.popMachine(5)} ># 445</p>
            </div>
          </ArcherElement>

          <ArcherElement
            id="machine6">
            <div style={boxStyle}>
            <Row className="justify-content-center">
            <Button onClick={() => this.popMachine(6)} 
            color={this.state.allMachines['6'].empState ? 'success' : 'secondary'}
            ><i className="fas fa-user"></i></Button>
            <Button
            color={this.state.allMachines['6'].issueState ? 'warning' : 'secondary'}
            ><i className="fas fa-exclamation-triangle"></i></Button>
            </Row>
            <p onClick={() => this.popMachine(6)} >Machine 6</p>
            <p onClick={() => this.popMachine(6)} ># 445</p>
            </div>
          </ArcherElement>          
        </div>
        {/* end of second level */}


      </ArcherContainer>
      </PinchToZoom>


      <div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Machine {this.state.machine.machineId}</ModalHeader>
          <ModalBody>
          <FormGroup>
            <Label for="backdrop">Backdrop value</Label>{' '}
            <Input value="em" type="select" name="backdrop" id="backdrop" onChange={this.toggle}>
            {this.state.employees.map( emp =>{
                return <option value={emp}>{emp}</option>
            })}
              
            </Input>
          </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
      
    </div>
  );
}

}

export default MachineOrder;