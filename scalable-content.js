window.onload = () => {
  let wrapperChild = document.getElementById("wrapperChild");
  let wrapper = document.getElementById("wrapper");

  wrapper.style.height = `${document.documentElement.clientHeight}px`;
  
  document.body.onresize = doResize;
  
  function doResize(evt) {
    wrapper.style.height = `${document.documentElement.clientHeight}px`;
    
    let scale;

    scale = Math.min( 
      wrapper.clientWidth / wrapperChild.clientWidth, 
      wrapper.clientHeight / wrapperChild.clientHeight 
    );

    wrapperChild.style["transform"] = "translate( -50%, -50% ) " + "scale(" + scale + ")";
    wrapperChild.style['-webkit-transform'] = "translate( -50%, -50% ) " + "scale(" + scale + ")";

  }

  doResize();

}