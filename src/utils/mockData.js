export const status = [
  {
    id: '1',
    name: 'Enabled',
  },
  {
    id: '2',
    name: 'Disabled',
  },
];
export const project_manager = [
  {
    id: '1',
    name: 'Lionel Scaloni',
    avatar: 'https://i.pravatar.cc/300?img=6',
  },
  { id: '2', name: 'Edgardo Bauza', avatar: false },
  { id: 3, name: 'Alejandro Sabella', avatar: false },
];
export const assigned_to = [
  {
    id: '1',
    name: 'Leo Messi',
    avatar: 'https://i.pravatar.cc/300?img=1',
  },
  {
    id: '2',
    name: 'Gio Lo Celso',
    avatar: 'https://i.pravatar.cc/300?img=2',
  },
  {
    id: '3',
    name: 'Angel Di María',
    avatar: 'https://i.pravatar.cc/300?img=3',
  },
  {
    id: '4',
    name: 'Leandro Paredes',
    avatar: 'https://i.pravatar.cc/300?img=4',
  },
  {
    id: '5',
    name: 'Lautaro Martínez',
    avatar: 'https://i.pravatar.cc/300?img=5',
  },
];

const projects = [
  {
    id: '1',
    description: 'This is a description of the project',
    name: 'Project 1',
    date: '01/01/2020',
    project_manager: {
      id: 1,
      name: 'Lionel Scaloni',
      avatar: 'https://i.pravatar.cc/300?img=6',
    },
    assigned_to: {
      id: '3',
      name: 'Angel Di María',
      avatar: 'https://i.pravatar.cc/300?img=3',
    },
    status: {
      id: '1',
      name: 'Enabled',
    },
  },
  {
    id: '2',
    name: 'Project 2',
    date: '01/01/2020',
    project_manager: { id: '3', name: 'Alejandro Sabella', avatar: false },
    description: 'This is a description of the project',
    assigned_to: {
      id: '4',
      name: 'Leandro Paredes',
      avatar: 'https://i.pravatar.cc/300?img=4',
    },
    status: {
      id: '1',
      name: 'Enabled',
    },
  },
  {
    id: '3',
    description: 'This is a description of the project',
    name: 'Project 3',
    date: '01/01/2020',
    project_manager: { id: '3', name: 'Alejandro Sabella', avatar: false },
    assigned_to: {
      id: '2',
      name: 'Gio Lo Celso',
      avatar: 'https://i.pravatar.cc/300?img=2',
    },
    status: {
      id: '1',
      name: 'Enabled',
    },
  },
  {
    id: '4',
    description: 'This is a description of the project',
    name: 'Project 4',
    date: '01/01/2020',
    project_manager: {
      id: 1,
      name: 'Lionel Scaloni',
      avatar: 'https://i.pravatar.cc/300?img=6',
    },
    assigned_to: {
      id: '1',
      name: 'Leo Messi',
      avatar: 'https://i.pravatar.cc/300?img=1',
    },
    status: {
      id: '2',
      name: 'Disabled',
    },
  },
  {
    id: '5',
    name: 'Project 5',
    date: '01/01/2020',
    description: 'This is a description of the project',
    project_manager: { id: '3', name: 'Alejandro Sabella', avatar: false },
    assigned_to: {
      id: '3',
      name: 'Angel Di María',
      avatar: 'https://i.pravatar.cc/300?img=3',
    },
    status: {
      id: '1',
      name: 'Enabled',
    },
  },
  {
    id: '6',
    description: 'This is a description of the project',
    name: 'Project 6',
    date: '01/01/2020',
    project_manager: { id: '2', name: 'Edgardo Bauza', avatar: false },
    assigned_to: {
      id: '5',
      name: 'Lautaro Martínez',
      avatar: 'https://i.pravatar.cc/300?img=5',
    },
    status: {
      id: '1',
      name: 'Enabled',
    },
  },
  {
    id: '7',
    description: 'This is a description of the project',
    name: 'Project 7',
    date: '01/01/2020',
    project_manager: {
      id: '1',
      name: 'Lionel Scaloni',
      avatar: 'https://i.pravatar.cc/300?img=6',
    },
    assigned_to: {
      id: '4',
      name: 'Leandro Paredes',
      avatar: 'https://i.pravatar.cc/300?img=4',
    },
    status: {
      id: '1',
      name: 'Enabled',
    },
  },
  {
    id: '8',
    name: 'Project 8',
    date: '01/01/2020',
    project_manager: { id: '3', name: 'Alejandro Sabella', avatar: false },
    assigned_to: {
      id: '2',
      name: 'Gio Lo Celso',
      avatar: 'https://i.pravatar.cc/300?img=2',
    },
    status: {
      id: '1',
      name: 'Enabled',
    },
  },
  {
    id: '9',
    description: 'This is a description of the project',
    name: 'Project 9',
    date: '01/01/2020',
    project_manager: { id: '2', name: 'Edgardo Bauza', avatar: false },
    assigned_to: {
      id: '1',
      name: 'Leo Messi',
      avatar: 'https://i.pravatar.cc/300?img=1',
    },
    status: {
      id: '1',
      name: 'Enabled',
    },
  },
  {
    id: '10',
    name: 'Project 10',
    date: '01/01/2020',
    description: 'This is a description of the project',
    assigned_to: {
      id: '1',
      name: 'Leo Messi',
      avatar: 'https://i.pravatar.cc/300?img=1',
    },
    project_manager: { id: '2', name: 'Edgardo Bauza', avatar: false },
    status: {
      id: '1',
      name: 'Enabled',
    },
  },
];

export function getProjects() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(projects);
    }, 1000);
  });
}

// export function getProject(id) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(projects.filter(project => project.id !== id));
//     }, 500);
//   });
// }
export const getProject = id =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(projects.find(project => project.id === id));
    }, 500);
  });
