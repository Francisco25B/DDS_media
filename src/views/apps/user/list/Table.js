<<<<<<< HEAD
// ** React Imports
=======
>>>>>>> 13e913d (Actualización)
import { Fragment, useState, useEffect } from 'react'

// ** Invoice List Sidebar
import Sidebar from './Sidebar'
<<<<<<< HEAD
=======
import { FaPlus } from 'react-icons/fa'

>>>>>>> 13e913d (Actualización)

// ** Columns
import { columns } from './columns'

// ** Store & Actions
<<<<<<< HEAD
import { getAllData, getData } from '../store/action'
=======
import { getAllData, getData, fetchUser } from '../store/action'
>>>>>>> 13e913d (Actualización)
import { useDispatch, useSelector } from 'react-redux'

// ** Third Party Components
import Select from 'react-select'
import ReactPaginate from 'react-paginate'
import { ChevronDown } from 'react-feather'
import DataTable from 'react-data-table-component'
import { selectThemeColors } from '@utils'
import { Card, CardHeader, CardTitle, CardBody, Input, Row, Col, Label, CustomInput, Button } from 'reactstrap'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'

// ** Table Header
const CustomHeader = ({ toggleSidebar, handlePerPage, rowsPerPage, handleFilter, searchTerm }) => {
  return (
    <div className='invoice-list-table-header w-100 mr-1 ml-50 mt-2 mb-75'>
      <Row>
        <Col xl='6' className='d-flex align-items-center p-0'>
          <div className='d-flex align-items-center w-100'>
            <Label for='rows-per-page'>Show</Label>
            <CustomInput
              className='form-control mx-50'
              type='select'
              id='rows-per-page'
              value={rowsPerPage}
              onChange={handlePerPage}
              style={{
                width: '5rem',
                padding: '0 0.8rem',
                backgroundPosition: 'calc(100% - 3px) 11px, calc(100% - 20px) 13px, 100% 0'
              }}
            >
              <option value='10'>10</option>
              <option value='25'>25</option>
              <option value='50'>50</option>
            </CustomInput>
            <Label for='rows-per-page'>Entries</Label>
          </div>
        </Col>
        <Col
          xl='6'
          className='d-flex align-items-sm-center justify-content-lg-end justify-content-start flex-lg-nowrap flex-wrap flex-sm-row flex-column pr-lg-1 p-0 mt-lg-0 mt-1'
        >
          <div className='d-flex align-items-center mb-sm-0 mb-1 mr-1'>
            <Label className='mb-0' for='search-invoice'>
<<<<<<< HEAD
              Search:
=======
              Buscar:
>>>>>>> 13e913d (Actualización)
            </Label>
            <Input
              id='search-invoice'
              className='ml-50 w-100'
              type='text'
              value={searchTerm}
              onChange={e => handleFilter(e.target.value)}
<<<<<<< HEAD
            />
          </div>
          <Button.Ripple color='primary' onClick={toggleSidebar}>
            Add New User
          </Button.Ripple>
=======
              placeholder="Buscar... "
            />
          </div>
          <Button.Ripple color='primary' onClick={toggleSidebar}>
  <FaPlus size={18} className='mr-50' /> 
  Nuevo Usuario
</Button.Ripple>

>>>>>>> 13e913d (Actualización)
        </Col>
      </Row>
    </div>
  )
}

