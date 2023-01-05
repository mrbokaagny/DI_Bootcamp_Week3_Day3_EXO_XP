function dragStart(event) {
    event.dataTransfer.setData("text", event.target.id);
    }

    function dragDrop(event) {
        event.preventDefault();
        let data = event.dataTransfer.getData("text");
        console.log("data: ",  data) 
          
        let box = document.getElementById(data)
        event.target.appendChild(box);
        }

        function allowLeave(event) {
            event.target.classList.remove('over');
          }

          function allowEnter(event) {
            event.target.classList.add('over');
          }
          function allowDrop(event) {
            event.preventDefault(); 
          }          