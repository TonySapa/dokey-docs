// Later override with mongodb data from server response

const content = {
  appName: null,//'dokey',
  logo: 
    <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.7">
        <path d="M26.6667 0.333344V0.333344C34.0305 0.333344 40 6.30289 40 13.6667V13.6667H26.6667V0.333344Z" fill="#52D232"/>
        <rect x="13.3333" y="0.333344" width="13.3333" height="13.3333" fill="#32A2D2"/>
        <rect y="0.333344" width="13.3333" height="13.3333" fill="#B232D2"/>
        <rect y="13.6667" width="13.3333" height="13.3333" fill="#D26232"/>
        <rect y="27" width="13.3333" height="13.3333" fill="#52D232"/>
        <rect x="13.3333" y="27" width="13.3333" height="13.3333" fill="#32A2D2"/>
        <path d="M26.6667 27H40V27C40 34.3638 34.0305 40.3333 26.6666 40.3333V40.3333V27Z" fill="#B232D2"/>
        <rect x="26.6667" y="13.6667" width="13.3333" height="13.3333" fill="#D26232"/>
      </g>
    </svg>,
  sections: [
    {
      name: 'Getting Started',
      subSections: [
        {
          name: 'Introduction',
          id: 'introduction',
          paragraphs: [
            `These docs will guide you through integrating with ticktax.io and demonstrate how to use our product.`,
            `In addition to these docs, you can also find helpful information about integrating with ticktax.io in our Help Center`,
            <>
              <p /*style={mainStyles.typoEmphasized}*/>The docs are organized into five main groups:</p>
              <ul style={{ paddingLeft: '25px' }}>
                <li key={'Users'} style={{ marginBottom: '10px' }}>Users. Each account can have a limited number of users with different admin privileges.</li>
                <li key={'Companies'} style={{ marginBottom: '10px' }}>Companies. It refers about the direct customers of the accounting firm</li>
                <li key={'Payables'} style={{ marginBottom: '10px' }}>Payables. The suppliers of a selected company</li>
                <li key={'Receivables'} style={{ marginBottom: '10px' }}>Receivables. The clients of a selected company</li>
                <li key={'Banks'} style={{ marginBottom: '10px' }}>Banks. Accounts of a selected company</li>
              </ul>
            </>
          ]
        }
      ]
    },
    {
      name: 'Use cases',
      subSections: [
        {
          name: 'Users',
          id: 'users',
          paragraphs: null,
          parts: [
            {
              name: 'Managing Users',
              id: 'managing-users',
              paragraphs: null,
              requests: [
                {
                  title: 'Add a new User',
                  req: 'post',
                  description: "Use this endpoint to create a new User account within your firm. There's a limit of users for each type of account. See more.",
                  link: 'https://ticktax.io/api/API_TOKEN/users',
                  attributes: [
                    {
                      name: 'id',
                      type: 'number',
                      description: 'Id of a post.'
                    },
                    {
                      name: 'description',
                      type: 'string',
                      description: 'Charge description.'
                    }
                  ],
                  headersDemo: 'Content-Type: application/json\nAuthorization: bearer API_TOKEN\n\n{\n  "id": "4733",\n  "demo": "lore ipsum"\n}'
                },
                {
                  title: 'Remove existing User',
                  req: 'delete',
                  description: "Use this endpoint to delete an existing User account within your firm. This action is restorable within 90 days, after that period, user will be permanently removed and not recoverable.",
                  link: 'https://ticktax.io/api/API_TOKEN/users',
                  attributes: [
                    {
                      name: 'id',
                      type: 'number',
                      description: 'Id of the user.'
                    },
                    {
                      name: 'remove',
                      type: 'string',
                      description: 'Charge description remove.'
                    }
                  ],
                  headersDemo: 'Content-Type: application/json\nAuthorization: bearer API_TOKEN'
                },
                {
                  title: 'Permanently delete User',
                  req: 'delete',
                  description: "Use this endpoint to permanently delete a User account. Data of the account will be permanently deleted and can not be restored.",
                  link: 'https://ticktax.io/api/API_TOKEN/users',
                  attributes: [
                    {
                      name: 'id',
                      type: 'number',
                      description: 'Id of the user.'
                    },
                    {
                      name: 'remove',
                      type: 'string',
                      description: 'Charge description remove.'
                    }
                  ],
                  headersDemo: 'Content-Type: application/json\nAuthorization: bearer API_TOKEN'
                }
              ]
            },
            {
              name: 'Admin privileges',
              id: 'admin-privileges',
              paragraphs: null,
              requests: [
                {
                  title: 'Create new Admin User',
                  req: 'post',
                  description: "Use this endpoint to create a new User with admin privileges.",
                  link: 'https://ticktax.io/api/API_TOKEN/users',
                  attributes: [
                    {
                      name: 'id',
                      type: 'number',
                      description: 'Id of a post.'
                    },
                    {
                      name: 'description',
                      type: 'string',
                      description: 'Charge description.'
                    }
                  ],
                  headersDemo: 'Content-Type: application/json\nAuthorization: bearer API_TOKEN\n\n{\n  "id": "4733",\n  "demo": "lore ipsum"\n}'
                },
                {
                  title: 'Give admin privileges',
                  req: 'put',
                  description: "Use this endpoint to give admin privileges to an existing User.",
                  link: 'https://ticktax.io/api/API_TOKEN/users',
                  attributes: [
                    {
                      name: 'id',
                      type: 'number',
                      description: 'Id of the user.'
                    },
                    {
                      name: 'remove',
                      type: 'string',
                      description: 'Charge description remove.'
                    }
                  ],
                  headersDemo: 'Content-Type: application/json\nAuthorization: bearer API_TOKEN'
                }
              ]
            }
          ]
        },
        {
          name: 'Companies',
          id: 'companies'
        },
        {
          name: 'Payables',
          id: 'payables'
        },
        {
          name: 'Receivables',
          id: 'receivables'
        },
        {
          name: 'Banks',
          id: 'banks'
        }
      ]
    }
  ]
}

export default content