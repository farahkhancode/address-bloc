const inquirer = require('inquirer');

module.exports = class MenuController {
  constructor(){
    this.mainMenuQuestions = [
     {
      type: "list",
       name: "mainMenuChoice",
       message: "Please choose from an option below: ",
       choices: [
         "Add new contact",
         "Exit",
         "Get date"
       ]
     }
   ];
   this.contacts = [];
  }

  main(){
    console.log(`Welcome to AddressBloc!`);
  inquirer.prompt(this.mainMenuQuestions).then((response) => {
    switch(response.mainMenuChoice){
      case "Add new contact":
        this.addContact();
        break;
      case "Exit":
        this.exit();
      case "Get date":
        this.getDate();
      default:
        console.log("Invalid input");
        this.main();
    }
  })
  .catch((err) => {
    console.log(err);
  });
     }

  clear(){
      console.log("\x1Bc");
     }

  addContact(){
      this.clear();
      console.log('addContact called');
      this.main();
      }

  getDate(){
    this.clear();
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    console.log(dateTime);
    this.main();
  }

  exit(){
      console.log("Thanks for using AddressBloc!");
      process.exit();
      }

}
