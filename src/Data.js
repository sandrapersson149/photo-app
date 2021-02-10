// https://images.unsplash.com/photo-

const Data = {
  "pics": [
    {
      "title": 'Northern lights',
      "description": 'Waiting for northern lights.',
      "long_desc": 'Ramps activated charcoal scenester consectetur cold-pressed tumblr reprehenderit proident normcore tbh knausgaard irure. Godard lyft portland heirloom, sustainable swag ea officia tumblr affogato chicharrones.',
      "pic_path": '1571751857110-4d580a33fa1a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1049&q=80',
      "id": 1,
      "photografer": 'Jonatan Pie',
      "category": 'Nature',
    },
    {
      "title": 'Glas lake',
      "description": 'The lake is called Pragser Wildsee, South Tyrol.',
      "long_desc": 'In try-hard leggings edison bulb. Shaman synth drinking vinegar chillwave coloring book brooklyn. Air plant activated charcoal lumbersexual kickstarter, ut reprehenderit hammock nostrud.',
      "pic_path": '1497846498055-4f8b3f1a9b81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      "id": 2,
      "photografer": 'Paul Gilmore',
      "category": 'Nature',
    },
    {
      "title": 'A view from above',
      "description": 'Views through windows in Singapore.',
      "long_desc": 'Readymade tilde ut, farm-to-table letterpress tote bag fam do sustainable banjo food truck. Farm-to-table hashtag health goth 3 wolf moon artisan exercitation wayfarers post-ironic helvetica enim squid franzen.',
      "pic_path": '1587393173173-78908b3a6104?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1049&q=80',
      "id": 3,
      "photografer": 'Mark C',
      "category": 'City',
    },
    {
      "title": 'Late night lightshow',
      "description": 'Beautiful Bangkok view from Lebua Hotel',
      "long_desc": 'In try-hard leggings edison bulb. Shaman synth drinking vinegar chillwave coloring book brooklyn. Air plant activated charcoal lumbersexual kickstarter, ut reprehenderit hammock nostrud.',
      "pic_path": '1610276434254-4b6e1ad564f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      "id": 4,
      "photografer": 'Vera Greiner',
      "category": 'City',
    },
    {
      "title": 'Crossing streets',
      "description": 'In the city that never sleeps.',
      "long_desc": 'Mumblecore cronut fingerstache gastropub selfies kickstarter adipisicing. Commodo church-key photo booth master cleanse crucifix shoreditch pour-over selvage twee in copper mug fixie brunch heirloom ut.',
      "pic_path": '1449824913935-59a10b8d2000?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      "id": 5,
      "photografer": 'Andea Cau',
      "category": 'Street',
    },
    {
      "title": 'San Francisco gems',
      "description": 'Mission Disctrict Gems in San Fran',
      "long_desc": 'Readymade tilde ut, farm-to-table letterpress tote bag fam do sustainable banjo food truck. Farm-to-table hashtag health goth 3 wolf moon artisan exercitation wayfarers post-ironic helvetica enim squid franzen.',
      "pic_path": '1503449539626-3ca98a08ad3c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80',
      "id": 6,
      "photografer": 'Richard Lee',
      "category": 'Street',
    },
    {
      "title": 'Peaceful nature',
      "description": 'Take a moment and look at this nature',
      "long_desc": 'Mumblecore cronut fingerstache gastropub selfies kickstarter adipisicing. Commodo church-key photo booth master cleanse crucifix shoreditch pour-over selvage twee in copper mug fixie brunch heirloom ut.',
      "pic_path": '1610105733946-11e9e8605d2b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      "id": 7,
      "photografer": 'Zan Janzekovice',
      "category": 'Nature',
    },
    {
      "title": 'Color Bomb',
      "description": 'Smoke on the water',
      "long_desc": 'Ramps activated charcoal scenester consectetur cold-pressed tumblr reprehenderit proident normcore tbh knausgaard irure. Godard lyft portland heirloom, sustainable swag ea officia tumblr affogato chicharrones.',
      "pic_path": '1518351330216-a38c8ab14640?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
      "id": 8,
      "photografer": 'Thomas Borns',
      "category": 'People',
    },
    {
      "title": 'Tall buildings',
      "description": 'Archetecture at its best, Beijing Sanlitun.',
      "long_desc": 'Ramps activated charcoal scenester consectetur cold-pressed tumblr reprehenderit proident normcore tbh knausgaard irure. Godard lyft portland heirloom, sustainable swag ea officia tumblr affogato chicharrones.',
      "pic_path": '1486108334972-f02b6c78ba07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      "id": 9,
      "photografer": 'Raja Sen',
      "category": 'Architecture',
    }]
};


export default Data;
