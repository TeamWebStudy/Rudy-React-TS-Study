abstract class User {
    constructor(
        private firstname: string, // JS에는 private public 개념이 없다.
        private lastname: string,
        protected nickname: string,// Subclass에서는 접근 가능
    ) {}

    public getFullName() {
        return `${this.firstname} ${this.lastname}`
    }

    abstract getNickName(): void
}

class Player extends User {
    public getNickName(): void {
        console.log(this.nickname)
    }
}

const nico = new Player("seungjin", "lee", "Rudy")

nico.getFullName()

