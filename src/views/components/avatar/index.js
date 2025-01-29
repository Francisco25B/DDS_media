<<<<<<< HEAD
import { Fragment, useEffect } from 'react'
import Prism from 'prismjs'
import { Row, Col, CardText } from 'reactstrap'
import BreadCrumbs from '@components/breadcrumbs'
import Card from '@components/card-snippet'
import AvatarInitials from './AvatarInitials'
import AvatarSizes from './AvatarSizes'
import AvatarColors from './AvatarColors'
import AvatarLightColors from './AvatarLightColors'
import AvatarIcons from './AvatarIcons'
import AvatarStatus from './AvatarStatus'
import AvatarGroup from './AvatarGroup'
import AvatarGroupTooltip from './AvatarGroupTooltip'
import {
  avatarColors,
  avatarLightColors,
  avatarInitials,
  avatarIcons,
  avatarSizes,
  avatarGroup,
  avatarGroupTooltip,
  avatarStatus
} from './AvatarSourceCode'

const Avatar = () => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <Fragment>
      <BreadCrumbs breadCrumbTitle='Avatar' breadCrumbParent='Extra Components' breadCrumbActive='Avatar' />
      <Row className='match-height'>
        <Col xl='6' lg='12'>
          <Card title='Sizes' code={avatarSizes}>
            <CardText className='mb-0'>
              Use <code>size=[sm | lg | xl]</code> prop to change avatar's size. You can also use <code>height</code> &{' '}
              <code>width</code> prop for a custom size
            </CardText>
            <AvatarSizes />
          </Card>
        </Col>
        <Col xl='6' lg='12'>
          <Card title='Intials' code={avatarInitials}>
            <CardText className='mb-0'>
              Use prop <code>initials</code> to show only Initials of content.
            </CardText>
            <AvatarInitials />
          </Card>
        </Col>
        <Col xl='6' lg='12'>
          <Card title='Colors' code={avatarColors}>
            <CardText className='mb-0'>
              Use prop
              <code>color=[primary | success | danger | info | warning | dark]</code>
              to change background color of your avatar.
            </CardText>
            <AvatarColors />
          </Card>
        </Col>
        <Col xl='6' lg='12'>
          <Card title='Light Colors' code={avatarLightColors}>
            <CardText className='mb-0'>
              Use prop
              <code>
                color=[light-primary | light-success | light-danger | light-info | light-warning | light-dark]
              </code>
              to change background color of your avatar.
            </CardText>
            <AvatarLightColors />
          </Card>
        </Col>
        <Col xl='6' lg='12'>
          <Card title='Icons' code={avatarIcons}>
            <CardText className='mb-0'>
              Use prop <code>icon</code> to create avatar with icon.
            </CardText>
            <AvatarIcons />
          </Card>
        </Col>
        <Col xl='6' sm='12'>
          <Card title='Status' code={avatarStatus}>
            <CardText className='mb-0'>
              Use prop<code>status=[online | offline | away | busy]</code> to create avatar with status.
            </CardText>
            <AvatarStatus />
          </Card>
        </Col>
        <Col xl='6' sm='12'>
          <Card title='Avatar Group' code={avatarGroup}>
            <CardText>
              Use <code>&lt;AvatarGroup /&gt;</code> component and pass <code>data</code> prop to create a grouped
              avatar.
            </CardText>
            <CardText>Data prop must be an array of object which contains props to be passed on avatar.</CardText>
            <AvatarGroup />
          </Card>
        </Col>
        <Col xl='6' sm='12'>
          <Card title='Avatar Group Tooltip' code={avatarGroupTooltip}>
            <CardText>
              Add an extra property of <code>title</code> in the data you pass in <code>&lt;AvatarGroup /&gt;</code> to
              create avatar group with tooltip.
            </CardText>

            <AvatarGroupTooltip />
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}
export default Avatar
=======
import { forwardRef } from 'react'
import Proptypes from 'prop-types'
import { Badge } from 'reactstrap'
import classnames from 'classnames'

const Avatar = forwardRef((props, ref) => {
  // ** Props
  const {
    color,
    className,
    imgClassName,
    initials,
    size,
    badgeUp,
    content,
    icon,
    badgeColor,
    badgeText,
    img,
    imgHeight,
    imgWidth,
    status,
    tag: Tag,
    contentStyles,
    selectedUser,  // Asegúrate de pasar el usuario seleccionado a este componente
    ...rest
  } = props

  // ** Función para obtener las iniciales del nombre
  const getInitials = (str) => {
    if (!str || typeof str !== 'string' || !str.trim()) {
      return 'U' // Valor predeterminado si no es una cadena válida
    }
    return str[0].toUpperCase()  // Solo la primera inicial del nombre
  }
  
  // Usamos el nombre para obtener las iniciales
  const userName = selectedUser?.nombre || 'Desconocido'
  const userInitials = getInitials(userName)

  // ** Log para debug
  console.log('Content passed to Avatar:', content)

  return (
    <Tag
      className={classnames('avatar', {
        [className]: className,
        [`bg-${color}`]: color,
        [`avatar-${size}`]: size
      })}
      ref={ref}
      {...rest}
    >
      {img === false || img === undefined ? (
        <span
          className={classnames('avatar-content', {
            'position-relative': badgeUp
          })}
          style={contentStyles}
        >
          {initials ? userInitials : userName}  {/* Aquí solo mostramos el nombre o las iniciales */}

          {icon ? icon : null}
          {badgeUp ? (
            <Badge color={badgeColor ? badgeColor : 'primary'} className='badge-sm badge-up' pill>
              {badgeText ? badgeText : '0'}
            </Badge>
          ) : null}
        </span>
      ) : (
        <img
          className={classnames({
            [imgClassName]: imgClassName
          })}
          src={img}
          alt='avatarImg'
          height={imgHeight && !size ? imgHeight : 32}
          width={imgWidth && !size ? imgWidth : 32}
        />
      )}
      
      {status ? (
        <span
          className={classnames({
            [`avatar-status-${status}`]: status,
            [`avatar-status-${size}`]: size
          })}
        ></span>
      ) : null}
    </Tag>
  )
})

export default Avatar

// ** PropTypes
Avatar.propTypes = {
  imgClassName: Proptypes.string,
  className: Proptypes.string,
  src: Proptypes.string,
  tag: Proptypes.oneOfType([Proptypes.func, Proptypes.string]),
  badgeUp: Proptypes.bool,
  content: Proptypes.string,
  icon: Proptypes.node,
  contentStyles: Proptypes.object,
  badgeText: Proptypes.string,
  imgHeight: Proptypes.oneOfType([Proptypes.string, Proptypes.number]),
  imgWidth: Proptypes.oneOfType([Proptypes.string, Proptypes.number]),
  size: Proptypes.oneOf(['sm', 'lg', 'xl']),
  status: Proptypes.oneOf(['online', 'offline', 'away', 'busy']),
  badgeColor: Proptypes.oneOf([
    'primary', 'secondary', 'success', 'danger', 'info', 'warning', 'dark',
    'light-primary', 'light-secondary', 'light-success', 'light-danger', 
    'light-info', 'light-warning', 'light-dark'
  ]),
  color: Proptypes.oneOf([
    'primary', 'secondary', 'success', 'danger', 'info', 'warning', 'dark',
    'light-primary', 'light-secondary', 'light-success', 'light-danger',
    'light-info', 'light-warning', 'light-dark'
  ]),
  selectedUser: Proptypes.object // Asegúrate de pasar un objeto de usuario
}

// ** Default Props
Avatar.defaultProps = {
  tag: 'div'
}
>>>>>>> 13e913d (Actualización)
