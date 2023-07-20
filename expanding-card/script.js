const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}




// const panels = document.querySelectorAll('.panel');

//   	for (var i = 0; i < panels.length; i++) {
//       var value = panels[i];
//       value.addEventListener('click', () => {
      
//       removeActiveClasses();
//       console.log('remove2', removeActiveClasses());
//       value.classList.add('active');
//       } )
//     }
  
//   	function removeActiveClasses() {
//       	for (var j = 0; j < panels.length; j++) {
//           panels.classList.remove('active');
//         }
//     }