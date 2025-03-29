
$(document).ready(function() {
    const pages = new Pageable("#container", {
        pips: false,
        animation: 0,
        delay: 300,
        onBeforeStart: function (index) {
            let page = this.pages[index]

            $(".header").toggleClass("white", this.pages[this.index].classList.contains("white-header"))
            page.classList.remove("pg-active")
        },
        events: {
            wheel: true,
            mouse: false,
            touch: true,
            keydown: true
        }
    });

    pages.scrollToPage(pages.index + 1)

    pages.on("scroll.start", data => {
        let nextPage = pages.pages[data.index],
            currentPage = pages.pages[pages.oldIndex]

        console.log(pages)

        if (currentPage.classList.contains("sub-scroll")) {
            if (currentPage.classList.contains("sub-active")) {
                currentPage.classList.remove("sub-active")
            } else {
                console.log("sctoll to " + (pages.oldIndex + 1))
                pages.scrollToPage(pages.oldIndex + 1)
                currentPage.classList.add("sub-active")
            }
        }
    })

    setTimeout(function () {
        $("body").removeClass("isLoading")
    },400)
});