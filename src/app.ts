class Department {
  // private id: string;
  // private name: string;
  protected employees: string[] = [];

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
  private lastReport: string;

  get mostRecentReport() {
    if (!this.lastReport) {
      throw new Error('No reports found.');
    }
    return this.lastReport;
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please enter a valid report!");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, 'IT');
    this.lastReport = reports[0];
  }

  addEmployee(employee: string): void {
    if (employee === 'Max') {
      return;
    }

    this.employees.push(employee);
  }

  addReport(report: string) {
    this.reports.push(report);
    this.lastReport = report;
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

accounting.mostRecentReport = 'Year End Report';
accounting.addReport('Something went wrong...');
console.log(accounting.mostRecentReport);
accounting.printReports();

accounting.addEmployee('Max');
accounting.addEmployee('Manu');
accounting.printEmployeeInformation();
