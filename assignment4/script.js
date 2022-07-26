var names=new Array();
names[0]="Yaakov";
names[1]="John";
names[2]="Jen";
names[3]="jason";
names[4]="paul";
names[5]="frank";
names[6]="larry";
names[7]="paula";
names[8]="laura";
names[9]="jim";


for (var k = 0; k < names.length; k++) {
	if(names[k].charAt(0)==='J'|| names[k].charAt(0)==='j'){
        console.log("Goodbye "+ names[k])
	}
	else{
		console.log("Hello "+ names[k])
	}
}