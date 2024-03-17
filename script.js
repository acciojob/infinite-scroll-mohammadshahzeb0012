//your code here!
    let itemCount = 1;
    const container = document.querySelector("#infi-list");
    function generateElements(n) {
      for (let i = 0; i < n; i++) {
        const element = document.createElement("li");
        element.innerText = `Item ${itemCount++}`;
        element.className = "item";
        container.appendChild(element);
      }
    }
    generateElements(10);
    container.addEventListener('scroll', () => {
      const maxScrollHeight =
     container.scrollHeight - container.clientHeight
      const scrollHeight = container.scrollTop;
      let reamaingScrollHeight = maxScrollHeight - scrollHeight;
      // console.log(reamaingScrollHeight)
      if (reamaingScrollHeight <= 5) {
        generateElements(10);
      }
    })
