function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
	this.setSubject = function(subjectName) {
		this.subjectName = subjectName;
	}
}
let student1 = new Student("Василиса", "женский", 19);
let student2 = new Student("Артём", "мужской", 25);
Student.prototype.addMarks = function(...marks) {
	if (this.excluded) {
		return
	};
	if (this.marks === 0) {
		return 0
	};
	this.marks.push(...marks);
}

Student.prototype.getAverage = function(...marks) {
	if (!this.marks || this.marks.length === 0) {
		return 0
	};
	let sum = this.marks.reduce((acc, mark) => acc + mark, 0);
	return sum / this.marks.length;
}

Student.prototype.exclude = function(reason) {
	this.excluded = reason;
	delete this.subjectName;
	delete this.marks;
}