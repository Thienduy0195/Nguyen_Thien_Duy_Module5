export const contracts = [
  {
    id: 1,
    customer: {
      id: 1,
      code: 'KH-0001',
      name: 'Nguyen Van A',
      birthday: '1990-02-02',
      gender: '1',
      idCard: '200814514',
      phoneNumber: '0915254154',
      email: 'nguyenvana@codegym.com',
      address: 'Da Nang',
      customerType: {
        id: 5,
        name: 'Member'
      }
    },
    service: {
      id: 1,
      name: 'Ocean Villa',
      area: 140,
      cost: 89,
      maxPeople: 4,
      serviceType: {
        id: 1,
        name: 'Villa'
      },
      roomStandard: '5 star',
      otherConvenient: 'Sea View',
      poolArea: 30,
      numberOfFloors: 3,
      rentType: {
        id: 3,
        name: 'year'
      },
      img: 'hotel.jpg'
    },
    startDate: '2002-01-02',
    endDate: '2002-01-05',
    deposit: 3460000,
  },
  {
    id: 2,
    customer: {
      id          : 2,
      code        : 'KH-0002',
      name        : 'Nguyen Van B',
      birthday    : '1990-02-02',
      gender      : '1',
      idCard      : '20084585895',
      phoneNumber : '0906254154',
      email       : 'nguyenvanb@codegym.com',
      address     : 'Quang Nam',
      customerType: {
        id  : 3,
        name: 'Gold'
      }
    },
    service: {
      id: 3,
      name: 'Western Villa',
      area: 90,
      cost: 59,
      maxPeople: 3,
      serviceType: {
        id: 1,
        name: 'Villa'
      },
      roomStandard: '5 star',
      otherConvenient: 'Forest',
      poolArea: 20,
      numberOfFloors: 3,
      rentType: {
        id: 1,
        name: 'day'
      },
      img: 'hotel.jpg'
    },
    startDate: '2002-01-02',
    endDate: '2002-01-05',
    deposit: 23000000,
  },
  {
    id: 3,
    customer: {
      id          : 3,
      code        : 'KH-0003',
      name        : 'Nguyen Hong Ngan',
      birthday    : '1996-02-02',
      gender      : '0',
      idCard      : '204859686',
      phoneNumber : '0906474857',
      email       : 'hongngan@gmail.com',
      address     : 'Quang Binh',
      customerType: {
        id  : 2,
        name: 'Platinum'
      }
    },
    service: {
      id: 3,
      name: 'Western Villa',
      area: 90,
      cost: 59,
      maxPeople: 3,
      serviceType: {
        id: 1,
        name: 'Villa'
      },
      roomStandard: '5 star',
      otherConvenient: 'Forest',
      poolArea: 20,
      numberOfFloors: 3,
      rentType: {
        id: 1,
        name: 'day'
      },
      img: 'hotel.jpg'
    },
    startDate: '2002-01-02',
    endDate: '2002-01-05',
    deposit: 10890000,
  },
  {
    id: 4,
    customer: {
      id          : 2,
      code        : 'KH-0002',
      name        : 'Nguyen Van B',
      birthday    : '1990-02-02',
      gender      : '1',
      idCard      : '20084585895',
      phoneNumber : '0906254154',
      email       : 'nguyenvanb@codegym.com',
      address     : 'Quang Nam',
      customerType: {
        id  : 3,
        name: 'Gold'
      }
    },
    service: {
      id: 4,
      name: 'Western House',
      area: 45,
      cost: 39,
      maxPeople: 2,
      serviceType: {
        id: 2,
        name: 'House'
      },
      roomStandard: '4 star',
      otherConvenient: 'AC',
      numberOfFloors: 2,
      rentType: {
        id: 1,
        name: 'day'
      },
      img: 'studio.jpeg'
    },
    startDate: '2002-01-02',
    endDate: '2002-01-05',
    deposit: 1045000,
  },
  {
    id: 5,
    customer: {
      id          : 2,
      code        : 'KH-0002',
      name        : 'Nguyen Van B',
      birthday    : '1990-02-02',
      gender      : '1',
      idCard      : '20084585895',
      phoneNumber : '0906254154',
      email       : 'nguyenvanb@codegym.com',
      address     : 'Quang Nam',
      customerType: {
        id  : 3,
        name: 'Gold'
      }
    },
    service: {
      id: 5,
      name: 'Winter House',
      area: 40,
      cost: 42,
      maxPeople: 3,
      serviceType: {
        id: 2,
        name: 'House'
      },
      roomStandard: '4 star',
      otherConvenient: 'AC',
      numberOfFloors: 1,
      rentType: {
        id: 2,
        name: 'month'
      },
      img: 'studio.jpeg'
    },
    startDate: '2002-01-02',
    endDate: '2002-01-05',
    deposit: 780000,
  },
];
