const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.resolve("./db/contacts.json");

async function listContacts() {
  try {
    const allContacts = await fs.readFile(contactsPath, "utf8");
    console.table(JSON.parse(allContacts));
  } catch (err) {
    throw err;
  }
}

async function getContactById(id) {
  try {
    const allContacts = await fs.readFile(contactsPath, "utf8");
    const parsedContacts = JSON.parse(allContacts);
    const contactById = parsedContacts.find((contact) => contact.id === id);
    console.log(contactById);
  } catch (err) {
    throw err;
  }
}

async function removeContact(id) {
  try {
    const allContacts = await fs.readFile(contactsPath, "utf8");
    const parsedContacts = JSON.parse(allContacts);
    const filteredContacts = parsedContacts.filter(
      (contact) => contact.id !== id
    );
    console.table(filteredContacts);

    await fs.writeFile(
      contactsPath,
      JSON.stringify(filteredContacts, null, 2),
      { encoding: "utf8" }
    );
  } catch (err) {
    throw err;
  }
}

async function addContact(name, email, phone) {
  try {
    const newContact = { name, email, phone };
    const allContacts = await fs.readFile(contactsPath, "utf8");
    const parsedContacts = JSON.parse(allContacts);
    const contactsList = [...parsedContacts, newContact];
    console.table(contactsList);

    await fs.writeFile(contactsPath, JSON.stringify(contactsList, null, 2), {
      encoding: "utf8",
    });
  } catch (err) {
    throw err;
  }
}
module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
