var names=new Array();
names[0]="Yaakov";
names[1]="Piku";
names[2]="Jack";
names[3]="Ronaldo";
names[4]="Jinx";
names[5]="Viraj";
names[6]="Leo";
names[7]="paula";
names[8]="jerome";
names[9]="jeckob";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}