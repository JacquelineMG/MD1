let group = {
  title: "Our Group",
  students: ["Albert", "Betty", "Carl", "Dinah"],
  showList() {
    let studentList = "";

    for (const s of this.students) {
      if (studentList.length) {
        studentList += `, ${s}`;
      } else {
        studentList += s;
      }
    }
    return `Currently Enrolled Students: ${studentList}`;
  }
};

console.log(group.showList());