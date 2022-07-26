let shareButton = document.querySelector('.div-share')
let shareButtonMobile = document.querySelector('.div-share-mobile')
let shareMessage = document.querySelector('.share-message-desktop')
let infoBottom = document.querySelector('.card-info-bottom')
let socialMedias = document.querySelectorAll('.fa-brands')
shareMessage.control = false

for(let i = 0; i < socialMedias.length; i++) {
    socialMedias[i].addEventListener('click', function () {
        if(socialMedias[i].id == 1) {
            window.open("https://www.facebook.com/sharer/sharer.php?u=article-preview-card-phi.vercel.app/", "_blank")
        }
        else if (socialMedias[i].id == 2) {
            window.open("https://www.twitter.com", "_blank")
        }
        else {
            window.open("https://www.pinterest.com", "_blank")
        }
    })
}

shareButton.addEventListener('click', function () {
    if(shareMessage.control) {
        shareMessage.style.display = 'none'
        shareMessage.control = false
    }
    else {
        if (window.innerWidth <= 900) {
            showMessageMobile()
        }
        else {
            showMessageDesktop()
        }
        
    }

})

window.addEventListener('mousemove', function () {
    if(shareMessage.control && this.window.innerWidth >= 900) {
        window.addEventListener('click', cleanMessage)
    }
    else {
        window.removeEventListener('click', cleanMessage)
    }     
})

window.addEventListener('resize', function () {
    if (shareMessage.control) {
        cleanMessage()
    }

    if (this.window.innerWidth >= 900){
        shareMessage = document.querySelector('.share-message-desktop')
    }
})

function showMessageDesktop() {
    let rectButton = shareButton.getBoundingClientRect()
    let x = rectButton.left
    let y = rectButton.top
    
    x = x - 107
    y = y - 70
        
    shareMessage.style.left = x + 'px'
    shareMessage.style.top = y + 'px'
    shareMessage.style.display = 'flex'

    shareMessage.control = true
}

function showMessageMobile() {
    shareMessage = document.querySelector('.share-message-mobile')

    shareMessage.style.display = 'flex'
    infoBottom.style.display = 'none'

    shareMessage.control = true

    shareButtonMobile.addEventListener('click', cleanMessage)

}

function cleanMessage() {
    shareMessage.style.display = 'none'
    infoBottom.style.display = 'flex'
    shareMessage.control = false
}
