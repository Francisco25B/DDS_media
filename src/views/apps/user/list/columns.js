<<<<<<< HEAD
// ** React Imports
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Store & Actions
import { getUser, deleteUser } from '../store/action'
=======
import React from 'react'
import { Link } from 'react-router-dom'
import './customStyles.css'

// ** Custom Components
import Avatar from '@components/avatar'
import { FaUser, FaEnvelope, FaPhone, FaHome, FaLock, FaUserCog } from 'react-icons/fa'

// ** Store & Actions
import { getUser, deleteUser, updateUser } from '../store/action'
>>>>>>> 13e913d (Actualización)
import { store } from '@store/storeConfig/store'

// ** Third Party Components
import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
<<<<<<< HEAD
import { Slack, User, Settings, Database, Edit2, MoreVertical, FileText, Trash2, Archive } from 'react-feather'
=======
import { Slack, User, Settings, Database, Edit2, MoreVertical, FileText, Trash2 } from 'react-feather'

// ** SweetAlert Import
import Swal from 'sweetalert2'
import { getData } from '../store/action/index' 
>>>>>>> 13e913d (Actualización)

// ** Renders Client Columns
const renderClient = row => {
  const stateNum = Math.floor(Math.random() * 6),
<<<<<<< HEAD
    states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
    color = states[stateNum]

  if (row.avatar.length) {
    return <Avatar className='mr-1' img={row.avatar} width='32' height='32' />
  } else {
    return <Avatar color={color || 'primary'} className='mr-1' content={row.fullName || 'John Doe'} initials />
  }
}

