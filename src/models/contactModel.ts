// contactModel.ts

// Define the interface for a contact item
interface Contact {
    resourceName: string;
    displayName?: string;
    mobile?: string;
  }
  
  // Example data for demonstration purposes
  const exampleContacts: Contact[] = [
    {
      resourceName: '1',
      displayName: 'John Doe',
      mobile: '123-456-7890',
    },
    {
      resourceName: '2',
      displayName: 'Jane Smith',
      mobile: '987-654-3210',
    },
    // Add more contact items as needed
  ];
  
  export { Contact, exampleContacts };
  