const icon_btn = document.querySelectorAll('.icon_btn');
const section = document.querySelectorAll('.sec')
console.log(icon_btn)

function activeBtn() {
    icon_btn.forEach((item, index) => {

        const sections = section[index]

        item.addEventListener('click', () => {
            document.querySelector('.icon_btn.active_btn').classList.remove('active_btn');
            item.classList.add('active_btn');

            document.querySelector('.sec.active').classList.remove('active');
            sections.classList.add('active');
        })
    })
}

activeBtn()

function toggleThemes() {
    const btn_themes = document.querySelector('.themes')

    btn_themes.addEventListener('click', () => {
        document.body.classList.toggle('light-mode')
        btn_themes.classList.toggle('success')
    })
}

toggleThemes()