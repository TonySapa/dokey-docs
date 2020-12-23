import React from 'react'
// syntax highlighter
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark, a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Alink from './../components/partials/Link.js';
import requestDemo from './../components/partials/requestDemo.js';

export const labels = {
  appName: 'dockee',
  appVersion: 'v.0.0.1',
  authorName: 'Toni',
  auhtorLink: 'https://www.tonisanchez.dev',
  sideBar: {
    searchPlaceholder: 'Search...',
    categories: [
      {
        id: 'Getting Started',
        children: [
          { id: 'About', link: '/about', sections: [
            {
              title: 'About',
              type: 'h1',
              paragraph: <p>Dockee docs is a React template to build software documentation in minutes with zero code just by modifying a JSX object.</p>
            },
            {
              title: 'Dependencies',
              type: 'h2',
              paragraph: <p>Dockee docs uses Material-UI library and react-syntax-highlighter. This can be optional on future versions.</p>
            },
            {
              title: 'The Author',
              type: 'h2',
              paragraph: <p>Dockee docs is a <b>free</b> and <b>open source project</b> (attribution required) developed by <Alink link={'https://www.tonisanchez.dev'} text='Toni Sánchez'/> but open to new contributions on future versions.</p>
            }
          ]},
          { id: 'Install', link: '/install', sections: [
            {
              title: 'Install',
              type: 'h1',
              paragraph: <p>Download or clone <Alink link={`htpps:/www.github.com/TonySapa/dockee-docs`} text='source files' /> and start using Dockee by following these steps:</p>
            },
            {
              title: 'Step 1: Install',
              type: 'h2',
              paragraph: <p><SyntaxHighlighter language="javascript" style={a11yDark}>npm install</SyntaxHighlighter></p>
            },
            {
              title: 'Step 2: Pick styles',
              type: 'h2',
              paragraph: 
                <p>Chose <b>primary</b> and <b>secondary</b> color. (Further customisation will be available on future versions): 
                  <SyntaxHighlighter language="javascript" style={a11yDark}>
                    {`// src/labels/labels.js\n\nexport const coreStyling = {\n  mainColor: '#6190E8',\n  color2: '#A7BFE8'\n}`}
                  </SyntaxHighlighter>
                </p>
            },
            {
              title: 'Step 3: Set the content inside labels.js',
              type: 'h2',
              paragraph: 
                <p>The constant 'labels' contains all you need to set your docs.
                  You don't need to modify anything else.<br/><br/>
                  On 'sideBar' field, content will be divided in different categories 
                  using <b>react-router</b>. These are the sections that will appear on 
                  sidebar. Categories contain 2 fields, 'id' and 'children'. The 'id' is the name that will be displayed on left side navigation. Children will 
                  contain an array with the different pages inside that section.<br/><br/>
                  
                  Each item of 'children' array contains 'id', 'link' and 'sections' fields.
                  Id is the name that will appear on left navigation bar. Link is the url path
                  to use with<b> react-router </b>. Sections will contain an array with all the
                  paragraphs on that page.<br /><br />

                  Inside each section, the name of the 'id' field will also be used for right navigation
                  links. You can specify jerarchy of the title on the field using <b>HTML </b>
                  syntax on the 'type' field, and styles will apply accordingly. The field named
                  paragraph is the content of that section.
                  <SyntaxHighlighter language="javascript" style={a11yDark} wrapLongLines={true}>
{`export const labels = {
  appName: "dockee",
  appVersion: "v.0.0.1",
  authorName: "Toni",
  auhtorLink: "https://www.tonisanchez.dev",
  sideBar: {
    searchPlaceholder: "Search...",
    categories: [
      {
        id: 'Getting Started',
        children: [
          { id: 'About', link: '/about', sections: [
            {
              title: 'About',
              type: 'h1',
              paragraph: <p>Dockee docs is a React template to...</p>
            },
            {
              title: 'Dependencies',
              type: 'h2',
              paragraph: <p>Dockee docs uses Material-UI...</p>
            },
            {
              title: 'The Author',
              type: 'h2',
              paragraph: <p>Dockee docs is a <b>free</b>...</p>
            }
          ]},
          { id: 'Install', link: '/install', sections: [
            {
              title: 'Install',
              type: 'h1',
              paragraph: <p>Download or clone...</p>
            },
            {
              title: 'Step 1: Install',
              type: 'h2',
              paragraph: <p>...</p>
            },
            {
              title: 'Step 2: Chose styles',
              type: 'h2',
              paragraph: <p>Chose <b>primary</b> and ...</p>
            },
            {
              title: 'Step 3: Set the content inside labels.js',
              type: 'h2',
              paragraph: <p>The constant 'labels' contains...</p>
            },
          ] }
        ],
      },
      {
        id: 'Core Sections',
        children: [
          { id: 'Lore Ipsum', link: '/lore-ipsum'},
          { id: 'Ipsum', link: '/ipsum'},
          { id: 'Lore', link: '/lore'},
          { id: 'Features', link: '/features'},
          { id: 'Toni', link: '/toni'},
          { id: 'Pricing', link: '/pricing'},
          { id: 'Last lore', link: '/last-lore'}
        ],
      }
    ]
  }
}
 `}
                  </SyntaxHighlighter>
                </p>
            },
          ] }
        ],
      },
      {
        id: 'Users',
        children: [
          { id: 'All users', req: 'GET', link: '/users', sections: [
            {
              title: 'All users',
              req: 'GET',
              type: 'h1',
              paragraph:
                <div>
                  <h2>GET all users</h2>
                  <p>This endpoint retrieves all users of the specified firm</p>
                  <br/>
                </div>
            },
            {
              title: 'HTTP Request',
              type: 'h3',
              paragraph:
                <div>
                  <SyntaxHighlighter language="javascript" style={a11yLight}>
                    GET https://api.demosite.com/users
                  </SyntaxHighlighter>
                  <br/>
                </div>
            },
            {
              title: 'Query Parameters',
              type: 'h3',
              paragraph:
                <div>
                  <table>
                    <tr>
                      <th>Parameter</th>
                      <th>Default</th>
                      <th>Description</th>
                    </tr>
                    <tr>
                      <td>admin</td>
                      <td>false</td>
                      <td>Only users with admin privileges</td>
                    </tr>
                    <tr>
                      <td>bin</td>
                      <td>false</td>
                      <td>Include previously deleted users</td>
                    </tr>
                  </table>
                  <br/>
                </div>
            },
            {
              title: 'Response',
              type: 'h3',
              paragraph:
              <div>
                <h4>Status code 200</h4>
                <SyntaxHighlighter language="javascript" style={a11yDark}>{
`[
  {
    id: 001,
    email: mail1@mail.com,
    username: user1,
    admin: true
  },
  {
    id: 002,
    email: mail2@mail.com,
    username: user2,
    admin: false
  }
]`
                }</SyntaxHighlighter>
                
                <h4>Status code 204</h4>
                <SyntaxHighlighter language="javascript" style={a11yDark}>{
  `{}`
                }</SyntaxHighlighter>

              </div>
            }
          ]},
          { id: 'Find user', req: 'GET', link: '/demo-ipsum', sections: [
            {
              title: 'Find user',
              req: 'GET',
              type: 'h1',
              paragraph: <p>Find a specific user</p>
            }
          ]},
          { id: 'Change email', req: 'PUT', link: '/change-email', sections: [
            {
              title: 'Change user email',
              req: 'PUT',
              type: 'h1',
              paragraph: <p>Change user email</p>
            }
          ]},
          { id: 'Delete user', req: 'DELETE', link:'/delete-user', sections: [
            {
              title: 'Permanently delete a user',
              req: 'DELETE',
              type: 'h1',
              paragraph: <p>Delete user</p>
            }
          ]}
        ],
      }
    ]
  }
}

