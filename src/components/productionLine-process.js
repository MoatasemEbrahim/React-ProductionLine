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
            process:21,
            number:1,
            type : "t-shirt",
            empState:false,
            issueState:true,
            issue:"bla bla bla bla bla"
            },
            2:{id:2,
            machineId:22222,
            employee:"emp2",
            process:922,
            number:78,
            type : "Shoes",
            empState:false,
            issueState:true,
            issue:"bla bla bla bla bla"
            },
            3:{id:3,
            machineId:233345,
            employee:"emp3",
            process:212,
            number:24,
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
            number:15,
            type : "t-shirt",
            empState:true,
            issueState:true,
            issue:"bla bla bla bla bla"
            },
            6:{id:6,
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

    toggle= ()=> {
      
    this.setState(prevState => ({
        modal: !prevState.modal
    }));

    }

    popMachine(id){
        this.setState({machine:this.state.allMachines[id]})
        this.toggle()
    }

    toggleEmp=()=>{
      
      this.setState({
        machine:{...this.state.machine,empState:!this.state.machine['empState']}
      })
    }

    toggleIssue=()=>{
      
      this.setState({
        machine:{...this.state.machine,issueState:!this.state.machine['issueState']}
      })
    }
    
    save = ()=>{
      this.setState({
        allMachines:{...this.state.allMachines,[this.state.machine.id]:this.state.machine}
      })
      this.toggle()
    }

render (){
  return (
    <div>
    <PinchToZoom className="zooming"> 
      <ArcherContainer strokeColor='red' >
      {/* root elemant & first level*/}
        <div style={rootStyle}> {/* Double element */}
        {/* Outer element */}
          <ArcherElement 
            id="machine1"
            relations={[{
              targetId: 'machine2',
              targetAnchor: 'top',
              sourceAnchor: 'bottom',
            }]}
          >
            <div>
            {/* Inner element */}
            <ArcherElement
            id="machine22"
            relations={[{
              targetId: 'machine3',
              targetAnchor: 'top',
              sourceAnchor: 'bottom',
            }]}
          >
            <div style={boxStyle}>
            <Row className="justify-content-center">
            <Button onClick={() => this.popMachine(1)}
            color={this.state.allMachines['1'].empState ? 'success' : 'secondary'}
            ><i className="fas fa-user" ></i></Button>
            <Button disabled
            color={this.state.allMachines['1'].issueState ? 'warning' : 'secondary'}
            ><i className="fas fa-exclamation-triangle"></i></Button>
            </Row>
                <p onClick={() => this.popMachine(1)}>Machine 1</p>
                <p onClick={() => this.popMachine(1)}># {this.state.allMachines['1'].machineId}</p>
            </div>
          </ArcherElement></div>
          </ArcherElement>
        </div>
        {/* end of root elemant */}

        {/* second level */}
        <div style={rowStyle}>
          <ArcherElement
            id="machine2"
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
            <Button onClick={() => this.popMachine(2)} 
            color={this.state.allMachines['2'].empState ? 'success' : 'secondary'}
            ><i className="fas fa-user"></i></Button>
            <Button disabled
            color={this.state.allMachines['2'].issueState ? 'warning' : 'secondary'}
            ><i className="fas fa-exclamation-triangle"></i></Button>
            </Row>
            <p onClick={() => this.popMachine(2)} >Machine 2</p>
            <p onClick={() => this.popMachine(2)} ># {this.state.allMachines['2'].machineId}</p>
            </div>
          </ArcherElement>
        
          {/* Double element */}
          {/* Outter element */}
          <ArcherElement
          id="machine3"
          relations={[{
              targetId:'machine5',
              targetAnchor:'top',
              sourceAnchor:'bottom',
              style:{strokeColor: 'blue', strokeWidth: 1},
              label: <div style={{ marginTop: '-20px' }}>Arrow</div>,
          }]}
          >
            <div>
            {/* Inner element */}    
            <ArcherElement
          id="machine33"
          relations={[{
              targetId:'machine4',
              targetAnchor:'top',
              sourceAnchor:'left',
              style:{strokeColor: 'blue', strokeWidth: 1},
              label: <div style={{ marginTop: '-20px' }}>Arrow</div>,
          }]}
          >
            <div style={boxStyle}>
            <Row className="justify-content-center">
            <Button onClick={() => this.popMachine(3)} 
            color={this.state.allMachines['3'].empState ? 'success' : 'secondary'}
            ><i className="fas fa-user"></i></Button>
            <Button disabled
            color={this.state.allMachines['3'].issueState ? 'warning' : 'secondary'}
            ><i className="fas fa-exclamation-triangle"></i></Button>
            </Row>
            <p onClick={() => this.popMachine(3)} >Machine 3</p>
            <p onClick={() => this.popMachine(3)}># {this.state.allMachines['3'].machineId}</p>
            </div>
          </ArcherElement></div>

          </ArcherElement>
        </div>
        {/* end of second level */}


        {/* third level */}
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
            <Button disabled
            color={this.state.allMachines['4'].issueState ? 'warning' : 'secondary'}
            ><i className="fas fa-exclamation-triangle"></i></Button>
            </Row>
            <p onClick={() => this.popMachine(4)}>Machine 4</p>
            <p onClick={() => this.popMachine(4)}># {this.state.allMachines['4'].machineId}</p>
            </div>
          </ArcherElement>

          <ArcherElement id="machine5"
          relations={[{
            targetId: 'machine6',
            targetAnchor: 'top',
            sourceAnchor: 'bottom',
            style: { strokeColor: 'blue', strokeWidth: 1 },
            label: <div style={{ marginTop: '-20px' }}>Arrow</div>,
          }]}
          >
          <div style={boxStyle}>
            <Row className="justify-content-center">
            <Button onClick={() => this.popMachine(5)} 
            color={this.state.allMachines['5'].empState ? 'success' : 'secondary'}
            ><i className="fas fa-user"></i></Button>
            <Button disabled
            color={this.state.allMachines['5'].issueState ? 'warning' : 'secondary'}
            ><i className="fas fa-exclamation-triangle"></i></Button>
            </Row>
            <p onClick={() => this.popMachine(5)}>Machine 5</p>
            <p onClick={() => this.popMachine(5)}># {this.state.allMachines['5'].machineId}</p>
            </div>
          </ArcherElement>
        </div>
        {/* end of third level */}

        {/* forth level */}
        <div style={rowStyle}>
        <ArcherElement id="machine6">
        <div style={boxStyle}>
            <Row className="justify-content-center">
            <Button onClick={() => this.popMachine(6)} 
            color={this.state.allMachines['6'].empState ? 'success' : 'secondary'}
            ><i className="fas fa-user"></i></Button>
            <Button disabled
            color={this.state.allMachines['6'].issueState ? 'warning' : 'secondary'}
            ><i className="fas fa-exclamation-triangle"></i></Button>
            </Row>
            <p onClick={() => this.popMachine(6)}>Machine 6</p>
            <p onClick={() => this.popMachine(6)}># {this.state.allMachines['6'].machineId}</p>
            </div>
        </ArcherElement>
        </div>

      </ArcherContainer>
      </PinchToZoom>


      <div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Machine {this.state.machine.machineId}</ModalHeader>
          <ModalBody>
          <FormGroup>
            <Label for="backdrop">Backdrop value</Label>{' '}
            {/* onChange={this.toggle} */}
            <Input value={this.state.machine.emp} type="select" name="backdrop" id="backdrop" >
            {this.state.employees.map( emp =>{
                return <option key={emp} value={emp}>{emp}</option>
            })}
              
            </Input>
          </FormGroup>
          <FormGroup>
          <Label for="exampleEmail">Process</Label>
          <Input type="text" value={this.state.machine.process} id="exampleEmail" placeholder="Process" />
        </FormGroup>
          <FormGroup>
          <Label for="exampleEmail">Type</Label>
          <Input type="text" value={this.state.machine.type} id="exampleEmail" placeholder="Type" />
        </FormGroup>
        <FormGroup>
         <Label for="exampleEmail">Number</Label>          
          <Input type="number" value={this.state.machine.number} id="examplePassword" placeholder="Number" />
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" onClick={this.toggleIssue}  checked={this.state.machine.issueState} value={false} />
            Machine issue
          </Label>
        </FormGroup>
        <FormGroup>
          <Input type="textarea" value={this.state.machine.issue} name="text" id="exampleText" placeholder="Issue">
          </Input>
        </FormGroup>

        <FormGroup check>
            <Label check>
              <Input type="radio" onClick={this.toggleEmp} name="radio1" checked={this.state.machine.empState}/>{' '}
              emp online
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" onClick={this.toggleEmp} name="radio1" checked={!this.state.machine.empState} />{' '}
              emp offline
            </Label>
          </FormGroup>


          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.save}>Save</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
      
    </div>
  );
}

}

export default MachineOrder;