const UsersList = () => {
  // ** Store Vars
  const dispatch = useDispatch()
  const store = useSelector(state => state.users)

  // ** States
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [sidebarOpen, setSidebarOpen] = useState(false)
<<<<<<< HEAD
  const [currentRole, setCurrentRole] = useState({ value: '', label: 'Select Role' })
  const [currentPlan, setCurrentPlan] = useState({ value: '', label: 'Select Plan' })
  const [currentStatus, setCurrentStatus] = useState({ value: '', label: 'Select Status', number: 0 })
=======
  const [currentRole, setCurrentRole] = useState({ value: '', label: 'Selecciona Rol' })
  const [currentStatus, setCurrentStatus] = useState({ value: '', label: 'Selecciona Estado', number: 0 })
>>>>>>> 13e913d (Actualización)

  // ** Function to toggle sidebar
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

<<<<<<< HEAD
  // ** Get data on mount
=======
  // ** Get data on mount or when filters change
>>>>>>> 13e913d (Actualización)
  useEffect(() => {
    dispatch(getAllData())
    dispatch(
      getData({
<<<<<<< HEAD
        page: currentPage,
        perPage: rowsPerPage,
        role: currentRole.value,
        currentPlan: currentPlan.value,
        status: currentStatus.value,
        q: searchTerm
      })
    )
  }, [dispatch, store.data.length])

  // ** User filter options
  const roleOptions = [
    { value: '', label: 'Select Role' },
    { value: 'admin', label: 'Admin' },
    { value: 'author', label: 'Author' },
    { value: 'editor', label: 'Editor' },
    { value: 'maintainer', label: 'Maintainer' },
    { value: 'subscriber', label: 'Subscriber' }
  ]

  const planOptions = [
    { value: '', label: 'Select Plan' },
    { value: 'basic', label: 'Basic' },
    { value: 'company', label: 'Company' },
    { value: 'enterprise', label: 'Enterprise' },
    { value: 'team', label: 'Team' }
  ]

  const statusOptions = [
    { value: '', label: 'Select Status', number: 0 },
    { value: 'pending', label: 'Pending', number: 1 },
    { value: 'active', label: 'Active', number: 2 },
    { value: 'inactive', label: 'Inactive', number: 3 }
  ]

  // ** Function in get data on page change
  const handlePagination = page => {
    dispatch(
      getData({
        page: page.selected + 1,
        perPage: rowsPerPage,
        role: currentRole.value,
        currentPlan: currentPlan.value,
        status: currentStatus.value,
        q: searchTerm
      })
    )
    setCurrentPage(page.selected + 1)
  }

  // ** Function in get data on rows per page
  const handlePerPage = e => {
    const value = parseInt(e.currentTarget.value)
    dispatch(
      getData({
        page: currentPage,
        perPage: value,
        role: currentRole.value,
        currentPlan: currentPlan.value,
        status: currentStatus.value,
        q: searchTerm
      })
    )
    setRowsPerPage(value)
  }

  // ** Function in get data on search query change
  const handleFilter = val => {
    setSearchTerm(val)
=======
        page: currentPage,             // Paginación: página actual
        perPage: rowsPerPage,          // Paginación: registros por página
        tipo_usuario_id: currentRole.value, // Usamos tipo_usuario_id en lugar de role
        status: currentStatus.value,   // Filtrar por estado
        q: searchTerm                  // Filtrar por término de búsqueda
      })
    )
  }, [dispatch, currentPage, rowsPerPage, currentRole, currentStatus, searchTerm])
  

  // ** Function to handle search query change
  const handleFilter = val => {
    setSearchTerm(val)  // Actualiza el término de búsqueda
>>>>>>> 13e913d (Actualización)
    dispatch(
      getData({
        page: currentPage,
        perPage: rowsPerPage,
<<<<<<< HEAD
        role: currentRole.value,
        currentPlan: currentPlan.value,
        status: currentStatus.value,
        q: val
      })
    )
  }

  // ** Custom Pagination
  const CustomPagination = () => {
    const count = Number(Math.ceil(store.total / rowsPerPage))

    return (
      <ReactPaginate
        previousLabel={''}
        nextLabel={''}
        pageCount={count || 1}
        activeClassName='active'
        forcePage={currentPage !== 0 ? currentPage - 1 : 0}
        onPageChange={page => handlePagination(page)}
        pageClassName={'page-item'}
        nextLinkClassName={'page-link'}
        nextClassName={'page-item next'}
        previousClassName={'page-item prev'}
        previousLinkClassName={'page-link'}
        pageLinkClassName={'page-link'}
        containerClassName={'pagination react-paginate justify-content-end my-2 pr-1'}
      />
    )
  }

  // ** Table data to render
  const dataToRender = () => {
    const filters = {
      role: currentRole.value,
      currentPlan: currentPlan.value,
      status: currentStatus.value,
      q: searchTerm
    }

    const isFiltered = Object.keys(filters).some(function (k) {
      return filters[k].length > 0
    })

    if (store.data.length > 0) {
      return store.data
    } else if (store.data.length === 0 && isFiltered) {
      return []
    } else {
      return store.allData.slice(0, rowsPerPage)
=======
        tipo_usuario_id: currentRole.value, // Mantenemos el filtro de tipo_usuario_id
        status: currentStatus.value,         // Mantenemos el filtro de estado
        q: val                               // Actualiza los resultados con el nuevo término de búsqueda
      })
    )
  }
  

  // ** Table data to render
  const dataToRender = () => {
    if (store.data && Array.isArray(store.data)) {
      return store.data
    } else if (store.allData && Array.isArray(store.allData.data)) {
      return store.allData.data
    } else {
      return []
>>>>>>> 13e913d (Actualización)
    }
  }

  return (
    <Fragment>
      <Card>
        <CardHeader>
<<<<<<< HEAD
          <CardTitle tag='h4'>Search Filter</CardTitle>
=======
          <CardTitle tag='h4'>Filtro de Búsqueda</CardTitle>
>>>>>>> 13e913d (Actualización)
        </CardHeader>
        <CardBody>
          <Row>
            <Col md='4'>
              <Select
                isClearable={false}
                theme={selectThemeColors}
                className='react-select'
                classNamePrefix='select'
<<<<<<< HEAD
                options={roleOptions}
                value={currentRole}
                onChange={data => {
                  setCurrentRole(data)
                  dispatch(
                    getData({
                      page: currentPage,
                      perPage: rowsPerPage,
                      role: data.value,
                      currentPlan: currentPlan.value,
                      status: currentStatus.value,
                      q: searchTerm
                    })
                  )
                }}
              />
            </Col>
            <Col className='my-md-0 my-1' md='4'>
              <Select
                theme={selectThemeColors}
                isClearable={false}
                className='react-select'
                classNamePrefix='select'
                options={planOptions}
                value={currentPlan}
                onChange={data => {
                  setCurrentPlan(data)
                  dispatch(
                    getData({
                      page: currentPage,
                      perPage: rowsPerPage,
                      role: currentRole.value,
                      currentPlan: data.value,
                      status: currentStatus.value,
                      q: searchTerm
                    })
                  )
                }}
=======
                options={[
                  { value: '', label: 'Todos' },
                  { value: 1, label: 'Cliente' },
                  { value: 2, label: 'Adminstrador' },
                  { value: 3, label: 'Proveedor' }
                ]}
                value={currentRole}
                onChange={data => setCurrentRole(data)} // Actualizamos el rol seleccionado
>>>>>>> 13e913d (Actualización)
              />
            </Col>
            <Col md='4'>
              <Select
<<<<<<< HEAD
                theme={selectThemeColors}
                isClearable={false}
                className='react-select'
                classNamePrefix='select'
                options={statusOptions}
                value={currentStatus}
                onChange={data => {
                  setCurrentStatus(data)
                  dispatch(
                    getData({
                      page: currentPage,
                      perPage: rowsPerPage,
                      role: currentRole.value,
                      currentPlan: currentPlan.value,
                      status: data.value,
                      q: searchTerm
                    })
                  )
                }}
=======
                isClearable={false}
                theme={selectThemeColors}
                className='react-select'
                classNamePrefix='select'
                options={[
                  { value: 1, label: 'Activo' },
                  { value: '', label: 'Todos' },
                 
                  { value: 0, label: 'Inactivo' }
                ]}
                value={currentStatus}
                onChange={data => setCurrentStatus(data)} // Actualizamos el estado seleccionado
>>>>>>> 13e913d (Actualización)
              />
            </Col>
          </Row>
        </CardBody>
      </Card>

      <Card>
        <DataTable
          noHeader
          pagination
          subHeader
          responsive
          paginationServer
          columns={columns}
          sortIcon={<ChevronDown />}
          className='react-dataTable'
<<<<<<< HEAD
          paginationComponent={CustomPagination}
=======
          paginationComponent={() => (
            <ReactPaginate
              previousLabel={''}
              nextLabel={''}
              pageCount={Math.ceil(store.total / rowsPerPage) || 1}
              activeClassName='active'
              forcePage={currentPage - 1}
              onPageChange={page => setCurrentPage(page.selected + 1)}
              containerClassName={'pagination react-paginate'}
            />
          )}
>>>>>>> 13e913d (Actualización)
          data={dataToRender()}
          subHeaderComponent={
            <CustomHeader
              toggleSidebar={toggleSidebar}
<<<<<<< HEAD
              handlePerPage={handlePerPage}
=======
              handlePerPage={e => setRowsPerPage(Number(e.target.value))}
>>>>>>> 13e913d (Actualización)
              rowsPerPage={rowsPerPage}
              searchTerm={searchTerm}
              handleFilter={handleFilter}
            />
          }
        />
      </Card>

      <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} />
    </Fragment>
  )
}

export default UsersList
