const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Event = require('./../../models/eventModel');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('DB connection success!🗃️');
  });

// READ JSON FILE
const events = JSON.parse(fs.readFileSync(`${__dirname}/events.json`, 'utf8'));

// IMPORT DATA INTO DB
const importData = async () => {
  try {
    await Event.create(events);
    console.log('Data successfully loaded!✅');
  } catch (err) {
    console.log(err);
  } finally {
    process.exit();
  }
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    await Event.deleteMany();
    console.log('Data successfully deleted!🗑️');
  } catch (err) {
    console.log(err);
  } finally {
    process.exit();
  }
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
