class BouncingBlob {
    constructor(element, x, y, xVel, yVel) {
        this.element = element;
        this.x = x;
        this.y = y;
        this.xVel = xVel;
        this.yVel = yVel;
    }

    updatePosition() {
        this.x += this.xVel;
        this.y += this.yVel;

        this.xVel *= (this.x < 0 || this.x > window.innerWidth - this.element.offsetWidth) ? -1 : 1;
        this.yVel *= (this.y < 0 || this.y > window.innerHeight - this.element.offsetHeight) ? -1 : 1;

        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
}


document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.root');
    const colors = ['blue', 'pink', 'purple'];
    const blobs = [];

    colors.forEach((color, index) => {
        const blob = document.createElement('span');
        blob.classList.add('bouncing-blob', `bouncing-blob--${color}`);
        container.appendChild(blob);
    
        const x = Math.random() * (window.innerWidth - blob.offsetWidth);
        const y = Math.random() * (window.innerHeight - blob.offsetHeight);
        const xVel = (Math.random() - 0.5) * index;
        const yVel = (Math.random() - 0.5) * index;

        blobs.push(new BouncingBlob(blob, x, y, xVel, yVel));
    });

    function animate() {
        blobs.forEach(blob => blob.updatePosition());
        requestAnimationFrame(animate);
    }

    animate();
});