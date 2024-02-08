// dragonsServices.js
// services/DragonsServices.js

// dragonsServices.js

// services/dragonsService.js
// Assuming you have a service to fetch dragons from an API
export const fetchDragons = async () => {
    try {
      const response = await fetch('https://api.spacexdata.com/v3/dragons');
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Failed to fetch dragons');
    }
  };
  
