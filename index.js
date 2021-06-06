const argv = require("yargs").argv;

const processingMethods = require("./contacts.js");

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      processingMethods.listContacts();
      break;

    case "get":
      processingMethods.getContactById(id);
      break;

    case "add":
      processingMethods.addContact(name, email, phone);
      break;

    case "remove":
      processingMethods.removeContact(id);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
