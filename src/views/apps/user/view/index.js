<<<<<<< HEAD
// ** React Imports
import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

// ** Store & Actions
import { getUser } from '../store/action'
import { useSelector, useDispatch } from 'react-redux'

// ** Reactstrap
import { Row, Col, Alert } from 'reactstrap'

// ** User View Components
import PlanCard from './PlanCard'
import UserInfoCard from './UserInfoCard'
import UserTimeline from './UserTimeline'
import InvoiceList from '../../invoice/list'
import PermissionsTable from './PermissionsTable'

// ** Styles
import '@styles/react/apps/app-users.scss'

const UserView = props => {
  // ** Vars
  const store = useSelector(state => state.users),
    dispatch = useDispatch(),
    { id } = useParams()

  // ** Get suer on mount
  useEffect(() => {
    dispatch(getUser(parseInt(id)))
  }, [dispatch])

  return store.selectedUser !== null && store.selectedUser !== undefined ? (
    <div className='app-user-view'>
      <Row>
        <Col xl='9' lg='8' md='7'>
          <UserInfoCard selectedUser={store.selectedUser} />
        </Col>
        <Col xl='3' lg='4' md='5'>
          <PlanCard selectedUser={store.selectedUser} />
        </Col>
      </Row>
      <Row>
        <Col md='6'>
          <UserTimeline />
        </Col>
        <Col md='6'>
          <PermissionsTable />
        </Col>
      </Row>
      <Row>
        <Col sm='12'>
          <InvoiceList />
        </Col>
      </Row>
    </div>
  ) : (
    <Alert color='danger'>
      <h4 className='alert-heading'>User not found</h4>
      <div className='alert-body'>
        User with id: {id} doesn't exist. Check list of all Users: <Link to='/apps/user/list'>Users List</Link>
      </div>
    </Alert>
  )
}
export default UserView
=======
// ** Reactstrap
import { Card, CardHeader, CardTitle, CardText, Table, CustomInput } from 'reactstrap'

const PermissionsTable = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Permisos</CardTitle>
      </CardHeader>
      <CardText className='ml-2'>Permisos acuerdo al tipo de usuario</CardText>
      <Table striped borderless responsive>
  <thead className='thead-light'>
    <tr>
      <th>Modulo</th>
      <th>Ver</th>
      <th>Editar</th>
      <th>Agregar</th>
      <th>Eliminar</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ingresos</td>
      <td>
        <CustomInput type='checkbox' id='admin-1' label='' defaultChecked />
      </td>
      <td>
        <CustomInput type='checkbox' id='admin-2' label='' />
      </td>
      <td>
        <CustomInput type='checkbox' id='admin-3' label='' />
      </td>
      <td>
        <CustomInput type='checkbox' id='admin-4' label='' />
      </td>
    </tr>
    <tr>
      <td>Egresos</td>
      <td>
        <CustomInput type='checkbox' id='staff-1' label='' />
      </td>
      <td>
        <CustomInput type='checkbox' id='staff-2' label='' defaultChecked />
      </td>
      <td>
        <CustomInput type='checkbox' id='staff-3' label='' />
      </td>
      <td>
        <CustomInput type='checkbox' id='staff-4' label='' />
      </td>
    </tr>
    <tr>
      <td>Estado Resultado</td>
      <td>
        <CustomInput type='checkbox' id='author-1' label='' defaultChecked />
      </td>
      <td>
        <CustomInput type='checkbox' id='author-2' label='' />
      </td>
      <td>
        <CustomInput type='checkbox' id='author-3' label='' defaultChecked />
      </td>
      <td>
        <CustomInput type='checkbox' id='author-4' label='' />
      </td>
    </tr>
    <tr>
      <td>Reportes Generales</td>
      <td>
        <CustomInput type='checkbox' id='contributor-1' label='' />
      </td>
      <td>
        <CustomInput type='checkbox' id='contributor-2' label='' />
      </td>
      <td>
        <CustomInput type='checkbox' id='contributor-3' label='' />
      </td>
      <td>
        <CustomInput type='checkbox' id='contributor-4' label='' />
      </td>
    </tr>
    <tr>
      <td>Usuarios</td>
      <td>
        <CustomInput type='checkbox' id='user-1' label='' />
      </td>
      <td>
        <CustomInput type='checkbox' id='user-2' label='' />
      </td>
      <td>
        <CustomInput type='checkbox' id='user-3' label='' />
      </td>
      <td>
        <CustomInput type='checkbox' id='user-4' label='' defaultChecked />
      </td>
    </tr>
  </tbody>
</Table>

    </Card>
  )
  
}

export default PermissionsTable
>>>>>>> 13e913d (Actualización)
