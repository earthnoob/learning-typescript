class Department {
  // private id: string;
  // private name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, private name: string) {
    this.id = id;
    this.name = name;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    // this.id = 'd2';
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
}
class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, 'IT');
  }

  addReport(report: string) {
    this.reports.push(report);
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment('d1', ['John']);
console.log(it);

// const itCopy = { name: 'Dummy', describe: it.describe };
// itCopy.describe();

it.addEmployee('Max');
it.addEmployee('Manu');

// it.employees[2] = 'Anna';

it.describe();
it.printEmployeeInformation();

const accounting = new AccountingDepartment('d2', []);

accounting.addReport('Seomthing went wrong...');
accounting.printReports();
