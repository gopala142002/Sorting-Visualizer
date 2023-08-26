function sort()
{
    let i=0;
    for(i=0;i<array_size;i++)
    {
        var j=0;
        for(j=0; j < array_size-i-1 ; j++)
        {
            box_update(box[j],box_sizes[j],"blue",i,j);
            if(box_sizes[j] > box_sizes[j+1])
            {
                box_update(box[j],box_sizes[j],"red",i,j);
                box_update(box[j+1],box_sizes[j+1],"red",i,j);
                //swaping 
                let temp=box_sizes[j];
                box_sizes[j]=box_sizes[j+1];
                box_sizes[j+1]=temp;

                box_update(box[j],box_sizes[j],"red",i,j);
                box_update(box[j+1],box_sizes[j+1],"red",i,j);
            }
            box_update(box[j],box_sizes[j],"white",i,j);
        }
        box_update(box[j],box_sizes[j],"rgb(61, 250, 4)",i,j);
    }
}
async function bubbleSort()
{   
    document.getElementById("worst_case").innerHTML="O(N^2)";
    document.getElementById("average_case").innerHTML="O(N^2)";
    document.getElementById("best_case").innerHTML="O(N)";
    document.getElementById("space_worst_case").innerHTML="O(1)";
    disable_ip();
    let data=await sort();
    enable_ip();
}

