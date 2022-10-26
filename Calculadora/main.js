function Calculadora() {
    this.display = document.querySelector('.display');

    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            const el = event.target;
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.addNumDisplay(el);
            if (el.classList.contains('btn-del')) this.addNumDisplay(el);
            if (el.classList.contains('btn-')) this.addNumDisplay(el);
        });
    }

    this.addNumDisplay = el => this.display.value += el.innerText;

    this.inicia = () => {
        this.capturaCliques();
    };
}