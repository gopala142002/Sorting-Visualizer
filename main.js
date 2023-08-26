var ip_array=document.getElementById("arrsize");
let array_size=ip_array.value;

var ip_gen=document.getElementById("newArray_btn");

var ip_speed=document.getElementById("visual_speed");  
let visualSpeed=ip_speed.value;


var sort_algo=document.getElementById("s_algo");
var algo;

var sortBtn=document.getElementById("sort_btn");
var box_sizes=[];
var box=[];

var side_margin;
var cont=document.getElementById("div_right");
var comp=document.getElementById("algo_complexity");
cont.style.display="flex";
cont.style.alignItems="flex-end";
var bestCase,worstCase;
ip_gen.addEventListener("click",generate_array);
ip_array.addEventListener("input",update_array_size);

function generate_array()
{
    cont.innerHTML="";
    for(var i=0;i<array_size;i++)
    {
        box_sizes[i]=Math.floor(Math.random() *90)+5;
        box[i]=document.createElement("div");
        cont.appendChild(box[i]);
        side_margin=0.1;
        box[i].style=" margin:" + side_margin + "%; background-color:white; width:" + (150/array_size-(2*side_margin)) + "%; height:" + (box_sizes[i]) + "%;";
    }
    
}

function update_array_size()
{
    array_size=ip_array.value;
    generate_array();
}

window.onload=update_array_size();


sortBtn.addEventListener("click",sortAlgos);

function sortAlgos()
{
    algo=sort_algo.value;
    if(algo=="Select Sorting Algorithm")
    {
        alert("PLEASE SELECT SORTING ALGORITHM");
        return;
    }
    switch(algo)
    {
        case "bubbleSort":
            bubbleSort();
            break;
        case "selectionSort":selectionSort();
            break;
        case "mergeSort":mergeSort();
            break;
        case "quickSort":heapSort();
            break;
        case "insertionSort":insertionSort();
            break;
    }
}
