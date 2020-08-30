import { Injectable } from '@angular/core';

@Injectable()
export class PropertiesService
{
    getProperties()
	  {
		  return props;
    }

    getPropertyById(id:number)
	  {
		  return props.find(property=>property.id === id);
	  }
}

const props:any = [
    {
        id:1,
        name: 'Bibola House',
        price: 90000,
        builtUpArea: '1440 sq. ft.',
        carpetArea: '1440 sq. ft.',
        configuration: '3 Bedrooms, 3 Bathrooms, Others',
        facing: 'East',
        age: '3 years',
        type: 'Individual House',
        location: {
        address: '1 Park Avenue',
        city: 'New York',
        country: 'United States of America'
        },
      facilities: [
        {
          id: 1,
          name: "Power Back Up",
          description: `The house has full 24 hour power back-up. The back-up has capacity to run all equipments of the house.`,
          likes: ['bradgreen', 'igorminar', 'martinfowler']
        },
        {
          id: 2,
          name: "Rain Water Harvesting",
          description: `The house multiple rain water harvesting points. From the roof water flows down to these points to sink in the ground.`,
          likes: ['johnpapa', 'bradgreen', 'igorminar', 'martinfowler']
        },
        {
          id: 3,
          name: "Club House",
          description: `The house is equipped with a club house which has gym, spa and swmimming pool in its sprawling large green garden.`,
          likes: []
        },
        {
          id: 4,
          name: "Water Storage",
          description: `The house has large water storage capcacity run the house in case of water shortages for 2 complete months.`,
          likes: []
        },
        {
          id: 5,
          name: "Visitor Parking",
          description: `The house has a large visitor parking with capacity to park 20 visitor cars.`,
          likes: ['bradgreen', 'igorminar']
        }
      ]
    },
    {
      id:2,
        name: 'Hill Ridge',
        price: 90000,
        builtUpArea: '1440 sq. ft.',
        carpetArea: '1440 sq. ft.',
        configuration: '3 Bedrooms, 3 Bathrooms, Others',
        age: '9 years',
        type: 'Individual House',
        location: {
        address: '1 Park Avenue',
        city: 'New York',
        country: 'United States of America'
        },
      facilities: [
        {
          id: 1,
          name: "Power Back Up",
          description: `The house has full 24 hour power back-up. The back-up has capacity to run all equipments of the house.`,
          likes: ['bradgreen', 'igorminar', 'martinfowler']
        },
        {
          id: 2,
          name: "Rain Water Harvesting",
          description: `The house multiple rain water harvesting points. From the roof water flows down to these points to sink in the ground.`,
          likes: ['johnpapa', 'bradgreen', 'igorminar', 'martinfowler']
        },
        {
          id: 3,
          name: "Club House",
          description: `The house is equipped with a club house which has gym, spa and swmimming pool in its sprawling large green garden.`,
          likes: []
        }
      ]
    },
    {
      id:3,
        name: 'Parents Blessings',
        price: 390000,
        builtUpArea: '3440 sq. ft.',
        carpetArea: '3440 sq. ft.',
        configuration: '4 Bedrooms, 6 Bathrooms, Others',
        age: '5 years',
        type: 'Individual House',
        location: {
        address: '4 Park Avenue',
        city: 'New York',
        country: 'United States of America'
        },
      facilities: [
        {
          id: 1,
          name: "Power Back Up",
          description: `The house has full 24 hour power back-up. The back-up has capacity to run all equipments of the house.`,
          likes: ['bradgreen', 'igorminar', 'martinfowler']
        },
        {
          id: 2,
          name: "Rain Water Harvesting",
          description: `The house multiple rain water harvesting points. From the roof water flows down to these points to sink in the ground.`,
          likes: ['johnpapa', 'bradgreen', 'igorminar', 'martinfowler']
        },
        {
          id: 3,
          name: "Club House",
          description: `The house is equipped with a club house which has gym, spa and swmimming pool in its sprawling large green garden.`,
          likes: []
        },
        {
          id: 4,
          name: "Water Storage",
          description: `The house has large water storage capcacity run the house in case of water shortages for 2 complete months.`,
          likes: []
        }
      ]
    },
    {
      id:4,
        name: 'Sunrise House',
        price: 90000,
        builtUpArea: '1440 sq. ft.',
        carpetArea: '1440 sq. ft.',
        configuration: '3 Bedrooms, 3 Bathrooms, Others',
        facing: 'East',
        age: '3 years',
        type: 'Individual House',
        location: {
        address: '3 Park Avenue',
        city: 'New York',
        country: 'United States of America'
        },
      facilities: [
        {
          id: 1,
          name: "Power Back Up",
          description: `The house has full 24 hour power back-up. The back-up has capacity to run all equipments of the house.`,
          likes: ['bradgreen', 'igorminar', 'martinfowler']
        },
        {
          id: 2,
          name: "Rain Water Harvesting",
          description: `The house multiple rain water harvesting points. From the roof water flows down to these points to sink in the ground.`,
          likes: ['johnpapa', 'bradgreen', 'igorminar', 'martinfowler']
        },
        {
          id: 3,
          name: "Club House",
          description: `The house is equipped with a club house which has gym, spa and swmimming pool in its sprawling large green garden.`,
          likes: []
        },
        {
          id: 4,
          name: "Water Storage",
          description: `The house has large water storage capcacity run the house in case of water shortages for 2 complete months.`,
          likes: []
        },
        {
          id: 5,
          name: "Visitor Parking",
          description: `The house has a large visitor parking with capacity to park 20 visitor cars.`,
          likes: ['bradgreen', 'igorminar']
        }
      ]
    },
    {
      id:5,
        name: 'Shanti Mension',
        price: 190000,
        builtUpArea: '2440 sq. ft.',
        carpetArea: '2440 sq. ft.',
        configuration: '6 Bedrooms, 6 Bathrooms, Others',
        facing: 'East',
        age: '6 years',
        type: 'Individual House',
        location: {
        address: '2 Park Avenue',
        city: 'New York',
        country: 'United States of America'
        },
      facilities: [
        {
          id: 1,
          name: "Power Back Up",
          description: `The house has full 24 hour power back-up. The back-up has capacity to run all equipments of the house.`,
          likes: ['bradgreen', 'igorminar', 'martinfowler']
        },
        {
          id: 2,
          name: "Rain Water Harvesting",
          description: `The house multiple rain water harvesting points. From the roof water flows down to these points to sink in the ground.`,
          likes: ['johnpapa', 'bradgreen', 'igorminar', 'martinfowler']
        },
        {
          id: 3,
          name: "Club House",
          description: `The house is equipped with a club house which has gym, spa and swmimming pool in its sprawling large green garden.`,
          likes: []
        },
        {
          id: 4,
          name: "Water Storage",
          description: `The house has large water storage capcacity run the house in case of water shortages for 2 complete months.`,
          likes: []
        },
        {
          id: 5,
          name: "Visitor Parking",
          description: `The house has a large visitor parking with capacity to park 20 visitor cars.`,
          likes: ['bradgreen', 'igorminar']
        }
      ]
    }
  ];