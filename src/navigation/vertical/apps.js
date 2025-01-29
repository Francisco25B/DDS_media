<<<<<<< HEAD
import { Mail, MessageSquare, CheckSquare, Calendar, FileText, Circle, ShoppingCart, User } from 'react-feather'

export default [
  {
    header: 'Apps & Pages'
  },
  {
    id: 'email',
    title: 'Email',
    icon: <Mail size={20} />,
=======
import { Home, DollarSign, FileText, BarChart, Users, Circle } from 'react-feather'

export default [
  {
    header: 'Acciones'
  },
  {
    id: 'email',
    title: 'Ingresos',
    icon: <Home size={20} />,  // Ícono de una casa o templo
>>>>>>> 13e913d (Actualización)
    navLink: '/apps/email'
  },
  {
    id: 'chat',
<<<<<<< HEAD
    title: 'Chat',
    icon: <MessageSquare size={20} />,
=======
    title: 'Egresos',
    icon: <DollarSign size={20} />,  // Ícono de billetes
>>>>>>> 13e913d (Actualización)
    navLink: '/apps/chat'
  },
  {
    id: 'todo',
<<<<<<< HEAD
    title: 'Todo',
    icon: <CheckSquare size={20} />,
=======
    title: 'Estado Resultado',
    icon: <BarChart size={20}/>,  // Ícono de hoja con gráficos
>>>>>>> 13e913d (Actualización)
    navLink: '/apps/todo'
  },
  {
    id: 'calendar',
<<<<<<< HEAD
    title: 'Calendar',
    icon: <Calendar size={20} />,
    navLink: '/apps/calendar'
  },
  {
    id: 'invoiceApp',
    title: 'Invoice',
    icon: <FileText size={20} />,
    children: [
      {
        id: 'invoiceList',
        title: 'List',
        icon: <Circle size={12} />,
        navLink: '/apps/invoice/list'
      },
      {
        id: 'invoicePreview',
        title: 'Preview',
        icon: <Circle size={12} />,
        navLink: '/apps/invoice/preview'
      },
      {
        id: 'invoiceEdit',
        title: 'Edit',
        icon: <Circle size={12} />,
        navLink: '/apps/invoice/edit'
      },
      {
        id: 'invoiceAdd',
        title: 'Add',
        icon: <Circle size={12} />,
        navLink: '/apps/invoice/add'
      }
    ]
  },
  {
    id: 'eCommerce',
    title: 'eCommerce',
    icon: <ShoppingCart size={20} />,
    children: [
      {
        id: 'shop',
        title: 'Shop',
        icon: <Circle size={12} />,
        navLink: '/apps/ecommerce/shop'
      },
      {
        id: 'detail',
        title: 'Details',
        icon: <Circle size={12} />,
        navLink: '/apps/ecommerce/product-detail'
      },
      {
        id: 'wishList',
        title: 'Wish List',
        icon: <Circle size={12} />,
        navLink: '/apps/ecommerce/wishlist'
      },
      {
        id: 'checkout',
        title: 'Checkout',
        icon: <Circle size={12} />,
        navLink: '/apps/ecommerce/checkout'
      }
    ]
  },
  {
    id: 'users',
    title: 'User',
    icon: <User size={20} />,
    children: [
      {
        id: 'list',
        title: 'List',
        icon: <Circle size={12} />,
        navLink: '/apps/user/list'
      },
      {
        id: 'view',
        title: 'View',
        icon: <Circle size={12} />,
        navLink: '/apps/user/view'
      },
      {
        id: 'edit',
        title: 'Edit',
        icon: <Circle size={12} />,
        navLink: '/apps/user/edit'
      }
    ]
=======
    title: 'Reporte General',
    icon: <FileText size={20}  />,  // Ícono de gráficos (estadísticas)
    navLink: '/apps/calendar'
  },
  {
    id: 'list',
    title: 'Usuarios',
    icon: <Users size={20} />,
    navLink: '/apps/user/list'  // Ícono de grupo de personas
>>>>>>> 13e913d (Actualización)
  }
]
