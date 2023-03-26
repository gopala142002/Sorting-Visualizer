let cspeed=0;
function box_update(box, height, color, i, j) 
{
  visualSpeed=ip_speed.value;
  let delay=100-visualSpeed;
  window.setTimeout(() => {
    box.style ="margin :" +side_margin +"%;background-color:" +color +";width:" +(150 / array_size - 2 * side_margin) +"%;height:" +height +"%;";
    if(algo== "bubbleSort" && i===array_size-1 && j===0)  enable_ip();
    if(algo== "selectionSort" && i===array_size-1 && j===array_size-1) enable_ip();
    if(algo== "insertionSort" && i===array_size-1 && j===array_size-1) enable_ip();
  }, cspeed+=delay*4);
}

function enable_ip()
{
  console.log("disable")
  ip_array.disabled=false;
  ip_gen.disabled=false;
  ip_speed.disabled=false;
  sort_algo.disabled=false;
  sortBtn.disabled=false;
}

function disable_ip()
{
    ip_array.disabled=true;
    ip_gen.disabled=true;
    ip_speed.disabled=true;
    sort_algo.disabled=true;
    sortBtn.disabled=true;
}

