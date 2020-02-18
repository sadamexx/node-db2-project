
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { Make: 'Acura', Model: 'Integra', Vin: '123456789', Mileage: '280,500' },
        { Make: 'Nissan', Model: 'Altima', Vin: '9874123654', Mileage: '200,000' },
        { Make: 'Toyota', Model: 'Avalon', Vin: '741258963', Mileage: '180,700'}
      ]);
    });
};
