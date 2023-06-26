class SCROOL {
    constructor(set) {
        this.el = document.querySelector(set.el)
        this.top = set.top
        this.el.style.position = 'fixed'
        this.el.style.top = this.scroll()
        this.unit = set.unit
        window.addEventListener('scroll', () => this.scroll())
        window.addEventListener('resize', () => this.scroll())
    }
    scroll() {
        this.window = this.scrollNumber()
        if (this.window - window.scrollY > 0) {
            this.el.style.top = this.window - window.scrollY + 'px'
        } else {
            this.el.style.top = 0
        }
    }
    scrollNumber() {
        if (this.unit == 'px') {
            return this.top >= 0 ? this.top : 0
        } else if (this.unit == '%' || this.unit == undefined) {
            return this.calc(window.innerHeight, this.top) - this.el.clientHeight
        }
    }
    calc(height, top) {
        return height / 100 * top
    }
}
const myScroll = new SCROOL({
    el: '.header__nav',
    top: 100,

})