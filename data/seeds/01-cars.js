exports.seed = function (knex) {
    return knex('car-dealer').truncate()
        .then(function () {
        
            return knex('car-dealer').insert([
                { Vin: '11111111111111111', Make: 'Cadillac', Model: 'ATS', Mileage: '40,500', Title: 'clean' },
                { Vin: '22222222222222222', Make: 'Cadillac', Model: 'CTS', Mileage: '14,203', Title: 'salvage' },
                { Vin: '33333333333333333', Make: 'Cadillac', Model: 'Escalade', Mileage: '105,000', Title: 'clean' },
                { Vin: '44444444444444444', Make: 'Cadillac', Model: 'XTS', Mileage: '75,678', Title: 'clean' },
            ]);
        });

}