// ** Renders Role Columns
const renderRole = row => {
  const roleObj = {
    subscriber: {
      class: 'text-primary',
      icon: User
    },
    maintainer: {
      class: 'text-success',
      icon: Database
    },
    editor: {
      class: 'text-info',
      icon: Edit2
    },
    author: {
      class: 'text-warning',
      icon: Settings
    },
    admin: {
      class: 'text-danger',
      icon: Slack
    }
  }

  const Icon = roleObj[row.role] ? roleObj[row.role].icon : Edit2

  return (
    <span className='text-truncate text-capitalize align-middle'>
      <Icon size={18} className={`${roleObj[row.role] ? roleObj[row.role].class : ''} mr-50`} />
      {row.role}
=======
    states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary']
  const color = states[stateNum]
  const nombre = row.nombre || 'Unknown'

  if (row.avatar && row.avatar.length) {
    return <Avatar className='mr-1' img={row.avatar} width='32' height='32' />
  } else {
    return <Avatar color={color || 'primary'} className='mr-1' content={nombre} initials />
  }
}


const renderRole = row => {
  const roleObj = {
    1: { class: 'text-danger', icon: FaUser, label: 'Admin' },
    2: { class: 'text-info', icon: FaUserCog, label: 'Editor' },
    3: { class: 'text-primary', icon: FaUser, label: 'Subscriber' },
    4: { class: 'text-success', icon: FaHome, label: 'Maintainer' },
    5: { class: 'text-warning', icon: FaLock, label: 'Author' }
  }

  const role = roleObj[row.tipo_usuario_id] || {}
  const Icon = role.icon || FaUser

  return (
    <span className='text-truncate text-capitalize align-middle'>
      <Icon size={18} className={`${role.class || 'text-info'} mr-50`} />
      {role.label || 'Unknown'}
>>>>>>> 13e913d (Actualización)
    </span>
  )
}

const statusObj = {
<<<<<<< HEAD
  pending: 'light-warning',
  active: 'light-success',
  inactive: 'light-secondary'
=======
  1: 'light-success', // Active
  0: 'light-danger'   // Inactive
}

// ** Handle Edit Click Function
// ** Handle Edit Click Function
const handleEditUser = async (user) => {
  const { value: formValues } = await Swal.fire({
    title: "Editar Usuario",
    html: `
      <div class="swal-input-container">
       <div class="swal-input-group">
          <span class="swal-input-title">Tipo de Usuario</span>
          <select id="swal-input-tipo-usuario" class="swal2-input-select">
          <option value="2" ${user.tipo_usuario_id === 2 ? 'selected' : ''}>Administrador</option>
            <option value="1" ${user.tipo_usuario_id === 1 ? 'selected' : ''}>Cliente</option>
            <option value="3" ${user.tipo_usuario_id === 3 ? 'selected' : ''}>Proveedor</option>
          </select>
        </div>
        <div class="swal-input-group">
          <span class="swal-input-title"><FaUser /> Nombre</span>
          <input id="swal-input-nombre" class="swal2-input" placeholder="Nombre" value="${user.nombre}">
        </div>
        <div class="swal-input-group">
          <span class="swal-input-title"><FaUser /> Apellido</span>
          <input id="swal-input-apellido" class="swal2-input" placeholder="Apellido" value="${user.apellido}">
        </div>
        <div class="swal-input-group">
          <span class="swal-input-title"><FaEnvelope /> Email</span>
          <input id="swal-input-email" class="swal2-input" placeholder="Email" value="${user.email}">
        </div>
        <div class="swal-input-group">
          <span class="swal-input-title"><FaPhone /> Teléfono</span>
          <input id="swal-input-telefono" class="swal2-input" placeholder="Teléfono" value="${user.telefono}">
        </div>
        <div class="swal-input-group">
          <span class="swal-input-title"><FaHome /> Dirección</span>
          <input id="swal-input-direccion" class="swal2-input" placeholder="Dirección" value="${user.direccion}">
        </div>
        <div class="swal-input-group">
          <span class="swal-input-title">Estado</span>
          <select id="swal-input-status" class="swal2-input-select">
            <option value="1" ${user.status === 1 ? 'selected' : ''}>Activo</option>
            <option value="0" ${user.status === 0 ? 'selected' : ''}>Inactivo</option>
          </select>
        </div>
      </div>
    `,
    focusConfirm: false,
    showCancelButton: true,
    confirmButtonText: 'Editar Usuario',
    cancelButtonText: 'Cancelar',
    preConfirm: () => {
      const nombre = document.getElementById("swal-input-nombre").value.trim()
      const apellido = document.getElementById("swal-input-apellido").value.trim()
      const email = document.getElementById("swal-input-email").value.trim()
      const telefono = document.getElementById("swal-input-telefono").value.trim()
      const direccion = document.getElementById("swal-input-direccion").value.trim()
      const tipo_usuario_id = parseInt(document.getElementById("swal-input-tipo-usuario").value.trim())
      const status = parseInt(document.getElementById("swal-input-status").value.trim())
  
      if (!nombre || !apellido || !email || !telefono || !direccion || isNaN(tipo_usuario_id) || isNaN(status)) {
        Swal.showValidationMessage("Todos los campos son obligatorios y deben tener un formato válido.")
        return false
      }
  
      return { nombre, apellido, email, telefono, direccion, tipo_usuario_id, status }
    }
  })

  if (formValues) {
    const updatedUser = {
      ...user, // Mantener campos originales
      ...formValues // Sobrescribir con los campos modificados
    }

    console.log("Datos enviados al backend:", updatedUser)

    try {
      const response = await fetch(`http://localhost:8081/users/${user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedUser) // Enviar datos al servidor
      })

      if (!response.ok) {
        const errorData = await response.json()
        console.error("Error de respuesta del servidor:", errorData)
        throw new Error("Error al actualizar el usuario.")
      }

      const result = await response.json()

      if (result.status === "success") {
        Swal.fire({
          icon: "success",
          title: "Actualizado",
          text: "El usuario se ha actualizado correctamente.",
          timer: 2000, // Cerrar automáticamente después de 2 segundos
          showConfirmButton: false // No mostrar botón de confirmación
        })
        // Actualizar el estado global de usuarios en Redux
        store.dispatch(updateUser(updatedUser))

        // Refrescar los datos después de la actualización
        store.dispatch(getData({ page: 1, perPage: 10 })) // Esto es para obtener los datos actualizados
      } else {
        Swal.fire("Error", "No se pudo actualizar el usuario.", "error")
      }
    } catch (error) {
      console.error("Error al enviar la solicitud:", error)
      Swal.fire("Error", "Hubo un problema con la solicitud.", "error")
    }
  }
}

const handleDeleteUser = async (user) => {
  const confirm = await Swal.fire({
    title: '¿Estás seguro?',
    text: `¿Deseas eliminar al usuario "${user.nombre}"?`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'Cancelar'

  })

  if (confirm.isConfirmed) {
    try {
      const response = await fetch(`http://localhost:8081/users/${user.id}`, {
        method: 'PUT', // Usamos PUT para actualizar el estado
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status: 0 }) // Cambiar el estado del usuario
      })

      if (!response.ok) {
        const errorData = await response.json()
        console.error('Error del servidor:', errorData)
        throw new Error('No se pudo eliminar el usuario.')
      }

      const result = await response.json()
      if (result.status === 'success') {
        Swal.fire('Eliminado', 'El usuario ha sido eliminado .', 'success')
        
        // Actualizamos el estado global (Redux)
        store.dispatch(getData({ page: 1, perPage: 10 }))
      } else {
        Swal.fire('Error', 'No se pudo eliminar el usuario.', 'error')
      }
    } catch (error) {
      console.error('Error al eliminar usuario:', error)
      Swal.fire('Error', 'Hubo un problema con la solicitud.', 'error')
    }
  }
>>>>>>> 13e913d (Actualización)
}