export const coreStyling = {
  mainColor: '#6190E8',
  color2: '#A7BFE8',
  req: {
    GET: {
      background: '#6190E8',
      color: 'rgba(255,255,255,0.8)',
      fontSize: '0.8em',
      padding: '3px 10px',
      margin: '0 10px 0 0',
      borderRadius: '25px'
    },
    PUT: {
      background: 'orange',
      color: 'rgba(255,255,255,0.8)',
      fontSize: '0.8em',
      padding: '3px 10px',
      margin: '0 10px 0 0',
      borderRadius: '25px'
    },
    DELETE: {
      background: 'rgb(220,20,60,0.8)',
      color: 'rgba(255,255,255,0.8)',
      fontSize: '0.8em',
      padding: '3px 10px',
      margin: '0 10px 0 0',
      borderRadius: '25px'
    }
  }
}

export const customStyles = {
  navigator: {
    categoryHeaderPrimary: {
      color: 'rgba(0,0,0,0.7)'
    },
    item: {
      paddingTop: 1,
      paddingBottom: 1,
      color: 'rgba(0,0,0,0.7)',
      '&:hover,&:focus': {
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
      },
    },
    itemCategory: {
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
      boxShadow: '0 -1px 0 #404854 inset'
    },
    firebase: {
      fontSize: 24,
      color: 'rgba(0,0,0,0.7)',
    },
    itemActiveItem: { borderLeft: `5px solid ${coreStyling.color2}` },
    itemPrimary: {
      fontSize: 'inherit',
      paddingLeft: '5%'
    },
    itemIcon: {
      minWidth: 'auto',
    },
    version: {
      color:'rgba(0,0,0,0.5)',
      fontSize:'12px',
      marginLeft:'5px'
    },
    logo: {
      paddingRight: '5px',
      margin: '0px',
      fontSize: '52px',
      backgroundColor: `${coreStyling.color2}`,
      background: `-webkit-linear-gradient(315deg, ${coreStyling.color2} 0%, ${coreStyling.mainColor} 74%)`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      fontWeight: 500,
      letterSpacing: -5,
      textShadow: `0 0 50px ${coreStyling.mainColor}`,
      textAlign: 'center',
      fontFamily: "'Ubuntu', sans-serif"
    },
    tab: {textDecoration:'none', color:'rgba(0,0,0,0.6)'},
    tabText: {borderLeft: `5px solid ${coreStyling.mainColor}`}  
  },
  header: {
    lightColor: 'rgba(255, 255, 255, 0.7)',
    secondaryBar: {
      zIndex: 0,
    },
    iconButtonAvatar: {
      padding: 4,
    },
    link: {
      textDecoration: 'none'
    }
  },
  paperbase: {
    theme: {
      palette: {
        primary: {
          light: `${coreStyling.color2}`,
          main: '#fffff',
          dark: '#ef6da0',
        },
      },
      typography: {
        h5: {
          fontSize: '42px',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 500,
          letterSpacing: 0.5,
          textShadow: '0 0 30px rgba(0,0,0,0.3)'
        },
        h1: {
          color: 'red'
        }
      },
      shape: {
        borderRadius: 8,
      },
      props: {
        MuiTab: {
          disableRipple: true,
        },
      },
      mixins: {
        toolbar: {
          minHeight: 48,
        },
      }        
    }
  },
  links: {
    textDecoration: 'none',
    fontFamily: "'Ubuntu', sans-serif",
    color: coreStyling.mainColor,
    fontSize: '1.2rem'
  }
}

export default labels