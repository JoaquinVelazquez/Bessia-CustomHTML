const menu = [
  {
    name: 'Test category 1',
    url: '',
  },
  {
    name: 'Test category 2',
    url: '',
  },
  {
    name: 'Test category 3',
    url: '',
    nodes: [
      {
        name: 'Test Subcategory 1',
        url: '',
      },
      {
        name: 'Test Subcategory 2',
        url: '',
        nodes: [
          {
            name: 'Test Attribute 1',
            url: '',
          },
          {
            name: 'Test Attribute 2',
            url: '',
          },
          {
            name: 'Test Attribute 3',
            url: '',
          },
        ],
      },
      {
        name: 'Test Subcategory 3',
        url: '',
        nodes: [
          {
            name: 'Test Attribute 4',
            url: '',
          },
          {
            name: 'Test Attribute 5',
            url: '',
          },
          {
            name: 'Test Attribute 6',
            url: '',
          },
        ],
      },
      {
        name: 'Test Subcategory 4',
        url: '',
        nodes: [
          {
            name: 'Test Attribute 7',
            url: '',
          },
          {
            name: 'Test Attribute 8',
            url: '',
          },
          {
            name: 'Test Attribute 9',
            url: '',
          },
        ],
      },
      {
        name: 'Test Subcategory 5',
        url: '',
        nodes: [
          {
            name: 'Test Attribute 10',
            url: '',
          },
          {
            name: 'Test Attribute 11',
            url: '',
          },
          {
            name: 'Test Attribute 12',
            url: '',
          },
        ],
      },
      {
        name: 'Test Subcategory 6',
        url: '',
        nodes: [
          {
            name: 'Test Attribute 13',
            url: '',
          },
          {
            name: 'Test Attribute 14',
            url: '',
          },
          {
            name: 'Test Attribute 15',
            url: '',
          },
        ],
      },
      {
        name: 'Test Subcategory 7',
        url: '',
        nodes: [
          {
            name: 'Test Attribute 16',
            url: '',
          },
          {
            name: 'Test Attribute 17',
            url: '',
          },
          {
            name: 'Test Attribute 18',
            url: '',
          },
        ],
      },
      {
        name: 'Test Subcategory 8',
        url: '',
        nodes: [
          {
            name: 'Test Attribute 19',
            url: '',
          },
          {
            name: 'Test Attribute 20',
            url: '',
          },
          {
            name: 'Test Attribute 21',
            url: '',
          },
        ],
      },
    ],
  },
];

const dataMock = {
  header: {
    logo: 'https://iili.io/DwxDZX.png',
    name: 'Test Shop',
    home_url: '',
    flash: {
      enabled: true,
      message: "Flash custom meessage",
      tooltip_message: "Flash action custom message",
      trigger_message: "",
      action: {
        message: "Trigger message",
        href: "#section-info"
      }
    },
    bannerStyles: '',
    contact: { label: 'Contact Us', href: '/contacto' },
    cart: { label: 'Cart', href: '/gz/cart' },
    cartInfo: 5,
    i18n: { search: 'Search', searchPlaceholder: 'Search...' },
    headerAdditionalClasses: 'header-wrapper--with-flash with-hamburguer-menu',
    headerTransparent: '0,0,0,.8',
    sale: {
      text: 'sale',
      url: ''
    },
    menu,
  },
  footer: {
    logo: 'https://iili.io/DwxDZX.png',
    name: 'Test Shop',
    logoCaption: '<p>Custom text message</p>',
    mobileExtraClass: 'nav-bounds-large', // optional class, only for mobile
    footerEditableClass: 'nav-footer--editable', // optional class, editable footer
    email: 'test@shop.com',
    phone: {
      raw: '+5412344567',
      formatted: '12344567'
    },
    socialNetworks: [
      {
        account: 'facebook test',
        name: 'facebook',
        url: 'https://www.facebook.com/test_shop',
      },
      {
        account: 'instagram test',
        name: 'instagram',
        url: 'https://www.instagram.com/test_shop',
      },
      {
        account: 'twitter tes',
        name: 'twitter',
        url: 'https://twitter.com/test_shop',
      },
    ],
    address: {
      address: 'Test Address 123',
      city: 'Test city',
      state: 'Test state'
    },
    i18n: {
      contact: 'Test contact text',
      powered_by: 'Powered by Mercado Shops'
    },
    showContact: true,
    showEmail: true,
    showAddress: false,
    showPhone: true,
    showBusinessData: false, // just BR, only if data is present and user wants to show it
    showQrData: true, // just AR, only if QR is present and user wants to show it
    fiscalData: {
      legal_name: 'Test legal name', // just BR
      legal_doc: '12345', // just BR
      qr_img: 'https://gprinting.net/img/QR-AFIP.jpg', // just AR
      qr_link: 'https://www.afip.gob.ar' // just AR
    },
    menu,
  }
};

module.exports = { dataMock };
