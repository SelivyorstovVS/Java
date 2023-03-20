class Patient {
    constructor(f, i, o, d, s, sh) {
        this.F=f;
        this.I=i;
        this.O=o;
        this.D= new Date(d);
        this.S=s;
        this.SH=sh;
    }
    setById() {
        document.getElementById("F").textContent = this.F;
        document.getElementById("I").textContent = this.I;
        document.getElementById("O").textContent = this.O;
        document.getElementById("Y").textContent = this.D.getFullYear();
        document.getElementById("S").textContent = this.S;
        document.getElementById("SH").textContent = this.SH;
    }
}
let Ivanov = new Patient ('Иванов','Иван','Иванович', new Date(1980, 6, 10),"м","Назначено");
Ivanov.setById();
let Sidorov = new Patient ("Сидоров","Сидор","Сидорович", new Date(1974, 5, 1),"м","Медотвод");
Sidorov.setById();
//let Kalinova = new Patient ('Калинова','Наталья','Ивановна', new Date(1985, 4, 9),"ж","Исполнено");
//Kalinova.setById();