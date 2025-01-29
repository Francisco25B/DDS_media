// ** React Imports
import { Link } from 'react-router-dom'

// ** Custom Components
<<<<<<< HEAD
import Avatar from '@components/avatar'

// ** Third Party Components
=======
>>>>>>> 13e913d (Actualización)
import { Card, CardBody, CardText, Button, Row, Col } from 'reactstrap'
import { DollarSign, TrendingUp, User, Check, Star, Flag, Phone } from 'react-feather'

const UserInfoCard = ({ selectedUser }) => {
<<<<<<< HEAD
  // ** render user img
  const renderUserImg = () => {
    if (selectedUser !== null && selectedUser.avatar.length) {
      return <img src={selectedUser.avatar} alt='user-avatar' className='img-fluid rounded' height='104' width='104' />
    } else {
      const stateNum = Math.floor(Math.random() * 6),
        states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
        color = states[stateNum]
      return (
        <Avatar
          initials
          color={color}
          className='rounded'
          content={selectedUser.fullName}
          contentStyles={{
            borderRadius: 0,
            fontSize: 'calc(36px)',
            width: '100%',
            height: '100%'
          }}
          style={{
            height: '90px',
            width: '90px'
          }}
        />
      )
    }
=======
  if (!selectedUser) {
    return <div>Cargando...</div> // O algún componente de carga si `selectedUser` es null
>>>>>>> 13e913d (Actualización)
  }

  return (
    <Card>
      <CardBody>
        <Row>
          <Col xl='6' lg='12' className='d-flex flex-column justify-content-between border-container-lg'>
            <div className='user-avatar-section'>
              <div className='d-flex justify-content-start'>
<<<<<<< HEAD
                {renderUserImg()}
                <div className='d-flex flex-column ml-1'>
                  <div className='user-info mb-1'>
                    <h4 className='mb-0'>{selectedUser !== null ? selectedUser.fullName : 'Eleanor Aguilar'}</h4>
                    <CardText tag='span'>
                      {selectedUser !== null ? selectedUser.email : 'eleanor.aguilar@gmail.com'}
=======
                <div className='d-flex flex-column ml-1'>
                  <div className='user-info mb-1'>
                    <h4 className='mb-0'>
                      {selectedUser ? `${selectedUser.nombre} ${selectedUser.apellido}` : 'Nombre no disponible'}
                    </h4>
                    <CardText tag='span'>
                      {selectedUser ? selectedUser.email : 'Email no disponible'}
>>>>>>> 13e913d (Actualización)
                    </CardText>
                  </div>
                  <div className='d-flex flex-wrap align-items-center'>
                    <Button.Ripple tag={Link} to={`/apps/user/edit/${selectedUser.id}`} color='primary'>
<<<<<<< HEAD
                      Edit
                    </Button.Ripple>
                    <Button.Ripple className='ml-1' color='danger' outline>
                      Delete
=======
                      Editar
                    </Button.Ripple>
                    <Button.Ripple className='ml-1' color='danger' outline>
                      Eliminar
>>>>>>> 13e913d (Actualización)
                    </Button.Ripple>
                  </div>
                </div>
              </div>
            </div>
            <div className='d-flex align-items-center user-total-numbers'>
              <div className='d-flex align-items-center mr-2'>
                <div className='color-box bg-light-primary'>
                  <DollarSign className='text-primary' />
                </div>
                <div className='ml-1'>
                  <h5 className='mb-0'>23.3k</h5>
<<<<<<< HEAD
                  <small>Monthly Sales</small>
=======
                  <small>Ventas Mensuales</small>
>>>>>>> 13e913d (Actualización)
                </div>
              </div>
              <div className='d-flex align-items-center'>
                <div className='color-box bg-light-success'>
                  <TrendingUp className='text-success' />
                </div>
                <div className='ml-1'>
                  <h5 className='mb-0'>$99.87K</h5>
<<<<<<< HEAD
                  <small>Annual Profit</small>
=======
                  <small>Beneficio Anual</small>
>>>>>>> 13e913d (Actualización)
                </div>
              </div>
            </div>
          </Col>
          <Col xl='6' lg='12' className='mt-2 mt-xl-0'>
            <div className='user-info-wrapper'>
              <div className='d-flex flex-wrap align-items-center'>
                <div className='user-info-title'>
                  <User className='mr-1' size={14} />
                  <CardText tag='span' className='user-info-title font-weight-bold mb-0'>
<<<<<<< HEAD
                    Username
                  </CardText>
                </div>
                <CardText className='mb-0'>
                  {selectedUser !== null ? selectedUser.username : 'eleanor.aguilar'}
=======
                    Usuario
                  </CardText>
                </div>
                <CardText className='mb-0'>
                  {selectedUser ? selectedUser.nombre : 'Usuario no disponible'}
>>>>>>> 13e913d (Actualización)
                </CardText>
              </div>
              <div className='d-flex flex-wrap align-items-center my-50'>
                <div className='user-info-title'>
                  <Check className='mr-1' size={14} />
                  <CardText tag='span' className='user-info-title font-weight-bold mb-0'>
<<<<<<< HEAD
                    Status
                  </CardText>
                </div>
                <CardText className='text-capitalize mb-0'>
                  {selectedUser !== null ? selectedUser.status : 'Active'}
=======
                    Estado
                  </CardText>
                </div>
                <CardText className='text-capitalize mb-0'>
                  {selectedUser ? (selectedUser.status === 1 ? 'Activo' : 'Inactivo') : 'Estado no disponible'}
>>>>>>> 13e913d (Actualización)
                </CardText>
              </div>
              <div className='d-flex flex-wrap align-items-center my-50'>
                <div className='user-info-title'>
                  <Star className='mr-1' size={14} />
                  <CardText tag='span' className='user-info-title font-weight-bold mb-0'>
<<<<<<< HEAD
                    Role
                  </CardText>
                </div>
                <CardText className='text-capitalize mb-0'>
                  {selectedUser !== null ? selectedUser.role : 'Admin'}
=======
                    Rol
                  </CardText>
                </div>
                <CardText className='text-capitalize mb-0'>
                  {selectedUser ? 'Usuario' : 'Rol no disponible'}
>>>>>>> 13e913d (Actualización)
                </CardText>
              </div>
              <div className='d-flex flex-wrap align-items-center my-50'>
                <div className='user-info-title'>
                  <Flag className='mr-1' size={14} />
                  <CardText tag='span' className='user-info-title font-weight-bold mb-0'>
<<<<<<< HEAD
                    Country
                  </CardText>
                </div>
                <CardText className='mb-0'>{selectedUser !== null ? selectedUser.country : 'England'}</CardText>
=======
                    País
                  </CardText>
                </div>
                <CardText className='mb-0'>No especificado</CardText>
>>>>>>> 13e913d (Actualización)
              </div>
              <div className='d-flex flex-wrap align-items-center'>
                <div className='user-info-title'>
                  <Phone className='mr-1' size={14} />
                  <CardText tag='span' className='user-info-title font-weight-bold mb-0'>
<<<<<<< HEAD
                    Contact
                  </CardText>
                </div>
                <CardText className='mb-0'>{selectedUser !== null ? selectedUser.contact : '(123) 456-7890'}</CardText>
=======
                    Contacto
                  </CardText>
                </div>
                <CardText className='mb-0'>{selectedUser ? selectedUser.telefono : 'Número no disponible'}</CardText>
>>>>>>> 13e913d (Actualización)
              </div>
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default UserInfoCard