export const columns = [
  {
<<<<<<< HEAD
    name: 'User',
    minWidth: '297px',
    selector: 'fullName',
    sortable: true,
    cell: row => (
      <div className='d-flex justify-content-left align-items-center'>
        {renderClient(row)}
        <div className='d-flex flex-column'>
          <Link
            to={`/apps/user/view/${row.id}`}
            className='user-name text-truncate mb-0'
            onClick={() => store.dispatch(getUser(row.id))}
          >
            <span className='font-weight-bold'>{row.fullName}</span>
          </Link>
          <small className='text-truncate text-muted mb-0'>@{row.username}</small>
        </div>
      </div>
    )
  },
  {
    name: 'Email',
    minWidth: '320px',
    selector: 'email',
    sortable: true,
    cell: row => row.email
  },
  {
    name: 'Role',
    minWidth: '172px',
    selector: 'role',
    sortable: true,
    cell: row => renderRole(row)
  },
  {
    name: 'Plan',
    minWidth: '138px',
    selector: 'currentPlan',
    sortable: true,
    cell: row => <span className='text-capitalize'>{row.currentPlan}</span>
  },
  {
    name: 'Status',
=======
    name: <span> Tipo de Usuario</span>,  // Icono en el título
    minWidth: '150px',
    selector: 'tipo_usuario_id',
    sortable: true,
    cell: row => {
      const roles = { 1: 'cliente', 2: 'administrador', 3: 'proveedor' }
      return roles[row.tipo_usuario_id] || 'Unknown'
    }
  },
  { 
    name: <span><FaUser size={16} className='mr-50' /> Nombre</span>,  // Icono en el título
    minWidth: '150px', 
    selector: 'nombre', 
    sortable: true, 
    cell: row => row.nombre || 'N/A' 
  },
  { 
    name: <span><FaUser size={16} className='mr-50' /> Apellido</span>,  // Icono en el título
    minWidth: '200px', 
    selector: 'apellido', 
    sortable: true, 
    cell: row => row.apellido || 'N/A' 
  },
  { 
    name: <span><FaHome size={16} className='mr-50' /> Dirección</span>,  // Icono en el título
    minWidth: '250px', 
    selector: 'direccion', 
    sortable: true, 
    cell: row => row.direccion || 'N/A' 
  },
  { 
    name: <span><FaEnvelope size={16} className='mr-50' /> Correo Electrónico</span>,  // Icono en el título
    minWidth: '300px', 
    selector: 'email', 
    sortable: true, 
    cell: row => row.email || 'N/A' 
  },
  { 
    name: <span><FaPhone size={16} className='mr-50' /> Teléfono</span>,  // Icono en el título
    minWidth: '160px', 
    selector: 'telefono', 
    sortable: true, 
    cell: row => row.telefono || 'N/A' 
  },
  { 
    name: <span><FaUser size={16} className='mr-50' /> Usuario</span>,  // Icono en el título
    minWidth: '150px', 
    selector: 'usuario', 
    sortable: true, 
    cell: row => row.usuario || 'N/A' 
  },
  {
    name: <span><FaLock size={16} className='mr-50' /> Estado</span>,  // Icono en el título
>>>>>>> 13e913d (Actualización)
    minWidth: '138px',
    selector: 'status',
    sortable: true,
    cell: row => (
<<<<<<< HEAD
      <Badge className='text-capitalize' color={statusObj[row.status]} pill>
        {row.status}
=======
      <Badge className='text-capitalize' color={statusObj[row.status] || 'light-primary'} pill>
        {row.status === 1 ? 'Activo' : 'Inactivo'}
>>>>>>> 13e913d (Actualización)
      </Badge>
    )
  },
  {
<<<<<<< HEAD
    name: 'Actions',
=======
    
    name: 'Acciones',
    
>>>>>>> 13e913d (Actualización)
    minWidth: '100px',
    cell: row => (
      <UncontrolledDropdown>
        <DropdownToggle tag='div' className='btn btn-sm'>
          <MoreVertical size={14} className='cursor-pointer' />
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem
            tag={Link}
            to={`/apps/user/view/${row.id}`}
            className='w-100'
            onClick={() => store.dispatch(getUser(row.id))}
          >
            <FileText size={14} className='mr-50' />
<<<<<<< HEAD
            <span className='align-middle'>Details</span>
          </DropdownItem>
          <DropdownItem
            tag={Link}
            to={`/apps/user/edit/${row.id}`}
            className='w-100'
            onClick={() => store.dispatch(getUser(row.id))}
          >
            <Archive size={14} className='mr-50' />
            <span className='align-middle'>Edit</span>
          </DropdownItem>
          <DropdownItem className='w-100' onClick={() => store.dispatch(deleteUser(row.id))}>
            <Trash2 size={14} className='mr-50' />
            <span className='align-middle'>Delete</span>
=======
            <span className='align-middle'>Permisos</span>
          </DropdownItem>
          <DropdownItem
            className='w-100'
            onClick={() => {
              store.dispatch(getUser(row.id))
              handleEditUser(row) 
            }}
          >
            <Edit2 size={14} className='mr-50' />
            <span className='align-middle'>Editar</span>
          </DropdownItem>
          <DropdownItem
            tag='a'
            onClick={() => handleDeleteUser(row)}
          >
            <Trash2 size={14} className='mr-50' />
            <span className='align-middle'>Eliminar</span>
>>>>>>> 13e913d (Actualización)
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    )
  }
]
<<<<<<< HEAD
=======

>>>>>>> 13e913d (Actualización)
