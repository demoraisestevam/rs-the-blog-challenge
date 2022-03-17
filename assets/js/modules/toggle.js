export default function initToggle() {

  const toggleButtons = document.querySelectorAll("[rel=js-toggle]")

  toggleButtons.forEach((elm) => {

    let target = elm.getAttribute('data-target')
    let targetElm = document.querySelector('[rel=' + target + ']')

    elm.addEventListener("click", () => {
      let inputExists = targetElm.querySelector('input')
      
      // Toggle
      targetElm.classList.toggle('active')
      
      // Set Styles
      let targetIsActive = targetElm.classList.contains('active')
      document.body.style.marginTop = targetIsActive ? targetElm.clientHeight + 'px' : '0px'

      if (targetIsActive && inputExists)
        inputExists.focus()

      // Remove active class on others targets
      toggleButtons.forEach((elmOther) => {
        let targetOther = elmOther.getAttribute('data-target')
        let targetOtherElm = document.querySelector('[rel=' + targetOther + ']')

        if (targetOther != target)
          targetOtherElm.classList.remove('active')
      })

    })
  })

}